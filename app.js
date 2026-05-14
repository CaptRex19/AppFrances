// ==========================================================
// AppFrances - Renderer (web + Electron + PWA Android)
// ==========================================================

const VOCAB = window.VOCAB;
const COURSES = window.COURSE_ORDER.map(id => VOCAB[id]);
const ALL_ITEMS = COURSES.flatMap(c => c.items);
const LISTENING = window.LISTENING;

// ---------- Persistencia ----------
const STORAGE_KEY = 'appfrances.v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    console.warn('Estado corrupto, reseteando.', e);
    return defaultState();
  }
}
function defaultState() {
  return {
    srs: {},
    totals: { studied: 0, correct: 0, wrong: 0, typed: 0 },
    quizHistory: [],
    listened: {},
    voice: null,
    rate: 0.95
  };
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { console.warn('No se pudo guardar', e); }
}
let state = loadState();

// ---------- SRS Leitner ----------
const BOX_INTERVALS_HOURS = [0, 0, 24, 72, 168, 336];

function getSRS(item) {
  if (!state.srs[item.id]) {
    state.srs[item.id] = { box: 1, lastSeen: 0, due: 0, seen: 0, correct: 0, wrong: 0 };
  }
  return state.srs[item.id];
}
function markCorrect(item) {
  const r = getSRS(item);
  r.box = Math.min(5, r.box + 1);
  r.lastSeen = Date.now();
  r.due = Date.now() + BOX_INTERVALS_HOURS[r.box] * 3600 * 1000;
  r.seen++; r.correct++;
  state.totals.correct++; state.totals.studied++;
  saveState();
}
function markWrong(item) {
  const r = getSRS(item);
  r.box = 1;
  r.lastSeen = Date.now();
  r.due = Date.now();
  r.seen++; r.wrong++;
  state.totals.wrong++; state.totals.studied++;
  saveState();
}
function isDue(item) {
  const r = state.srs[item.id];
  if (!r) return true;
  return r.due <= Date.now();
}
function boxOf(item) {
  return (state.srs[item.id] && state.srs[item.id].box) || 0;
}

// ---------- Normalización para typing ----------
function normalize(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[.,;:!?¿¡()«»"']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
function answerMatches(input, expected) {
  const ni = normalize(input);
  const ne = normalize(expected);
  if (ni === ne) return 'exact';
  // Aceptar variantes con / (ej: "Caja / sótano")
  const parts = ne.split('/').map(p => p.trim()).filter(Boolean);
  if (parts.some(p => normalize(p) === ni)) return 'exact';
  // Distancia de Levenshtein simple para tolerar 1-2 errores
  const dist = levenshtein(ni, ne);
  if (dist <= Math.max(1, Math.floor(ne.length / 8))) return 'close';
  return 'no';
}
function levenshtein(a, b) {
  if (!a) return b.length; if (!b) return a.length;
  const m = []; for (let i = 0; i <= b.length; i++) { m[i] = [i]; }
  for (let j = 0; j <= a.length; j++) { m[0][j] = j; }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      m[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
        ? m[i - 1][j - 1]
        : Math.min(m[i - 1][j - 1] + 1, Math.min(m[i][j - 1] + 1, m[i - 1][j] + 1));
    }
  }
  return m[b.length][a.length];
}

// ---------- TTS ----------
const tts = {
  voices: [], selected: null, ready: false,
  init() {
    const populate = () => {
      const all = speechSynthesis.getVoices();
      const fr = all.filter(v => /fr/i.test(v.lang));
      this.voices = fr.length ? fr : all;
      this.ready = true;
      const sel = document.getElementById('voice-select');
      if (!sel) return;
      sel.innerHTML = '';
      if (this.voices.length === 0) {
        const opt = document.createElement('option');
        opt.textContent = 'Sin voces';
        sel.appendChild(opt);
        sel.disabled = true;
        return;
      }
      this.voices.forEach((v, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = `${v.name} (${v.lang})`;
        sel.appendChild(opt);
      });
      const savedIdx = state.voice ? this.voices.findIndex(v => v.name === state.voice) : -1;
      const idx = savedIdx >= 0 ? savedIdx : Math.max(0, this.voices.findIndex(v => /fr/i.test(v.lang)));
      sel.value = idx;
      this.selected = this.voices[idx];
      sel.onchange = () => {
        this.selected = this.voices[+sel.value];
        state.voice = this.selected ? this.selected.name : null;
        saveState();
      };
    };
    populate();
    if ('speechSynthesis' in window) speechSynthesis.onvoiceschanged = populate;
  },
  speak(text, rate) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (this.selected) u.voice = this.selected;
    u.lang = (this.selected && this.selected.lang) || 'fr-FR';
    u.rate = rate || state.rate || 0.95;
    u.pitch = 1.0;
    speechSynthesis.speak(u);
  },
  stop() { if ('speechSynthesis' in window) speechSynthesis.cancel(); }
};

// ---------- Utils ----------
function el(tag, props, ...children) {
  const node = document.createElement(tag);
  if (props) {
    for (const k in props) {
      if (k === 'class') node.className = props[k];
      else if (k === 'style') Object.assign(node.style, props[k]);
      else if (k.startsWith('on')) node.addEventListener(k.slice(2).toLowerCase(), props[k]);
      else if (k === 'html') node.innerHTML = props[k];
      else node.setAttribute(k, props[k]);
    }
  }
  for (const c of children) {
    if (c == null || c === false) continue;
    if (Array.isArray(c)) c.forEach(x => { if (x != null && x !== false) node.append(typeof x === 'string' || typeof x === 'number' ? document.createTextNode(x) : x); });
    else if (typeof c === 'string' || typeof c === 'number') node.appendChild(document.createTextNode(c));
    else node.appendChild(c);
  }
  return node;
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickRandom(arr, n) { return shuffle(arr).slice(0, n); }
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = el('div', { class: 'toast' }); document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 1800);
}
function setStatus(msg) {
  const el = document.getElementById('footer-status');
  if (el) el.textContent = msg;
}
function courseOfItem(item) { return VOCAB[item.courseId]; }

// ---------- Router (con hash para PWA shortcuts) ----------
const main = document.getElementById('app-main');
let currentView = 'home';
let viewParams = {};

function navigate(view, params = {}, fromHash = false) {
  currentView = view;
  viewParams = params;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.view === view));
  if (!fromHash) {
    const hash = '#' + view;
    if (location.hash !== hash) history.replaceState(null, '', hash);
  }
  window.scrollTo(0, 0);
  render();
}

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => navigate(tab.dataset.view));
});
window.addEventListener('hashchange', () => {
  const view = location.hash.replace('#', '');
  if (['home','lessons','flashcards','quiz','typing','listening','progress'].includes(view)) {
    navigate(view, {}, true);
  }
});

// ---------- Vistas ----------
function render() {
  main.innerHTML = '';
  tts.stop();
  if (currentView === 'home') return renderHome();
  if (currentView === 'lessons') return renderLessons();
  if (currentView === 'flashcards') return renderFlashcards();
  if (currentView === 'quiz') return renderQuiz();
  if (currentView === 'typing') return renderTyping();
  if (currentView === 'listening') return renderListening();
  if (currentView === 'progress') return renderProgress();
}

// ==================== HOME ====================
function renderHome() {
  const totalItems = ALL_ITEMS.length;
  const learned = ALL_ITEMS.filter(it => boxOf(it) >= 4).length;
  const dueNow = ALL_ITEMS.filter(it => state.srs[it.id] && isDue(it)).length;
  const accuracy = state.totals.studied > 0
    ? Math.round((state.totals.correct / state.totals.studied) * 100)
    : 0;

  main.append(
    el('section', { class: 'hero' },
      el('h2', null, '¡Bonjour ! 🇫🇷'),
      el('p', null,
        'Aprende francés práctico: vocabulario, flashcards, quiz, escritura y comprensión oral. ',
        'Empieza por las lecciones, refuerza con flashcards SRS, y escucha 40 audios reales. ',
        'Tu progreso se guarda automáticamente.'
      )
    ),
    el('div', { class: 'stats' },
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, totalItems),
        el('div', { class: 'stat-label' }, 'Palabras')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value', style: { color: 'var(--ok)' } }, learned),
        el('div', { class: 'stat-label' }, 'Aprendidas')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value', style: { color: 'var(--warn)' } }, dueNow),
        el('div', { class: 'stat-label' }, 'Repasar')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, accuracy + '%'),
        el('div', { class: 'stat-label' }, 'Aciertos')
      )
    ),
    el('div', { class: 'section-title' }, 'Cursos'),
    el('div', { class: 'course-grid' }, ...COURSES.map(c => courseCard(c))),

    el('div', { class: 'section-title' }, 'Empezar ahora'),
    el('div', { class: 'quick-actions' },
      el('button', { class: 'qa-btn', onclick: () => navigate('flashcards', { courseId: 'all', mode: 'due' }) },
        el('span', { class: 'qa-emoji' }, '🔁'), 'Repasar pendientes',
        el('span', { class: 'qa-sub' }, `${dueNow} palabras por revisar`)
      ),
      el('button', { class: 'qa-btn', onclick: () => navigate('typing', { courseId: 'all' }) },
        el('span', { class: 'qa-emoji' }, '⌨️'), 'Escribir traducciones',
        el('span', { class: 'qa-sub' }, 'Modo más exigente, fija mejor')
      ),
      el('button', { class: 'qa-btn', onclick: () => navigate('quiz', { courseId: 'all' }) },
        el('span', { class: 'qa-emoji' }, '🎯'), 'Quiz rápido',
        el('span', { class: 'qa-sub' }, '10 preguntas opción múltiple')
      ),
      el('button', { class: 'qa-btn', onclick: () => navigate('listening') },
        el('span', { class: 'qa-emoji' }, '🎧'), 'Comprensión oral',
        el('span', { class: 'qa-sub' }, '40 audios reales con transcripción')
      )
    )
  );
}

function courseCard(course) {
  const learned = course.items.filter(it => boxOf(it) >= 4).length;
  const pct = Math.round((learned / course.items.length) * 100);
  return el('div', { class: 'course-card', onclick: () => navigate('lessons', { courseId: course.id }) },
    el('div', { class: 'course-icon' }, course.icon),
    el('h3', null, course.name),
    el('p', { class: 'course-desc' }, course.description),
    el('div', { class: 'course-meta' },
      el('span', null, `${course.items.length} palabras`),
      el('span', null, `${pct}% dominado`)
    ),
    el('div', { class: 'course-bar' }, el('span', { style: { width: pct + '%' } }))
  );
}

// ==================== LESSONS ====================
function renderLessons() {
  const { courseId, theme } = viewParams;

  if (!courseId) {
    main.append(
      el('div', { class: 'breadcrumbs' }, el('span', null, 'Lecciones')),
      el('div', { class: 'section-title' }, 'Elige un curso'),
      el('div', { class: 'course-grid' }, ...COURSES.map(c => courseCard(c)))
    );
    return;
  }

  const course = VOCAB[courseId];
  if (!course) return navigate('lessons');

  if (!theme) {
    const themes = {};
    course.items.forEach(it => { themes[it.cat] = (themes[it.cat] || 0) + 1; });
    main.append(
      el('div', { class: 'breadcrumbs' },
        el('a', { onclick: () => navigate('lessons') }, 'Lecciones'),
        el('span', null, '›'),
        el('span', null, course.name)
      ),
      el('div', { class: 'page-head' },
        el('h2', { style: { margin: 0 } }, course.icon + ' ' + course.name),
        el('div', { class: 'page-head-actions' },
          el('button', { class: 'btn btn-primary', onclick: () => navigate('flashcards', { courseId }) }, '🎴 Flashcards'),
          el('button', { class: 'btn', onclick: () => navigate('quiz', { courseId }) }, '🎯 Quiz')
        )
      ),
      el('div', { class: 'section-title' }, 'Temas'),
      el('div', { class: 'theme-grid' },
        ...Object.entries(themes).map(([t, n]) =>
          el('div', { class: 'theme-card', onclick: () => navigate('lessons', { courseId, theme: t }) },
            el('h4', null, t),
            el('div', { class: 'theme-count' }, `${n} palabras`)
          )
        )
      )
    );
    return;
  }

  const items = course.items.filter(it => it.cat === theme);
  main.append(
    el('div', { class: 'breadcrumbs' },
      el('a', { onclick: () => navigate('lessons') }, 'Lecciones'),
      el('span', null, '›'),
      el('a', { onclick: () => navigate('lessons', { courseId }) }, course.name),
      el('span', null, '›'),
      el('span', null, theme)
    ),
    el('div', { class: 'page-head' },
      el('h2', { style: { margin: 0 } }, `${course.icon} ${theme}`),
      el('div', { class: 'page-head-actions' },
        el('button', { class: 'btn btn-primary', onclick: () => navigate('flashcards', { courseId, theme }) }, '🎴 Estudiar'),
        el('button', { class: 'btn', onclick: () => navigate('quiz', { courseId, theme }) }, '🎯 Quiz')
      )
    ),
    el('div', { class: 'vocab-list' },
      ...items.map(it =>
        el('div', { class: 'vocab-row' },
          el('div', { class: 'vocab-fr' }, it.fr),
          el('div', { class: 'vocab-es' }, it.es),
          el('button', { class: 'icon-btn', title: 'Escuchar', onclick: (e) => { e.stopPropagation(); tts.speak(it.fr); } }, '🔊')
        )
      )
    )
  );
}

// ==================== FLASHCARDS ====================
let flashSession = null;

function buildFlashDeck({ courseId, theme, mode }) {
  let pool;
  if (!courseId || courseId === 'all') pool = ALL_ITEMS.slice();
  else pool = VOCAB[courseId].items.slice();
  if (theme) pool = pool.filter(it => it.cat === theme);

  if (mode === 'due') {
    pool = pool.filter(it => state.srs[it.id] && isDue(it));
    if (pool.length === 0) pool = ALL_ITEMS.filter(it => !state.srs[it.id]).slice(0, 20);
  } else if (mode === 'new') {
    pool = pool.filter(it => !state.srs[it.id]);
  }
  pool.sort((a, b) => boxOf(a) - boxOf(b));
  return shuffle(pool);
}

function renderFlashcards() {
  if (!flashSession ||
      flashSession.courseId !== viewParams.courseId ||
      flashSession.theme !== viewParams.theme ||
      flashSession.mode !== viewParams.mode) {
    flashSession = {
      courseId: viewParams.courseId || 'all',
      theme: viewParams.theme || null,
      mode: viewParams.mode || 'all',
      deck: buildFlashDeck(viewParams),
      idx: 0, flipped: false, sessionCorrect: 0, sessionWrong: 0
    };
  }
  const ctx = flashSession;
  const total = ctx.deck.length;

  const courseSelect = el('select', { onchange: (e) => navigate('flashcards', { courseId: e.target.value, theme: null, mode: ctx.mode }) },
    el('option', { value: 'all' }, 'Todos los cursos'),
    ...COURSES.map(c => el('option', { value: c.id }, c.icon + ' ' + c.name))
  );
  courseSelect.value = ctx.courseId;
  const modeSelect = el('select', { onchange: (e) => navigate('flashcards', { courseId: ctx.courseId, theme: ctx.theme, mode: e.target.value }) },
    el('option', { value: 'all' }, 'Todo'),
    el('option', { value: 'due' }, '🔁 Pendientes'),
    el('option', { value: 'new' }, '✨ Nuevas')
  );
  modeSelect.value = ctx.mode;

  main.append(
    el('div', { class: 'flash-toolbar' },
      el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, courseSelect, modeSelect),
      el('div', { class: 'flash-stats' },
        total > 0 ? `${Math.min(ctx.idx + 1, total)} / ${total}  ·  ✓ ${ctx.sessionCorrect}  ·  ✗ ${ctx.sessionWrong}` : 'Sin tarjetas')
    )
  );

  if (total === 0) {
    main.append(el('div', { class: 'empty-state' },
      el('div', { class: 'emoji' }, '🎉'),
      el('div', null, '¡No hay tarjetas con este filtro!'),
      el('br'),
      el('button', { class: 'btn btn-primary', onclick: () => navigate('flashcards', { courseId: 'all', mode: 'all' }) }, 'Ver todas')
    ));
    return;
  }
  if (ctx.idx >= total) {
    main.append(el('div', { class: 'empty-state' },
      el('div', { class: 'emoji' }, '🏁'),
      el('div', null, `Sesión: ${ctx.sessionCorrect} aciertos, ${ctx.sessionWrong} fallos`),
      el('br'),
      el('button', { class: 'btn btn-primary', onclick: () => { flashSession = null; render(); } }, '🔄 Otra ronda'),
      el('button', { class: 'btn', onclick: () => navigate('home') }, '🏠 Inicio')
    ));
    return;
  }

  const item = ctx.deck[ctx.idx];
  const box = boxOf(item);
  const boxLabel = box === 0 ? 'Nueva' : `Caja ${box}/5`;

  const flashEl = el('div', { class: 'flashcard' + (ctx.flipped ? ' flipped' : ''), onclick: () => { ctx.flipped = !ctx.flipped; render(); } },
    el('div', { class: 'flashcard-inner' },
      el('div', { class: 'flashcard-face' },
        el('span', { class: 'lang-tag' }, '🇫🇷 Francés'),
        el('span', { class: 'cat-tag' }, `${item.cat} · ${boxLabel}`),
        el('div', { class: 'text' }, item.fr),
        el('button', { class: 'speak-btn', onclick: (e) => { e.stopPropagation(); tts.speak(item.fr); } }, '🔊', el('span', null, 'Escuchar')),
        el('div', { class: 'hint' }, 'Toca para ver la traducción')
      ),
      el('div', { class: 'flashcard-face back' },
        el('span', { class: 'lang-tag' }, '🇪🇸 Español'),
        el('span', { class: 'cat-tag' }, `${item.cat} · ${boxLabel}`),
        el('div', { class: 'text' }, item.es),
        el('div', { class: 'hint' }, '¿Cómo lo recordabas?')
      )
    )
  );

  main.append(
    el('div', { class: 'flashcard-wrap' },
      flashEl,
      el('div', { class: 'flash-controls' },
        ctx.flipped
          ? [
              el('button', { class: 'btn btn-bad', onclick: () => { markWrong(item); ctx.sessionWrong++; ctx.flipped = false; ctx.idx++; render(); } }, '✗ No'),
              el('button', { class: 'btn btn-warn', onclick: () => { markCorrect(item); ctx.sessionCorrect++; ctx.flipped = false; ctx.idx++; render(); } }, '~ Casi'),
              el('button', { class: 'btn btn-ok', onclick: () => { markCorrect(item); ctx.sessionCorrect++; ctx.flipped = false; ctx.idx++; render(); } }, '✓ Sí')
            ]
          : [
              el('button', { class: 'btn', onclick: () => { ctx.flipped = false; ctx.idx++; render(); } }, '⏭ Saltar'),
              el('button', { class: 'btn btn-primary', onclick: () => { ctx.flipped = true; render(); } }, '👁 Voltear')
            ]
      )
    )
  );
}

// ==================== QUIZ ====================
let quizSession = null;

function startQuizSession(params) {
  const courseId = params.courseId || 'all';
  const theme = params.theme || null;
  let pool;
  if (courseId === 'all') pool = ALL_ITEMS.slice();
  else pool = VOCAB[courseId].items.slice();
  if (theme) pool = pool.filter(it => it.cat === theme);

  const questions = pickRandom(pool, Math.min(10, pool.length)).map(item => {
    const distractorPool = (courseId === 'all' ? ALL_ITEMS : VOCAB[courseId].items)
      .filter(x => x.id !== item.id && x.es !== item.es);
    const distractors = pickRandom(distractorPool, 3).map(x => x.es);
    return { item, options: shuffle([item.es, ...distractors]), picked: null };
  });
  quizSession = { courseId, theme, questions, idx: 0, correct: 0, wrong: 0, finished: false };
}

function renderQuiz() {
  if (!quizSession ||
      quizSession.courseId !== (viewParams.courseId || 'all') ||
      quizSession.theme !== (viewParams.theme || null) ||
      quizSession.finished) {
    startQuizSession(viewParams);
  }
  const q = quizSession;
  if (!q.questions.length) {
    main.append(el('div', { class: 'empty-state' },
      el('div', { class: 'emoji' }, '🤔'),
      el('div', null, 'No hay suficientes palabras.')));
    return;
  }
  if (q.idx >= q.questions.length) {
    q.finished = true;
    const pct = Math.round((q.correct / q.questions.length) * 100);
    state.quizHistory.push({ date: Date.now(), score: q.correct, total: q.questions.length });
    if (state.quizHistory.length > 50) state.quizHistory = state.quizHistory.slice(-50);
    saveState();
    main.append(el('div', { class: 'quiz-card', style: { textAlign: 'center' } },
      el('div', { style: { fontSize: '48px', marginBottom: '8px' } }, pct >= 80 ? '🏆' : pct >= 60 ? '👏' : '💪'),
      el('h2', { style: { margin: '0 0 8px' } }, `${q.correct} / ${q.questions.length} (${pct}%)`),
      el('p', { style: { color: 'var(--muted)' } }, pct >= 80 ? '¡Excelente!' : pct >= 60 ? 'Buen trabajo.' : 'Vuelve a las flashcards.'),
      el('div', { style: { marginTop: '16px', display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' } },
        el('button', { class: 'btn btn-primary', onclick: () => { quizSession = null; startQuizSession(viewParams); render(); } }, '🔄 Otro quiz'),
        el('button', { class: 'btn', onclick: () => navigate('home') }, '🏠 Inicio')
      )
    ));
    return;
  }
  const cur = q.questions[q.idx];
  const totalQ = q.questions.length;
  const progress = Math.round(((q.idx) / totalQ) * 100);
  const optionsContainer = el('div', { class: 'quiz-options' });
  const feedback = el('div', { class: 'quiz-feedback' });
  const nextBtnHolder = el('div', { style: { textAlign: 'center', marginTop: '16px' } });

  cur.options.forEach(opt => {
    const btn = el('button', { class: 'quiz-option' }, opt);
    btn.addEventListener('click', () => {
      if (cur.picked) return;
      cur.picked = opt;
      const isOk = opt === cur.item.es;
      [...optionsContainer.children].forEach(b => {
        b.disabled = true;
        if (b.textContent === cur.item.es) b.classList.add('correct');
        if (b === btn && !isOk) b.classList.add('wrong');
      });
      if (isOk) { markCorrect(cur.item); q.correct++; feedback.textContent = '✓ ¡Correcto!'; feedback.className = 'quiz-feedback ok'; }
      else { markWrong(cur.item); q.wrong++; feedback.textContent = `✗ Era: ${cur.item.es}`; feedback.className = 'quiz-feedback bad'; }
      nextBtnHolder.appendChild(el('button', { class: 'btn btn-primary', onclick: () => { q.idx++; render(); } }, q.idx + 1 >= totalQ ? '🏁 Ver resultado' : 'Siguiente →'));
    });
    optionsContainer.appendChild(btn);
  });

  main.append(el('div', { class: 'quiz-card' },
    el('div', { class: 'quiz-progress' },
      el('span', null, `${q.idx + 1} / ${totalQ}`),
      el('span', null, `✓ ${q.correct}  ·  ✗ ${q.wrong}`)
    ),
    el('div', { class: 'quiz-bar' }, el('span', { style: { width: progress + '%' } })),
    el('div', { class: 'quiz-question-label' }, '¿Qué significa en español?'),
    el('div', { class: 'quiz-question' }, cur.item.fr, ' ',
      el('button', { class: 'icon-btn', style: { marginLeft: '8px' }, onclick: () => tts.speak(cur.item.fr) }, '🔊')),
    el('div', { class: 'quiz-question-sub' }, cur.item.cat),
    optionsContainer, feedback, nextBtnHolder
  ));
}

// ==================== TYPING (escribir traducción) ====================
let typingSession = null;

function buildTypingDeck(params) {
  let pool;
  if (!params.courseId || params.courseId === 'all') pool = ALL_ITEMS.slice();
  else pool = VOCAB[params.courseId].items.slice();
  if (params.theme) pool = pool.filter(it => it.cat === params.theme);
  return shuffle(pool).slice(0, 15);
}

function renderTyping() {
  if (!typingSession || typingSession.courseId !== (viewParams.courseId || 'all') || typingSession.direction !== (viewParams.direction || 'fr-es')) {
    typingSession = {
      courseId: viewParams.courseId || 'all',
      direction: viewParams.direction || 'fr-es',
      deck: buildTypingDeck(viewParams),
      idx: 0, correct: 0, wrong: 0, close: 0, attempted: false, lastResult: null, input: ''
    };
  }
  const ctx = typingSession;
  const total = ctx.deck.length;

  const courseSel = el('select', { onchange: (e) => navigate('typing', { courseId: e.target.value, direction: ctx.direction }) },
    el('option', { value: 'all' }, 'Todos los cursos'),
    ...COURSES.map(c => el('option', { value: c.id }, c.icon + ' ' + c.name))
  );
  courseSel.value = ctx.courseId;
  const dirSel = el('select', { onchange: (e) => navigate('typing', { courseId: ctx.courseId, direction: e.target.value }) },
    el('option', { value: 'fr-es' }, '🇫🇷 → 🇪🇸 (Traducir al español)'),
    el('option', { value: 'es-fr' }, '🇪🇸 → 🇫🇷 (Traducir al francés)')
  );
  dirSel.value = ctx.direction;

  main.append(el('div', { class: 'flash-toolbar' },
    el('div', { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' } }, courseSel, dirSel),
    el('div', { class: 'flash-stats' },
      total > 0 ? `${Math.min(ctx.idx + 1, total)} / ${total}  ·  ✓ ${ctx.correct}  ·  ~ ${ctx.close}  ·  ✗ ${ctx.wrong}` : 'Sin palabras')
  ));

  if (ctx.idx >= total) {
    main.append(el('div', { class: 'empty-state' },
      el('div', { class: 'emoji' }, '🏁'),
      el('div', null, `Sesión: ✓ ${ctx.correct} · ~ ${ctx.close} · ✗ ${ctx.wrong}`),
      el('br'),
      el('button', { class: 'btn btn-primary', onclick: () => { typingSession = null; render(); } }, '🔄 Otra ronda'),
      el('button', { class: 'btn', onclick: () => navigate('home') }, '🏠 Inicio')
    ));
    return;
  }

  const item = ctx.deck[ctx.idx];
  const isFrEs = ctx.direction === 'fr-es';
  const prompt = isFrEs ? item.fr : item.es;
  const expected = isFrEs ? item.es : item.fr;
  const promptLang = isFrEs ? '🇫🇷 Francés' : '🇪🇸 Español';
  const answerLang = isFrEs ? '🇪🇸 Español' : '🇫🇷 Francés';

  const input = el('input', {
    type: 'text', class: 'typing-input', placeholder: `Escribe la traducción en ${isFrEs ? 'español' : 'francés'}...`,
    autocomplete: 'off', autocorrect: 'off', autocapitalize: 'off', spellcheck: 'false'
  });
  input.value = ctx.input || '';
  input.addEventListener('input', (e) => { ctx.input = e.target.value; });

  const feedback = el('div', { class: 'typing-feedback' });
  const actions = el('div', { class: 'flash-controls' });

  const showResult = (result) => {
    ctx.attempted = true;
    ctx.lastResult = result;
    if (result === 'exact') {
      feedback.className = 'typing-feedback ok';
      feedback.innerHTML = '✓ ¡Correcto!';
      markCorrect(item); ctx.correct++; state.totals.typed = (state.totals.typed || 0) + 1; saveState();
    } else if (result === 'close') {
      feedback.className = 'typing-feedback warn';
      feedback.innerHTML = `~ Casi: <strong>${expected}</strong>`;
      markCorrect(item); ctx.close++; state.totals.typed = (state.totals.typed || 0) + 1; saveState();
    } else {
      feedback.className = 'typing-feedback bad';
      feedback.innerHTML = `✗ Era: <strong>${expected}</strong>`;
      markWrong(item); ctx.wrong++; state.totals.typed = (state.totals.typed || 0) + 1; saveState();
    }
    input.disabled = true;
    actions.innerHTML = '';
    actions.appendChild(el('button', { class: 'btn btn-primary', onclick: () => {
      ctx.idx++; ctx.attempted = false; ctx.input = ''; render();
    } }, ctx.idx + 1 >= total ? '🏁 Ver resultado' : 'Siguiente →'));
  };

  const checkAnswer = () => {
    if (ctx.attempted) return;
    const result = answerMatches(input.value, expected);
    showResult(result);
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); checkAnswer(); }
  });

  if (!ctx.attempted) {
    actions.appendChild(el('button', { class: 'btn', onclick: () => { showResult('no'); } }, '🤷 No sé'));
    actions.appendChild(el('button', { class: 'btn btn-primary', onclick: checkAnswer }, '✓ Comprobar'));
  }

  main.append(el('div', { class: 'quiz-card' },
    el('div', { class: 'quiz-progress' },
      el('span', null, `${ctx.idx + 1} / ${total}`),
      el('span', null, `✓ ${ctx.correct}  ·  ~ ${ctx.close}  ·  ✗ ${ctx.wrong}`)
    ),
    el('div', { class: 'quiz-bar' }, el('span', { style: { width: Math.round((ctx.idx / total) * 100) + '%' } })),
    el('div', { class: 'quiz-question-label' }, `${promptLang} → ${answerLang}`),
    el('div', { class: 'quiz-question' }, prompt,
      isFrEs ? el('button', { class: 'icon-btn', style: { marginLeft: '8px' }, onclick: () => tts.speak(item.fr) }, '🔊') : null
    ),
    el('div', { class: 'quiz-question-sub' }, item.cat + ' · ' + courseOfItem(item).name),
    input, feedback, actions
  ));

  setTimeout(() => { if (!ctx.attempted) input.focus(); }, 50);
}

// ==================== LISTENING ====================
let listeningPlaying = null;

function renderListening() {
  const { courseId, audioId } = viewParams;

  if (!courseId) {
    const counts = Object.fromEntries(COURSES.map(c => [c.id, LISTENING[c.id].length]));
    const completed = id => LISTENING[id].filter(a => state.listened[a.id]).length;
    main.append(
      el('div', { class: 'breadcrumbs' }, el('span', null, 'Escucha')),
      el('h2', null, '🎧 Comprensión oral'),
      el('p', { style: { color: 'var(--muted)', maxWidth: '700px', lineHeight: '1.5' } },
        'Cada curso tiene 10 audios-guion de situaciones reales (diálogos y monólogos) con transcripción francés/español, vocabulario clave y preguntas. ',
        'Usa el botón ▶️ para escucharlos con la voz francesa de tu dispositivo.'),
      el('div', { class: 'course-grid' },
        ...COURSES.map(c =>
          el('div', { class: 'course-card', onclick: () => navigate('listening', { courseId: c.id }) },
            el('div', { class: 'course-icon' }, c.icon),
            el('h3', null, c.name),
            el('p', { class: 'course-desc' }, `${counts[c.id]} audios con transcripción y vocabulario.`),
            el('div', { class: 'course-meta' },
              el('span', null, `${completed(c.id)} / ${counts[c.id]} completados`)
            ),
            el('div', { class: 'course-bar' }, el('span', { style: { width: Math.round((completed(c.id) / counts[c.id]) * 100) + '%' } }))
          )
        )
      )
    );
    return;
  }

  const course = VOCAB[courseId];
  const audios = LISTENING[courseId];
  if (!audios) return navigate('listening');

  if (!audioId) {
    main.append(
      el('div', { class: 'breadcrumbs' },
        el('a', { onclick: () => navigate('listening') }, 'Escucha'),
        el('span', null, '›'), el('span', null, course.name)
      ),
      el('h2', null, course.icon + ' ' + course.name),
      el('div', { class: 'audio-list' },
        ...audios.map((a, i) =>
          el('div', { class: 'audio-row' + (state.listened[a.id] ? ' done' : ''), onclick: () => navigate('listening', { courseId, audioId: a.id }) },
            el('div', { class: 'audio-num' }, (i + 1).toString().padStart(2, '0')),
            el('div', { class: 'audio-info' },
              el('div', { class: 'audio-title' }, a.title),
              el('div', { class: 'audio-sub' }, a.titleEs + ' · ' + a.level)
            ),
            el('div', { class: 'audio-badge' }, state.listened[a.id] ? '✓' : '▶')
          )
        )
      )
    );
    return;
  }

  const audio = audios.find(a => a.id === audioId);
  if (!audio) return navigate('listening', { courseId });
  const idx = audios.findIndex(a => a.id === audioId);

  main.append(
    el('div', { class: 'breadcrumbs' },
      el('a', { onclick: () => navigate('listening') }, 'Escucha'),
      el('span', null, '›'),
      el('a', { onclick: () => navigate('listening', { courseId }) }, course.name),
      el('span', null, '›'),
      el('span', null, audio.title)
    ),
    renderAudioPlayer(audio, audios, idx, courseId)
  );
}

function renderAudioPlayer(audio, audios, idx, courseId) {
  const rates = [0.7, 0.85, 1.0];
  const rateChip = (r) => el('button', {
    class: 'chip' + (Math.abs((state.rate || 0.95) - r) < 0.01 ? ' active' : ''),
    onclick: () => { state.rate = r; saveState(); render(); }
  }, r + 'x');

  const transcriptToggle = el('button', { class: 'btn btn-secondary', onclick: () => {
    audio._showEs = !audio._showEs; render();
  } }, audio._showEs ? '🇫🇷 Ver solo francés' : '🇪🇸 Ver con traducción');

  const lines = audio.fr.split('\n');
  const linesEs = audio.es.split('\n');

  return el('div', { class: 'audio-detail' },
    el('div', { class: 'page-head' },
      el('div', null,
        el('h2', { style: { margin: 0 } }, audio.title),
        el('div', { style: { color: 'var(--muted)', fontSize: '14px' } }, audio.titleEs + ' · ' + audio.level)
      ),
      el('div', { class: 'page-head-actions' },
        idx > 0 ? el('button', { class: 'btn', onclick: () => navigate('listening', { courseId, audioId: audios[idx - 1].id }) }, '← Anterior') : null,
        idx < audios.length - 1 ? el('button', { class: 'btn', onclick: () => navigate('listening', { courseId, audioId: audios[idx + 1].id }) }, 'Siguiente →') : null
      )
    ),

    el('div', { class: 'audio-controls' },
      el('button', { class: 'btn btn-primary big-play', onclick: () => tts.speak(audio.fr) }, '▶️ Reproducir'),
      el('button', { class: 'btn', onclick: () => tts.stop() }, '⏹ Parar'),
      el('div', { class: 'speed-group' },
        el('span', { class: 'speed-label' }, 'Velocidad:'),
        rateChip(0.7), rateChip(0.85), rateChip(1.0)
      ),
      transcriptToggle
    ),

    el('div', { class: 'section-title' }, 'Transcripción'),
    el('div', { class: 'transcript' },
      ...lines.map((line, i) =>
        el('div', { class: 'transcript-line' },
          el('div', { class: 'tr-fr' },
            el('button', { class: 'icon-btn small', onclick: () => tts.speak(line) }, '🔊'),
            el('span', null, ' ', line)
          ),
          audio._showEs && linesEs[i] ? el('div', { class: 'tr-es' }, linesEs[i]) : null
        )
      )
    ),

    audio.vocab && audio.vocab.length > 0 ? el('div', null,
      el('div', { class: 'section-title' }, 'Vocabulario clave'),
      el('div', { class: 'vocab-list' },
        ...audio.vocab.map(v =>
          el('div', { class: 'vocab-row' },
            el('div', { class: 'vocab-fr' }, v.fr),
            el('div', { class: 'vocab-es' }, v.es),
            el('button', { class: 'icon-btn', onclick: (e) => { e.stopPropagation(); tts.speak(v.fr); } }, '🔊')
          )
        )
      )
    ) : null,

    audio.questions && audio.questions.length > 0 ? el('div', null,
      el('div', { class: 'section-title' }, 'Preguntas de comprensión'),
      el('div', { class: 'questions' },
        ...audio.questions.map((q, i) => el('div', { class: 'question' }, (i + 1) + '. ' + q))
      )
    ) : null,

    el('div', { class: 'audio-actions-bottom' },
      el('button', {
        class: 'btn ' + (state.listened[audio.id] ? 'btn-ok' : 'btn-primary'),
        onclick: () => {
          state.listened[audio.id] = !state.listened[audio.id];
          saveState(); toast(state.listened[audio.id] ? '✓ Marcado como completado' : 'Marcado como pendiente'); render();
        }
      }, state.listened[audio.id] ? '✓ Completado' : 'Marcar como completado')
    )
  );
}

// ==================== PROGRESS ====================
function renderProgress() {
  const boxCounts = [0, 0, 0, 0, 0, 0];
  ALL_ITEMS.forEach(it => { boxCounts[boxOf(it)]++; });
  const totalSeen = state.totals.studied;
  const acc = totalSeen ? Math.round((state.totals.correct / totalSeen) * 100) : 0;
  const listenedCount = Object.values(state.listened).filter(Boolean).length;

  // Stats por tema
  const themeStats = {};
  COURSES.forEach(c => {
    c.items.forEach(it => {
      const k = c.id + '|' + it.cat;
      if (!themeStats[k]) themeStats[k] = { course: c, theme: it.cat, total: 0, learned: 0, seen: 0 };
      themeStats[k].total++;
      const b = boxOf(it);
      if (b >= 4) themeStats[k].learned++;
      if (b > 0) themeStats[k].seen++;
    });
  });

  main.append(
    el('h2', null, '📊 Tu progreso'),
    el('div', { class: 'stats' },
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, totalSeen),
        el('div', { class: 'stat-label' }, 'Repeticiones')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value', style: { color: 'var(--ok)' } }, state.totals.correct),
        el('div', { class: 'stat-label' }, 'Aciertos')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value', style: { color: 'var(--bad)' } }, state.totals.wrong),
        el('div', { class: 'stat-label' }, 'Fallos')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, acc + '%'),
        el('div', { class: 'stat-label' }, 'Precisión')
      )
    ),

    el('div', { class: 'stats', style: { marginTop: '12px' } },
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, state.totals.typed || 0),
        el('div', { class: 'stat-label' }, 'Escritas')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, listenedCount + ' / ' + window.LISTENING_TOTAL),
        el('div', { class: 'stat-label' }, 'Audios')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, state.quizHistory.length),
        el('div', { class: 'stat-label' }, 'Quizzes')
      ),
      el('div', { class: 'stat' },
        el('div', { class: 'stat-value' }, ALL_ITEMS.filter(it => boxOf(it) > 0).length),
        el('div', { class: 'stat-label' }, 'Vistas')
      )
    ),

    el('div', { class: 'section-title' }, 'Distribución por caja Leitner'),
    el('div', { class: 'progress-grid' },
      ...['Sin ver', 'Caja 1', 'Caja 2', 'Caja 3', 'Caja 4', 'Caja 5'].map((label, i) =>
        el('div', { class: 'box-card' },
          el('div', { class: 'box-num', style: { color: i === 5 ? 'var(--ok)' : i === 0 ? 'var(--muted)' : 'var(--text)' } }, boxCounts[i]),
          el('div', { class: 'box-label' }, label),
          el('div', { class: 'box-sub' },
            i === 0 ? 'Nuevas' : i === 1 ? 'Repaso inmediato' : i === 2 ? '+1 día' : i === 3 ? '+3 días' : i === 4 ? '+7 días' : '+14 días'
          )
        )
      )
    ),

    el('div', { class: 'section-title' }, 'Progreso por tema'),
    el('div', { class: 'theme-stats' },
      ...COURSES.map(c => el('div', { class: 'theme-stats-group' },
        el('h4', null, c.icon + ' ' + c.name),
        el('div', { class: 'theme-stats-list' },
          ...Object.values(themeStats).filter(s => s.course.id === c.id).map(s => {
            const pct = Math.round((s.learned / s.total) * 100);
            return el('div', { class: 'theme-stat-row', onclick: () => navigate('lessons', { courseId: c.id, theme: s.theme }) },
              el('div', { class: 'theme-stat-info' },
                el('div', { class: 'theme-stat-name' }, s.theme),
                el('div', { class: 'theme-stat-meta' }, `${s.learned} / ${s.total} aprendidas · ${s.seen} vistas`)
              ),
              el('div', { class: 'theme-stat-bar' }, el('span', { style: { width: pct + '%' } })),
              el('div', { class: 'theme-stat-pct' }, pct + '%')
            );
          })
        )
      ))
    ),

    el('div', { class: 'danger-zone' },
      el('div', null,
        el('strong', null, '⚠️ Reiniciar progreso'),
        el('div', { style: { color: 'var(--muted)', fontSize: '13px' } }, 'Borrarás todas las estadísticas.')
      ),
      el('button', { class: 'btn btn-bad', onclick: () => {
        if (confirm('¿Borrar todo tu progreso?')) {
          state = defaultState();
          saveState();
          toast('Progreso reiniciado');
          render();
        }
      } }, 'Borrar todo')
    )
  );
}

// ==================== Init ====================
tts.init();

// Si llegamos con hash (PWA shortcut), navegar a esa vista
const initialHash = location.hash.replace('#', '');
if (initialHash && ['home','lessons','flashcards','quiz','typing','listening','progress'].includes(initialHash)) {
  navigate(initialHash, {}, true);
} else {
  render();
}
setStatus(`${ALL_ITEMS.length} palabras · ${window.LISTENING_TOTAL} audios.`);

// Atajos de teclado (escritorio)
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;
  if (currentView === 'flashcards' && flashSession) {
    const ctx = flashSession;
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); ctx.flipped = !ctx.flipped; render(); }
    if (ctx.flipped && e.key === '1') { const it = ctx.deck[ctx.idx]; if (it) { markWrong(it); ctx.sessionWrong++; ctx.flipped = false; ctx.idx++; render(); } }
    if (ctx.flipped && e.key === '2') { const it = ctx.deck[ctx.idx]; if (it) { markCorrect(it); ctx.sessionCorrect++; ctx.flipped = false; ctx.idx++; render(); } }
    if (ctx.flipped && e.key === '3') { const it = ctx.deck[ctx.idx]; if (it) { markCorrect(it); ctx.sessionCorrect++; ctx.flipped = false; ctx.idx++; render(); } }
    if (e.key === 'p' || e.key === 'P') { const it = ctx.deck[ctx.idx]; if (it) tts.speak(it.fr); }
  }
});
