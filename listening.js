// 40 audios-guion (10 por curso) extraidos de los Listening Packs.
// Cada audio: { id, title, titleEs, level, fr (texto completo FR), es (traduccion ES), vocab[], questions[] }

window.LISTENING = {
  cotidiano: [
    {
      id: 'cot-1', title: 'Une journée typique', titleEs: 'Una jornada típica',
      level: 'Principiante',
      fr: "Bonjour, je m'appelle Sophie. Je me lève à sept heures du matin. Je prends mon petit-déjeuner : un café, du pain et de la confiture. Je vais au travail en métro. À midi, je déjeune avec mes collègues. Le soir, je rentre chez moi à dix-huit heures. Je dîne avec ma famille, puis je regarde un peu la télé. Je me couche à vingt-trois heures.",
      es: "Buenos días, me llamo Sophie. Me levanto a las siete de la mañana. Desayuno: un café, pan y mermelada. Voy al trabajo en metro. A mediodía, como con mis compañeros. Por la tarde, vuelvo a casa a las dieciocho. Ceno con mi familia, luego veo un poco la tele. Me acuesto a las veintitrés.",
      vocab: [],
      questions: ["¿A qué hora se levanta Sophie?", "¿Cómo va al trabajo?", "¿Con quién come?", "¿A qué hora se acuesta?"]
    },
    {
      id: 'cot-2', title: 'À la boulangerie', titleEs: 'En la panadería',
      level: 'Principiante',
      fr: "CLIENT : Bonjour madame !\nBOULANGÈRE : Bonjour monsieur, qu'est-ce qu'il vous faut ?\nCLIENT : Je voudrais une baguette tradition, s'il vous plaît.\nBOULANGÈRE : Bien cuite ou pas trop cuite ?\nCLIENT : Bien cuite. Et trois croissants au beurre.\nBOULANGÈRE : Très bien. Vous voulez autre chose ?\nCLIENT : Oui, une tarte aux fraises pour quatre personnes.\nBOULANGÈRE : Voilà. Ça fait dix-huit euros cinquante.\nCLIENT : Voilà vingt euros.\nBOULANGÈRE : Et un euro cinquante de monnaie. Merci, bonne journée !\nCLIENT : Bonne journée à vous aussi !",
      es: "CLIENTE: ¡Buenos días señora!\nPANADERA: Buenos días señor, ¿qué necesita?\nCLIENTE: Quisiera una baguette tradición, por favor.\nPANADERA: ¿Bien hecha o no muy hecha?\nCLIENTE: Bien hecha. Y tres cruasanes de mantequilla.\nPANADERA: Muy bien. ¿Quiere algo más?\nCLIENTE: Sí, una tarta de fresas para cuatro personas.\nPANADERA: Aquí tiene. Son dieciocho euros con cincuenta.\nCLIENTE: Aquí tiene veinte euros.\nPANADERA: Y un euro cincuenta de cambio. Gracias, ¡buen día!\nCLIENTE: ¡Buen día a usted también!",
      vocab: [
        { fr: "Bien cuite / pas trop cuite", es: "Bien hecha / no muy hecha" },
        { fr: "Vous voulez autre chose ?", es: "¿Quiere algo más?" },
        { fr: "Pour quatre personnes", es: "Para cuatro personas" },
        { fr: "La monnaie", es: "El cambio" }
      ],
      questions: []
    },
    {
      id: 'cot-3', title: 'Au restaurant', titleEs: 'En el restaurante',
      level: 'Principiante-intermedio',
      fr: "SERVEUR : Bonsoir, vous avez réservé ?\nCLIENT : Bonsoir, oui, au nom de Martin, une table pour deux personnes.\nSERVEUR : Très bien, suivez-moi. Voici votre table. Voilà la carte.\nCLIENT : Merci. Quel est le plat du jour ?\nSERVEUR : Aujourd'hui, c'est confit de canard avec des pommes de terre sarladaises.\nCLIENT : Ça a l'air délicieux. Je vais prendre ça.\nSERVEUR : Et pour madame ?\nCLIENTE : Pour moi, une salade de chèvre chaud, s'il vous plaît.\nSERVEUR : Et comme boisson ?\nCLIENT : Une bouteille de vin rouge et une carafe d'eau.\nSERVEUR : Parfait, je vous apporte tout ça.",
      es: "CAMARERO: Buenas noches, ¿tienen reserva?\nCLIENTE: Buenas noches, sí, a nombre de Martin, una mesa para dos personas.\nCAMARERO: Muy bien, sígame. Aquí está su mesa. Aquí tienen la carta.\nCLIENTE: Gracias. ¿Cuál es el plato del día?\nCAMARERO: Hoy es confit de pato con patatas sarladaises.\nCLIENTE: Parece delicioso. Voy a tomar eso.\nCAMARERO: ¿Y para la señora?\nCLIENTA: Para mí, una ensalada de queso de cabra caliente, por favor.\nCAMARERO: ¿Y para beber?\nCLIENTE: Una botella de vino tinto y una jarra de agua.\nCAMARERO: Perfecto, les traigo todo eso.",
      vocab: [
        { fr: "Vous avez réservé ?", es: "¿Tiene reserva?" },
        { fr: "Le plat du jour", es: "El plato del día" },
        { fr: "Ça a l'air délicieux", es: "Parece delicioso" },
        { fr: "Une carafe d'eau", es: "Una jarra de agua (del grifo, gratis)" }
      ],
      questions: []
    },
    {
      id: 'cot-4', title: 'Dans le métro parisien', titleEs: 'En el metro de París',
      level: 'Principiante-intermedio',
      fr: "TOURISTE : Excusez-moi, comment je peux aller à Montmartre ?\nPARISIENNE : Vous prenez la ligne 12, direction Porte de la Chapelle, et vous descendez à la station Abbesses.\nTOURISTE : La ligne 12 ? Et c'est combien de stations ?\nPARISIENNE : Environ sept stations depuis ici. Quinze minutes.\nTOURISTE : Je dois acheter un billet ?\nPARISIENNE : Oui, allez au guichet ou utilisez une borne automatique. Un ticket coûte deux euros dix.\nTOURISTE : Et je peux payer par carte ?\nPARISIENNE : Oui, sans problème.\nTOURISTE : Merci beaucoup, vous êtes très gentille.\nPARISIENNE : Je vous en prie. Bon séjour à Paris !",
      es: "TURISTA: Disculpe, ¿cómo puedo ir a Montmartre?\nPARISINA: Toma la línea 12, dirección Porte de la Chapelle, y se baja en la estación Abbesses.\nTURISTA: ¿La línea 12? ¿Y cuántas estaciones son?\nPARISINA: Unas siete estaciones desde aquí. Quince minutos.\nTURISTA: ¿Tengo que comprar un billete?\nPARISINA: Sí, vaya a la taquilla o use una máquina automática. Un ticket cuesta dos euros con diez.\nTURISTA: ¿Y puedo pagar con tarjeta?\nPARISINA: Sí, sin problema.\nTURISTA: Muchas gracias, es muy amable.\nPARISINA: De nada. ¡Buena estancia en París!",
      vocab: [
        { fr: "La ligne 12", es: "La línea 12" },
        { fr: "Descendre à la station", es: "Bajarse en la estación" },
        { fr: "Une borne automatique", es: "Una máquina automática" },
        { fr: "Bon séjour", es: "Buena estancia" }
      ],
      questions: []
    },
    {
      id: 'cot-5', title: 'Acheter des vêtements', titleEs: 'Comprar ropa',
      level: 'Intermedio',
      fr: "VENDEUSE : Bonjour, je peux vous aider ?\nCLIENT : Bonjour, je cherche une chemise bleue.\nVENDEUSE : Quelle est votre taille ?\nCLIENT : Je fais du M en général.\nVENDEUSE : Très bien. Nous avons ce modèle en bleu marine et en bleu clair. Lequel préférez-vous ?\nCLIENT : Le bleu marine. Je peux essayer ?\nVENDEUSE : Bien sûr, les cabines sont au fond à droite.\nCLIENT : Merci... Alors, ça me va bien, mais c'est un peu grand. Vous avez la taille S ?\nVENDEUSE : Oui, je vous l'apporte tout de suite.\nCLIENT : Parfait, je la prends. C'est combien ?\nVENDEUSE : Quarante-neuf euros quatre-vingt-dix.\nCLIENT : D'accord, je paye par carte.",
      es: "VENDEDORA: Buenos días, ¿puedo ayudarle?\nCLIENTE: Buenos días, busco una camisa azul.\nVENDEDORA: ¿Cuál es su talla?\nCLIENTE: Suelo usar la M.\nVENDEDORA: Muy bien. Tenemos este modelo en azul marino y en azul claro. ¿Cuál prefiere?\nCLIENTE: El azul marino. ¿Puedo probarlo?\nVENDEDORA: Claro, los probadores están al fondo a la derecha.\nCLIENTE: Gracias... Pues me queda bien, pero es un poco grande. ¿Tiene la talla S?\nVENDEDORA: Sí, se la traigo enseguida.\nCLIENTE: Perfecto, me la llevo. ¿Cuánto es?\nVENDEDORA: Cuarenta y nueve con noventa.\nCLIENTE: De acuerdo, pago con tarjeta.",
      vocab: [
        { fr: "Quelle est votre taille ?", es: "¿Cuál es su talla?" },
        { fr: "Les cabines (d'essayage)", es: "Los probadores" },
        { fr: "Ça me va bien", es: "Me queda bien" },
        { fr: "Un peu grand", es: "Un poco grande" }
      ],
      questions: []
    },
    {
      id: 'cot-6', title: 'Chez le médecin', titleEs: 'En el médico',
      level: 'Intermedio',
      fr: "MÉDECIN : Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?\nPATIENT : Bonjour docteur, j'ai mal à la gorge depuis trois jours, et je tousse beaucoup la nuit.\nMÉDECIN : Vous avez de la fièvre ?\nPATIENT : Oui, hier soir j'avais trente-huit cinq.\nMÉDECIN : Je vais vous examiner. Ouvrez la bouche... Bon, c'est une angine. Vous êtes allergique à quelque chose ?\nPATIENT : Non, pas que je sache.\nMÉDECIN : Je vais vous prescrire des antibiotiques pendant sept jours, et un sirop pour la toux. Reposez-vous bien et buvez beaucoup d'eau.\nPATIENT : Je peux aller travailler demain ?\nMÉDECIN : Non, je vous donne un arrêt de travail pour trois jours. Vous reviendrez me voir si ça ne va pas mieux.\nPATIENT : D'accord, merci docteur.",
      es: "MÉDICO: Buenos días, siéntese. ¿Qué le pasa?\nPACIENTE: Buenos días doctor, me duele la garganta desde hace tres días y toso mucho por la noche.\nMÉDICO: ¿Tiene fiebre?\nPACIENTE: Sí, anoche tenía treinta y ocho y medio.\nMÉDICO: Voy a examinarle. Abra la boca... Bien, es una amigdalitis. ¿Es alérgico a algo?\nPACIENTE: No, que yo sepa.\nMÉDICO: Le voy a recetar antibióticos durante siete días, y un jarabe para la tos. Descanse bien y beba mucha agua.\nPACIENTE: ¿Puedo ir a trabajar mañana?\nMÉDICO: No, le doy una baja laboral de tres días. Vuelva a verme si no mejora.\nPACIENTE: De acuerdo, gracias doctor.",
      vocab: [
        { fr: "Qu'est-ce qui ne va pas ?", es: "¿Qué le pasa?" },
        { fr: "Une angine", es: "Una amigdalitis" },
        { fr: "Prescrire des antibiotiques", es: "Recetar antibióticos" },
        { fr: "Un arrêt de travail", es: "Una baja laboral" }
      ],
      questions: []
    },
    {
      id: 'cot-7', title: "À l'aéroport", titleEs: 'En el aeropuerto',
      level: 'Intermedio',
      fr: "AGENT : Bonjour, votre passeport et votre billet, s'il vous plaît.\nVOYAGEUR : Voilà.\nAGENT : Merci. Vous voyagez seul vers Barcelone ?\nVOYAGEUR : Oui, seul. C'est un voyage d'affaires.\nAGENT : Combien de bagages enregistrés ?\nVOYAGEUR : Une valise et un bagage à main.\nAGENT : Posez la valise sur la balance, s'il vous plaît... Vingt-deux kilos, c'est bon. Vous avez choisi votre place ?\nVOYAGEUR : Je préférerais un siège côté hublot, si possible.\nAGENT : Très bien, place 14A. Voici votre carte d'embarquement. L'embarquement commence à treize heures vingt, porte B12.\nVOYAGEUR : Merci. Le contrôle de sécurité, c'est par où ?\nAGENT : Tout droit, puis à droite après les magasins.\nVOYAGEUR : Merci, bonne journée.",
      es: "AGENTE: Buenos días, su pasaporte y billete, por favor.\nVIAJERO: Aquí tiene.\nAGENTE: Gracias. ¿Viaja solo hacia Barcelona?\nVIAJERO: Sí, solo. Es un viaje de negocios.\nAGENTE: ¿Cuántas maletas facturadas?\nVIAJERO: Una maleta y un equipaje de mano.\nAGENTE: Ponga la maleta en la báscula, por favor... Veintidós kilos, está bien. ¿Ha elegido su asiento?\nVIAJERO: Preferiría un asiento de ventanilla, si es posible.\nAGENTE: Muy bien, asiento 14A. Aquí tiene su tarjeta de embarque. El embarque empieza a las trece y veinte, puerta B12.\nVIAJERO: Gracias. ¿Por dónde está el control de seguridad?\nAGENTE: Todo recto, luego a la derecha después de las tiendas.\nVIAJERO: Gracias, buen día.",
      vocab: [
        { fr: "Bagage enregistré / à main", es: "Equipaje facturado / de mano" },
        { fr: "Côté hublot / côté couloir", es: "Lado ventanilla / lado pasillo" },
        { fr: "La carte d'embarquement", es: "La tarjeta de embarque" },
        { fr: "Le contrôle de sécurité", es: "El control de seguridad" }
      ],
      questions: []
    },
    {
      id: 'cot-8', title: 'Au téléphone avec un ami', titleEs: 'Al teléfono con un amigo',
      level: 'Intermedio',
      fr: "MARC : Allô, salut ! C'est Marc.\nTHOMAS : Salut Marc, comment ça va ?\nMARC : Ça va super, et toi ?\nTHOMAS : Bof, j'ai eu une semaine de fou au boulot.\nMARC : Ah ouais ? Pourquoi tu ne viens pas prendre un verre ce soir ? Ça te détendra.\nTHOMAS : Bonne idée ! On se retrouve où ?\nMARC : Au café de la place, vers vingt heures ?\nTHOMAS : Ça marche. Tu invites les autres aussi ?\nMARC : J'ai déjà appelé Julie et Antoine, ils viennent. Léa, je ne sais pas, elle bosse tard.\nTHOMAS : Je vais lui envoyer un message. À ce soir alors !\nMARC : À ce soir, bisous !",
      es: "MARC: ¿Hola? ¡Hola! Soy Marc.\nTHOMAS: ¡Hola Marc! ¿Cómo estás?\nMARC: Súper bien, ¿y tú?\nTHOMAS: Regular, he tenido una semana de locos en el curro.\nMARC: ¿Ah sí? ¿Por qué no vienes a tomar una copa esta noche? Te relajará.\nTHOMAS: ¡Buena idea! ¿Dónde nos vemos?\nMARC: ¿En el café de la plaza, hacia las ocho?\nTHOMAS: Vale. ¿Invitas a los demás también?\nMARC: Ya he llamado a Julie y Antoine, vienen. Léa no sé, curra hasta tarde.\nTHOMAS: Le mando un mensaje. ¡Hasta esta noche!\nMARC: ¡Hasta esta noche, un beso!",
      vocab: [
        { fr: "Une semaine de fou", es: "Una semana de locos" },
        { fr: "Au boulot", es: "En el curro (informal)" },
        { fr: "Prendre un verre", es: "Tomar una copa" },
        { fr: "Ça te détendra", es: "Te relajará" },
        { fr: "Ça marche", es: "Vale / hecho" },
        { fr: "Elle bosse tard", es: "Curra hasta tarde" }
      ],
      questions: []
    },
    {
      id: 'cot-9', title: 'Réserver un hôtel par téléphone', titleEs: 'Reservar un hotel por teléfono',
      level: 'Intermedio',
      fr: "HÔTEL : Hôtel des Lilas, bonjour.\nCLIENT : Bonjour, je voudrais réserver une chambre, s'il vous plaît.\nHÔTEL : Pour quelles dates ?\nCLIENT : Du quinze au dix-huit juin, donc trois nuits.\nHÔTEL : Pour combien de personnes ?\nCLIENT : Deux adultes.\nHÔTEL : Une seconde, je vérifie... Oui, nous avons une chambre double avec vue sur le jardin à cent vingt euros la nuit, petit-déjeuner inclus.\nCLIENT : Très bien, je la prends. Vous avez le wifi ?\nHÔTEL : Oui, gratuit. Et nous avons un parking si vous venez en voiture.\nCLIENT : Parfait. Je peux annuler si nécessaire ?\nHÔTEL : Oui, gratuitement jusqu'à quarante-huit heures avant l'arrivée.\nCLIENT : C'est noté. Mon nom est García, G-A-R-C-I-A.\nHÔTEL : Merci. Je vous envoie la confirmation par email.",
      es: "HOTEL: Hotel des Lilas, buenos días.\nCLIENTE: Buenos días, quisiera reservar una habitación, por favor.\nHOTEL: ¿Para qué fechas?\nCLIENTE: Del quince al dieciocho de junio, son tres noches.\nHOTEL: ¿Para cuántas personas?\nCLIENTE: Dos adultos.\nHOTEL: Un segundo, verifico... Sí, tenemos una habitación doble con vista al jardín a ciento veinte euros la noche, desayuno incluido.\nCLIENTE: Muy bien, la reservo. ¿Tienen wifi?\nHOTEL: Sí, gratis. Y tenemos parking si viene en coche.\nCLIENTE: Perfecto. ¿Puedo cancelar si es necesario?\nHOTEL: Sí, gratis hasta 48 horas antes de la llegada.\nCLIENTE: Apuntado. Mi nombre es García, G-A-R-C-I-A.\nHOTEL: Gracias. Le envío la confirmación por email.",
      vocab: [
        { fr: "Pour quelles dates ?", es: "¿Para qué fechas?" },
        { fr: "Vue sur le jardin", es: "Vista al jardín" },
        { fr: "Petit-déjeuner inclus", es: "Desayuno incluido" },
        { fr: "Annuler", es: "Cancelar" }
      ],
      questions: []
    },
    {
      id: 'cot-10', title: 'À la gare', titleEs: 'En la estación',
      level: 'Intermedio-avanzado',
      fr: "VOYAGEUR : Bonjour, je voudrais un billet pour Lyon, s'il vous plaît.\nAGENT : Aller simple ou aller-retour ?\nVOYAGEUR : Aller-retour. Je pars demain matin et je reviens dimanche soir.\nAGENT : D'accord. Quel train préférez-vous ? Le TGV de huit heures part de Paris Gare de Lyon, arrive à Lyon Part-Dieu à dix heures cinq.\nVOYAGEUR : Parfait. Et pour le retour ?\nAGENT : Dimanche soir, le dernier TGV part à vingt-et-une heures.\nVOYAGEUR : Très bien. Combien ça coûte ?\nAGENT : Cent dix euros en deuxième classe, cent soixante en première.\nVOYAGEUR : Deuxième classe, ça ira. Je peux choisir ma place ?\nAGENT : Oui. Vous préférez fenêtre ou couloir ?\nVOYAGEUR : Fenêtre, si possible.\nAGENT : Voilà votre billet. Train numéro 6624, voiture 12, place 33. N'oubliez pas de composter votre billet avant de monter.\nVOYAGEUR : Merci beaucoup. Bonne journée !",
      es: "VIAJERO: Buenos días, quisiera un billete para Lyon, por favor.\nAGENTE: ¿Ida o ida y vuelta?\nVIAJERO: Ida y vuelta. Salgo mañana por la mañana y vuelvo el domingo por la noche.\nAGENTE: De acuerdo. ¿Qué tren prefiere? El TGV de las ocho sale de París Gare de Lyon, llega a Lyon Part-Dieu a las diez y cinco.\nVIAJERO: Perfecto. ¿Y para la vuelta?\nAGENTE: El domingo por la noche, el último TGV sale a las 21.\nVIAJERO: Muy bien. ¿Cuánto cuesta?\nAGENTE: Ciento diez euros en segunda clase, ciento sesenta en primera.\nVIAJERO: Segunda clase está bien. ¿Puedo elegir asiento?\nAGENTE: Sí. ¿Prefiere ventanilla o pasillo?\nVIAJERO: Ventanilla, si es posible.\nAGENTE: Aquí tiene su billete. Tren 6624, vagón 12, asiento 33. No olvide validar su billete antes de subir.\nVIAJERO: Muchas gracias. ¡Buen día!",
      vocab: [
        { fr: "Aller simple / aller-retour", es: "Ida / ida y vuelta" },
        { fr: "Deuxième / première classe", es: "Segunda / primera clase" },
        { fr: "Fenêtre / couloir", es: "Ventanilla / pasillo" },
        { fr: "Composter le billet", es: "Validar el billete" }
      ],
      questions: []
    }
  ],

  it: [
    {
      id: 'it-1', title: 'Premier jour au bureau', titleEs: 'Primer día en la oficina',
      level: 'Principiante',
      fr: "Bonjour, je m'appelle Marc. Je suis nouveau dans l'entreprise. Je travaille au service informatique. Je suis technicien support. J'aide les utilisateurs avec leurs ordinateurs, leurs imprimantes et leurs logiciels. Mon bureau est au troisième étage. Je commence à neuf heures et je termine à dix-huit heures. Enchanté de vous rencontrer.",
      es: "Buenos días, me llamo Marc. Soy nuevo en la empresa. Trabajo en el servicio informático. Soy técnico de soporte. Ayudo a los usuarios con sus ordenadores, sus impresoras y sus programas. Mi oficina está en el tercer piso. Empiezo a las nueve y termino a las dieciocho. Encantado de conocerle.",
      vocab: [],
      questions: ["¿Cómo se llama el personaje?", "¿En qué departamento trabaja?", "¿A qué hora termina?", "¿En qué piso está su oficina?"]
    },
    {
      id: 'it-2', title: "L'imprimante ne fonctionne pas", titleEs: 'La impresora no funciona',
      level: 'Principiante',
      fr: "UTILISATEUR : Bonjour, l'imprimante du bureau ne fonctionne pas.\nTECHNICIEN : Bonjour. Quel est le message d'erreur ?\nUTILISATEUR : Il y a un voyant rouge qui clignote.\nTECHNICIEN : D'accord. Avez-vous du papier dans le bac ?\nUTILISATEUR : Oui, le bac est plein.\nTECHNICIEN : Je vais venir voir. Pouvez-vous patienter cinq minutes ?\nUTILISATEUR : Bien sûr, merci beaucoup.\nTECHNICIEN : De rien, à tout de suite.",
      es: "USUARIO: Buenos días, la impresora de la oficina no funciona.\nTÉCNICO: Buenos días. ¿Cuál es el mensaje de error?\nUSUARIO: Hay una luz roja parpadeando.\nTÉCNICO: De acuerdo. ¿Tiene papel en la bandeja?\nUSUARIO: Sí, la bandeja está llena.\nTÉCNICO: Voy a ir a ver. ¿Puede esperar cinco minutos?\nUSUARIO: Claro, muchas gracias.\nTÉCNICO: De nada, hasta enseguida.",
      vocab: [], questions: []
    },
    {
      id: 'it-3', title: 'Réinitialisation du mot de passe', titleEs: 'Restablecer contraseña',
      level: 'Principiante-intermedio',
      fr: "TECHNICIEN : Service informatique, bonjour, Sophie à l'appareil.\nUTILISATEUR : Bonjour Sophie. J'ai oublié mon mot de passe et je ne peux pas me connecter.\nTECHNICIEN : Pas de problème. Pouvez-vous me donner votre identifiant ?\nUTILISATEUR : Oui, c'est j.martin, j point martin.\nTECHNICIEN : Merci. Je vérifie votre compte. Un instant, s'il vous plaît.\nUTILISATEUR : D'accord.\nTECHNICIEN : Voilà, j'ai réinitialisé votre mot de passe. Vous allez recevoir un email avec un mot de passe temporaire.\nUTILISATEUR : Parfait. Je dois le changer ensuite ?\nTECHNICIEN : Oui, à la première connexion, le système vous demandera de créer un nouveau mot de passe.\nUTILISATEUR : Très bien, merci beaucoup.\nTECHNICIEN : Je vous en prie. Bonne journée.",
      es: "TÉCNICA: Servicio informático, buenos días, Sophie al habla.\nUSUARIO: Buenos días Sophie. He olvidado mi contraseña y no puedo iniciar sesión.\nTÉCNICA: No hay problema. ¿Puede darme su nombre de usuario?\nUSUARIO: Sí, es j.martin, j punto martin.\nTÉCNICA: Gracias. Verifico su cuenta. Un momento, por favor.\nUSUARIO: De acuerdo.\nTÉCNICA: Listo, he restablecido su contraseña. Recibirá un email con una contraseña temporal.\nUSUARIO: Perfecto. ¿Tengo que cambiarla después?\nTÉCNICA: Sí, en el primer inicio de sesión, el sistema le pedirá crear una nueva contraseña.\nUSUARIO: Muy bien, muchas gracias.\nTÉCNICA: De nada. Buen día.",
      vocab: [
        { fr: "Réinitialiser", es: "Restablecer" },
        { fr: "Un mot de passe temporaire", es: "Una contraseña temporal" },
        { fr: "À la première connexion", es: "En el primer inicio de sesión" },
        { fr: "Je vous en prie", es: "De nada (formal)" }
      ],
      questions: []
    },
    {
      id: 'it-4', title: 'Problème de connexion VPN', titleEs: 'Problema de conexión VPN',
      level: 'Intermedio',
      fr: "UTILISATEUR : Bonjour, je suis en télétravail et je n'arrive pas à me connecter au VPN.\nTECHNICIEN : Bonjour. Avez-vous une bonne connexion internet à la maison ?\nUTILISATEUR : Oui, ma connexion fonctionne bien, je peux naviguer sur internet.\nTECHNICIEN : Très bien. Quel message d'erreur voyez-vous ?\nUTILISATEUR : Il y a écrit 'délai d'attente dépassé'.\nTECHNICIEN : D'accord, c'est probablement un problème de serveur. Je vais vérifier.\nTECHNICIEN : Effectivement, le serveur VPN est en maintenance jusqu'à midi. Vous pouvez réessayer dans une heure.\nUTILISATEUR : Très bien. Et en attendant, comment puis-je accéder à mes fichiers ?\nTECHNICIEN : Vous pouvez utiliser le cloud de l'entreprise. Connectez-vous avec vos identifiants habituels.\nUTILISATEUR : Parfait. Merci beaucoup pour votre aide.\nTECHNICIEN : Je vous en prie. N'hésitez pas à me rappeler si nécessaire.",
      es: "USUARIO: Buenos días, estoy teletrabajando y no consigo conectarme al VPN.\nTÉCNICO: Buenos días. ¿Tiene buena conexión de internet en casa?\nUSUARIO: Sí, mi conexión funciona bien, puedo navegar por internet.\nTÉCNICO: Muy bien. ¿Qué mensaje de error ve?\nUSUARIO: Pone 'tiempo de espera agotado'.\nTÉCNICO: De acuerdo, probablemente sea un problema de servidor. Voy a verificar.\nTÉCNICO: Efectivamente, el servidor VPN está en mantenimiento hasta mediodía. Puede volver a intentarlo en una hora.\nUSUARIO: Muy bien. Mientras tanto, ¿cómo puedo acceder a mis archivos?\nTÉCNICO: Puede usar el cloud de la empresa. Conéctese con sus credenciales habituales.\nUSUARIO: Perfecto. Muchas gracias por su ayuda.\nTÉCNICO: De nada. No dude en volver a llamarme si es necesario.",
      vocab: [
        { fr: "Le télétravail", es: "El teletrabajo" },
        { fr: "Délai d'attente dépassé", es: "Tiempo de espera agotado" },
        { fr: "En maintenance", es: "En mantenimiento" },
        { fr: "Les identifiants habituels", es: "Las credenciales habituales" }
      ],
      questions: []
    },
    {
      id: 'it-5', title: "Installation d'un nouveau logiciel", titleEs: 'Instalación de un nuevo software',
      level: 'Intermedio',
      fr: "Aujourd'hui, je vais vous expliquer comment installer le nouveau logiciel de comptabilité. D'abord, allez sur le portail interne de l'entreprise. Cliquez sur l'onglet 'logiciels' puis sur 'comptabilité version 2026'. Téléchargez le fichier d'installation. Quand le téléchargement est terminé, double-cliquez sur le fichier. Suivez les instructions à l'écran. L'installation prend environ dix minutes. Une fois terminée, redémarrez votre ordinateur. Au redémarrage, vous trouverez l'icône du logiciel sur votre bureau. Vos identifiants sont les mêmes que pour votre session Windows. Si vous avez le moindre problème, ouvrez un ticket sur notre plateforme de support.",
      es: "Hoy les voy a explicar cómo instalar el nuevo software de contabilidad. Primero, vayan al portal interno de la empresa. Hagan clic en la pestaña 'software' y luego en 'contabilidad versión 2026'. Descarguen el archivo de instalación. Cuando termine la descarga, hagan doble clic en el archivo. Sigan las instrucciones en pantalla. La instalación tarda unos diez minutos. Una vez terminada, reinicien su ordenador. Al reiniciar, encontrarán el icono del software en su escritorio. Sus credenciales son las mismas que las de su sesión Windows. Si tienen cualquier problema, abran un ticket en nuestra plataforma de soporte.",
      vocab: [
        { fr: "Le portail interne", es: "El portal interno" },
        { fr: "L'onglet", es: "La pestaña" },
        { fr: "Double-cliquer", es: "Hacer doble clic" },
        { fr: "Suivez les instructions", es: "Siga las instrucciones" },
        { fr: "Une fois terminée", es: "Una vez terminada" }
      ],
      questions: ["¿Dónde se descarga el archivo?", "¿Cuánto dura la instalación?", "¿Qué hay que hacer al final?"]
    },
    {
      id: 'it-6', title: 'Ticket urgent', titleEs: 'Ticket urgente (email)',
      level: 'Intermedio',
      fr: "Bonjour,\nJe me permets de vous contacter en urgence. Depuis ce matin, toute notre équipe de vente ne peut plus accéder au système CRM. Nous avons un message d'erreur qui dit 'serveur indisponible'. C'est très problématique car nous avons une présentation importante avec un client à quatorze heures.\nPouvez-vous traiter ce ticket en priorité ? Nous sommes une équipe de dix personnes bloquées.\nJe reste joignable au cinq cent soixante-deux, quarante-trois, vingt et un.\nMerci d'avance pour votre réactivité.\nCordialement, Pierre Dubois, Directeur des Ventes.",
      es: "Buenos días,\nMe permito contactarles con urgencia. Desde esta mañana, todo nuestro equipo de ventas no puede acceder al sistema CRM. Tenemos un mensaje de error que dice 'servidor no disponible'. Es muy problemático porque tenemos una presentación importante con un cliente a las catorce horas.\n¿Pueden tratar este ticket con prioridad? Somos un equipo de diez personas bloqueadas.\nQuedo localizable en el 562-43-21.\nGracias de antemano por su capacidad de respuesta.\nAtentamente, Pierre Dubois, Director de Ventas.",
      vocab: [
        { fr: "En urgence", es: "Urgentemente" },
        { fr: "Traiter ce ticket en priorité", es: "Tratar este ticket con prioridad" },
        { fr: "Joignable", es: "Disponible / localizable" },
        { fr: "Votre réactivité", es: "Su capacidad de respuesta" }
      ],
      questions: []
    },
    {
      id: 'it-7', title: "Réunion d'équipe IT", titleEs: 'Reunión de equipo IT',
      level: 'Intermedio-avanzado',
      fr: "Bonjour à tous, je commence la réunion. Cette semaine, nous avons traité cent vingt tickets, c'est dix pour cent de plus que la semaine dernière. Les problèmes les plus fréquents sont les pannes d'imprimante et les oublis de mot de passe. La semaine prochaine, nous allons déployer la nouvelle version du système d'exploitation sur tous les postes. Marc, tu es responsable des tests. Sophie, tu prépares la communication pour les utilisateurs. Thomas, tu coordonnes avec le fournisseur. La date prévue de déploiement est lundi prochain. Y a-t-il des questions ?",
      es: "Buenos días a todos, empiezo la reunión. Esta semana hemos gestionado ciento veinte tickets, es un 10% más que la semana pasada. Los problemas más frecuentes son las averías de impresora y los olvidos de contraseña. La semana próxima vamos a desplegar la nueva versión del sistema operativo en todos los puestos. Marc, eres responsable de las pruebas. Sophie, preparas la comunicación para los usuarios. Thomas, coordinas con el proveedor. La fecha prevista de despliegue es el lunes próximo. ¿Hay preguntas?",
      vocab: [
        { fr: "Traiter des tickets", es: "Gestionar tickets" },
        { fr: "Déployer", es: "Desplegar / implementar" },
        { fr: "Responsable des tests", es: "Responsable de las pruebas" },
        { fr: "La date prévue", es: "La fecha prevista" }
      ],
      questions: []
    },
    {
      id: 'it-8', title: 'Cybersécurité : phishing', titleEs: 'Ciberseguridad: phishing',
      level: 'Intermedio-avanzado',
      fr: "Attention à tous les employés. Ce matin, plusieurs personnes ont reçu un email frauduleux qui imite notre service informatique. Cet email demande de cliquer sur un lien pour 'vérifier votre compte'. Il s'agit d'une tentative de hameçonnage. Surtout, ne cliquez pas sur le lien. Ne donnez jamais votre mot de passe par email. Notre service ne demandera jamais cette information par courriel. Si vous avez déjà cliqué, contactez-nous immédiatement au poste cent vingt-trois. Restez vigilants. Merci.",
      es: "Atención a todos los empleados. Esta mañana, varias personas han recibido un email fraudulento que imita a nuestro servicio informático. Este email pide hacer clic en un enlace para 'verificar su cuenta'. Se trata de un intento de phishing. Sobre todo, no hagan clic en el enlace. Nunca den su contraseña por email. Nuestro servicio nunca pedirá esta información por correo. Si ya han hecho clic, contáctennos inmediatamente en la extensión 123. Manténganse alerta. Gracias.",
      vocab: [
        { fr: "Un email frauduleux", es: "Un correo fraudulento" },
        { fr: "Une tentative de hameçonnage", es: "Un intento de phishing" },
        { fr: "Cliquer sur un lien", es: "Hacer clic en un enlace" },
        { fr: "Restez vigilants", es: "Manténganse alerta" }
      ],
      questions: []
    },
    {
      id: 'it-9', title: 'Demande de matériel', titleEs: 'Solicitud de material',
      level: 'Intermedio',
      fr: "UTILISATEUR : Bonjour, j'aurais besoin d'un nouveau matériel pour télétravailler.\nTECHNICIEN : Bonjour. Quel type de matériel ?\nUTILISATEUR : Il me faudrait un casque avec micro pour les visioconférences, et idéalement un deuxième écran.\nTECHNICIEN : D'accord. Avez-vous déjà fait une demande officielle via le portail ?\nUTILISATEUR : Non, comment dois-je procéder ?\nTECHNICIEN : Connectez-vous au portail RH, allez dans la section 'matériel', et remplissez le formulaire. Votre manager doit valider la demande.\nUTILISATEUR : Combien de temps pour recevoir le matériel ?\nTECHNICIEN : Comptez environ une semaine après validation. Nous vous enverrons le matériel directement à votre domicile.\nUTILISATEUR : Parfait. Merci pour ces précisions.\nTECHNICIEN : Avec plaisir. Bonne journée.",
      es: "USUARIO: Buenos días, necesitaría material nuevo para teletrabajar.\nTÉCNICO: Buenos días. ¿Qué tipo de material?\nUSUARIO: Necesitaría auriculares con micro para las videoconferencias, e idealmente una segunda pantalla.\nTÉCNICO: De acuerdo. ¿Ya ha hecho una solicitud oficial vía el portal?\nUSUARIO: No, ¿cómo debo proceder?\nTÉCNICO: Conéctese al portal RRHH, vaya a la sección 'material', y rellene el formulario. Su manager debe validar la solicitud.\nUSUARIO: ¿Cuánto tiempo para recibir el material?\nTÉCNICO: Cuente unas dos semanas tras la validación. Le enviaremos el material directamente a su domicilio.\nUSUARIO: Perfecto. Gracias por las precisiones.\nTÉCNICO: Con gusto. Buen día.",
      vocab: [
        { fr: "J'aurais besoin de", es: "Necesitaría" },
        { fr: "Un casque avec micro", es: "Auriculares con micro" },
        { fr: "Remplir le formulaire", es: "Rellenar el formulario" },
        { fr: "Valider la demande", es: "Validar la solicitud" }
      ],
      questions: []
    },
    {
      id: 'it-10', title: 'Migration vers le cloud', titleEs: 'Migración a la nube',
      level: 'Avanzado',
      fr: "Bonjour à tous, et merci d'être présents pour cette présentation sur notre future migration vers le cloud. Aujourd'hui, nos données sont stockées sur des serveurs internes. Cette infrastructure coûte cher et nécessite beaucoup de maintenance. À partir du mois prochain, nous allons progressivement migrer nos fichiers vers une solution cloud sécurisée. Les avantages sont nombreux : un accès à vos documents depuis n'importe où, des sauvegardes automatiques, une meilleure collaboration entre équipes, et une réduction des coûts informatiques. Cette migration se fera en trois phases sur six mois. Pendant cette période, votre équipe IT sera disponible pour répondre à toutes vos questions. Je vous remercie pour votre attention. Y a-t-il des questions ?",
      es: "Buenos días a todos, y gracias por estar presentes para esta presentación sobre nuestra futura migración a la nube. Hoy, nuestros datos están almacenados en servidores internos. Esta infraestructura es cara y requiere mucho mantenimiento. A partir del próximo mes, vamos a migrar progresivamente nuestros archivos a una solución cloud segura. Las ventajas son numerosas: acceso a sus documentos desde cualquier lugar, copias de seguridad automáticas, mejor colaboración entre equipos, y una reducción de los costes informáticos. Esta migración se hará en tres fases en seis meses. Durante este periodo, su equipo IT estará disponible para responder a todas sus preguntas. Les agradezco su atención. ¿Hay preguntas?",
      vocab: [
        { fr: "La migration", es: "La migración" },
        { fr: "Stocker des données", es: "Almacenar datos" },
        { fr: "L'infrastructure", es: "La infraestructura" },
        { fr: "Sauvegardes automatiques", es: "Copias de seguridad automáticas" }
      ],
      questions: []
    }
  ],

  marketing: [
    {
      id: 'mkt-1', title: "Présentation d'une agence", titleEs: 'Presentación de una agencia',
      level: 'Principiante-intermedio',
      fr: "Bonjour et bienvenue chez Belleville Immobilier. Notre agence existe depuis quinze ans dans le onzième arrondissement de Paris. Nous proposons des biens à la vente et à la location, du studio au loft d'exception. Notre équipe de huit consultants accompagne chaque client avec attention, du premier rendez-vous jusqu'à la signature chez le notaire. Notre force, c'est notre connaissance fine du quartier et notre engagement à valoriser chaque bien comme s'il était le nôtre.",
      es: "Buenos días y bienvenido a Belleville Immobilier. Nuestra agencia existe desde hace quince años en el distrito 11 de París. Ofrecemos bienes en venta y alquiler, desde el estudio hasta el loft de excepción. Nuestro equipo de ocho consultores acompaña a cada cliente con atención, desde la primera cita hasta la firma ante el notario. Nuestra fuerza es nuestro conocimiento fino del barrio y nuestro compromiso de valorizar cada bien como si fuera el nuestro.",
      vocab: [
        { fr: "Bienvenue chez...", es: "Bienvenido a..." },
        { fr: "Notre force", es: "Nuestra fuerza" },
        { fr: "Valoriser un bien", es: "Valorizar un bien" }
      ],
      questions: ["¿Desde cuándo existe la agencia?", "¿Cuántos consultores tienen?", "¿Cuál es su fuerza?"]
    },
    {
      id: 'mkt-2', title: "Pitch d'une annonce immobilière", titleEs: 'Pitch de un anuncio',
      level: 'Principiante-intermedio',
      fr: "Coup de cœur garanti pour cet appartement de charme situé au cœur du Marais. Avec ses soixante-quinze mètres carrés baignés de lumière, ce bien rare offre un séjour spacieux, une cuisine équipée, deux chambres et une salle de bain rénovée. Parquet ancien, poutres apparentes, cheminée d'origine : tout le cachet de l'ancien réuni dans cet écrin de raffinement. Immeuble haussmannien avec ascenseur. Cave en sous-sol. Prix : six cent cinquante mille euros, honoraires charge vendeur. Visite virtuelle disponible sur notre site.",
      es: "Flechazo garantizado para este apartamento con encanto situado en el corazón del Marais. Con sus 75 metros cuadrados bañados de luz, este bien raro ofrece un salón espacioso, una cocina equipada, dos dormitorios y un baño renovado. Parquet antiguo, vigas vistas, chimenea original: todo el encanto antiguo reunido en esta joya de refinamiento. Edificio haussmaniano con ascensor. Sótano en planta baja. Precio: 650.000 euros, honorarios a cargo del vendedor. Visita virtual disponible en nuestra web.",
      vocab: [
        { fr: "Coup de cœur garanti", es: "Flechazo garantizado" },
        { fr: "Baignés de lumière", es: "Bañados de luz" },
        { fr: "Tout le cachet de l'ancien", es: "Todo el encanto antiguo" }
      ],
      questions: []
    },
    {
      id: 'mkt-3', title: 'Réunion marketing hebdomadaire', titleEs: 'Reunión marketing semanal',
      level: 'Intermedio',
      fr: "CHEF DE PROJET : Bonjour tout le monde, on fait le point sur les chiffres de la semaine.\nCHARGÉE DE COM : Nous avons publié vingt annonces sur Instagram avec une portée totale de soixante-dix mille personnes.\nCHEF DE PROJET : Très bien. Et le taux d'engagement ?\nCHARGÉE DE COM : Huit virgule cinq pour cent. C'est notre meilleur score du trimestre.\nCHEF DE PROJET : Excellent. Comment expliques-tu cette progression ?\nCHARGÉE DE COM : Les visites virtuelles fonctionnent très bien. Et les reels avec drone explosent les statistiques.\nCHEF DE PROJET : Parfait. On augmente le budget vidéo pour le mois prochain. Autre point ?\nCHARGÉE DE COM : Oui, la newsletter du mois dernier a généré douze prises de rendez-vous.\nCHEF DE PROJET : Bravo à toute l'équipe. On continue.",
      es: "JEFE DE PROYECTO: Buenos días a todos, hacemos balance de las cifras de la semana.\nENCARGADA COM: Hemos publicado 20 anuncios en Instagram con un alcance total de 70.000 personas.\nJEFE: Muy bien. ¿Y la tasa de engagement?\nENCARGADA: 8,5%. Es nuestro mejor score del trimestre.\nJEFE: Excelente. ¿Cómo explicas esa progresión?\nENCARGADA: Las visitas virtuales funcionan muy bien. Y los reels con dron disparan las estadísticas.\nJEFE: Perfecto. Aumentamos el presupuesto vídeo para el próximo mes. ¿Otro punto?\nENCARGADA: Sí, la newsletter del mes pasado generó 12 citas concertadas.\nJEFE: Bravo a todo el equipo. Seguimos.",
      vocab: [
        { fr: "On fait le point", es: "Hacemos balance" },
        { fr: "La portée", es: "El alcance" },
        { fr: "Le taux d'engagement", es: "La tasa de engagement" },
        { fr: "Prises de rendez-vous", es: "Citas concertadas" }
      ],
      questions: []
    },
    {
      id: 'mkt-4', title: 'Storytelling de marque', titleEs: 'Storytelling de marca',
      level: 'Intermedio',
      fr: "Tout a commencé en deux mille dix, dans un petit bureau du dixième arrondissement. Avec une idée simple : remettre l'humain au centre de l'immobilier. Chez nous, vendre une maison, ce n'est pas signer un contrat. C'est accompagner une histoire, une famille, un projet de vie. Quinze ans plus tard, nous sommes toujours animés par cette même conviction. Chaque bien que nous vendons, chaque clé que nous remettons, c'est une nouvelle page qui s'écrit. Nous ne sommes pas seulement vos agents immobiliers : nous sommes les complices de vos plus belles aventures.",
      es: "Todo empezó en 2010, en una pequeña oficina del distrito 10. Con una idea simple: devolver lo humano al centro del sector inmobiliario. Para nosotros, vender una casa no es firmar un contrato. Es acompañar una historia, una familia, un proyecto de vida. Quince años después, seguimos movidos por esa misma convicción. Cada bien que vendemos, cada llave que entregamos, es una nueva página que se escribe. No somos solo sus agentes inmobiliarios: somos los cómplices de sus aventuras más bonitas.",
      vocab: [
        { fr: "Remettre l'humain au centre", es: "Devolver lo humano al centro" },
        { fr: "Accompagner une histoire", es: "Acompañar una historia" },
        { fr: "Les complices de vos aventures", es: "Los cómplices de tus aventuras" }
      ],
      questions: []
    },
    {
      id: 'mkt-5', title: 'Analyse de tendances de marché', titleEs: 'Análisis de tendencias',
      level: 'Intermedio-avanzado',
      fr: "Le marché immobilier français connaît actuellement une période de transition. Après deux années de hausse continue, les prix se stabilisent dans les grandes métropoles. À Paris, le prix moyen au mètre carré atteint dix mille trois cents euros, en légère baisse de deux pour cent par rapport à l'année dernière. À l'inverse, des villes comme Bordeaux, Lyon ou Marseille restent dynamiques avec des hausses comprises entre trois et cinq pour cent. Les acheteurs privilégient désormais les biens avec extérieur, les performances énergétiques, et la proximité des transports. Notre conseil : pour les vendeurs, soigner la présentation du bien et le positionner au juste prix. Pour les acheteurs, c'est le moment idéal pour négocier.",
      es: "El mercado inmobiliario francés atraviesa actualmente un periodo de transición. Tras dos años de subida continua, los precios se estabilizan en las grandes metrópolis. En París, el precio medio por metro cuadrado alcanza 10.300 euros, en ligera bajada del 2% respecto al año pasado. A la inversa, ciudades como Burdeos, Lyon o Marsella siguen dinámicas con subidas entre el 3 y el 5%. Los compradores privilegian ahora los bienes con exterior, el rendimiento energético, y la cercanía al transporte. Nuestro consejo: para los vendedores, cuidar la presentación del bien y posicionarlo al precio justo. Para los compradores, es el momento ideal para negociar.",
      vocab: [
        { fr: "Une période de transition", es: "Un periodo de transición" },
        { fr: "En légère baisse", es: "En ligera bajada" },
        { fr: "Les performances énergétiques", es: "El rendimiento energético" }
      ],
      questions: []
    },
    {
      id: 'mkt-6', title: 'Email enviado al cliente', titleEs: 'Email enviado al cliente',
      level: 'Intermedio',
      fr: "Objet : Madame Bernard, une opportunité unique dans votre quartier.\nBonjour Madame Bernard,\nJ'espère que vous allez bien. Suite à notre dernier échange, j'ai le plaisir de vous présenter un bien qui correspond parfaitement à votre recherche : un trois pièces de soixante-douze mètres carrés, situé rue des Lilas, à seulement cinq minutes à pied du métro.\nCe bien lumineux dispose d'un balcon plein sud, d'une cuisine équipée et de deux chambres spacieuses. Le prix demandé est de trois cent quatre-vingt-dix mille euros.\nJe vous propose d'organiser une visite cette semaine. Êtes-vous disponible jeudi à dix-huit heures ou samedi en fin de matinée ?\nJe reste à votre disposition pour toute question.\nCordialement, Marc Dubois, Consultant immobilier.",
      es: "Asunto: Sra. Bernard, una oportunidad única en su barrio.\nBuenos días Sra. Bernard,\nEspero que esté bien. Tras nuestro último intercambio, tengo el placer de presentarle un bien que se corresponde perfectamente con su búsqueda: un tres habitaciones de 72 m², situado en la rue des Lilas, a solo cinco minutos a pie del metro.\nEste bien luminoso dispone de un balcón orientado al sur, una cocina equipada y dos dormitorios espaciosos. El precio solicitado es de 390.000 euros.\nLe propongo organizar una visita esta semana. ¿Está disponible el jueves a las 18h o el sábado a última hora de la mañana?\nQuedo a su disposición para cualquier pregunta.\nAtentamente, Marc Dubois, Consultor inmobiliario.",
      vocab: [
        { fr: "Suite à notre dernier échange", es: "Tras nuestro último intercambio" },
        { fr: "À cinq minutes à pied", es: "A cinco minutos a pie" },
        { fr: "En fin de matinée", es: "A última hora de la mañana" }
      ],
      questions: []
    },
    {
      id: 'mkt-7', title: "Présentation d'une campagne digitale", titleEs: 'Campaña digital',
      level: 'Intermedio-avanzado',
      fr: "Aujourd'hui, je vais vous présenter notre nouvelle campagne digitale baptisée 'Une histoire, une maison'. L'objectif est triple : augmenter la notoriété de l'agence, générer des leads qualifiés et fidéliser notre clientèle existante. Notre cible principale est constituée de couples de trente à quarante-cinq ans, en recherche d'une résidence principale dans la région parisienne. La campagne se déploie sur trois canaux : Instagram, LinkedIn et notre newsletter mensuelle. Nous avons prévu un budget de quinze mille euros sur trois mois, avec une production de trente contenus originaux. Les premiers résultats seront analysés à la fin du premier mois pour ajuster la stratégie si nécessaire.",
      es: "Hoy les voy a presentar nuestra nueva campaña digital llamada 'Una historia, una casa'. El objetivo es triple: aumentar la notoriedad de la agencia, generar leads cualificados y fidelizar a nuestra clientela existente. Nuestro objetivo principal son parejas de 30 a 45 años, en busca de una residencia principal en la región parisina. La campaña se despliega en tres canales: Instagram, LinkedIn y nuestra newsletter mensual. Hemos previsto un presupuesto de 15.000 euros en tres meses, con una producción de 30 contenidos originales. Los primeros resultados se analizarán a finales del primer mes para ajustar la estrategia si es necesario.",
      vocab: [
        { fr: "Générer des leads qualifiés", es: "Generar leads cualificados" },
        { fr: "Fidéliser la clientèle", es: "Fidelizar la clientela" },
        { fr: "Ajuster la stratégie", es: "Ajustar la estrategia" }
      ],
      questions: []
    },
    {
      id: 'mkt-8', title: 'Conversation avec un client mécontent', titleEs: 'Cliente descontento',
      level: 'Intermedio',
      fr: "CLIENT : Bonjour, je suis très déçu. Cela fait trois mois que mon bien est en vente et je n'ai eu que deux visites.\nAGENT : Bonjour Monsieur Renard, je comprends votre frustration. Asseyons-nous pour en parler calmement.\nCLIENT : Le marché est mauvais selon vous ?\nAGENT : Le marché ralentit, c'est vrai. Mais d'après notre analyse, le prix est légèrement au-dessus de la concurrence.\nCLIENT : Vous voulez que je baisse le prix ?\nAGENT : Je propose une baisse stratégique de cinq pour cent. Cela vous fera passer dans une nouvelle tranche de recherche sur les portails.\nCLIENT : Et combien de visites cela va générer ?\nAGENT : Selon notre expérience, entre quatre et six visites supplémentaires dans les trois prochaines semaines.\nCLIENT : D'accord. Faisons un essai pendant un mois.\nAGENT : Très bien. Je modifie l'annonce dès aujourd'hui.",
      es: "CLIENTE: Buenos días, estoy muy decepcionado. Hace tres meses que mi bien está en venta y solo he tenido dos visitas.\nAGENTE: Buenos días Sr. Renard, entiendo su frustración. Sentémonos para hablar tranquilamente.\nCLIENTE: ¿El mercado es malo según usted?\nAGENTE: El mercado se ralentiza, es cierto. Pero según nuestro análisis, el precio está ligeramente por encima de la competencia.\nCLIENTE: ¿Quiere que baje el precio?\nAGENTE: Propongo una bajada estratégica del 5%. Eso le hará pasar a una nueva franja de búsqueda en los portales.\nCLIENTE: ¿Y cuántas visitas generará?\nAGENTE: Según nuestra experiencia, entre cuatro y seis visitas adicionales en las próximas tres semanas.\nCLIENTE: De acuerdo. Hagamos una prueba durante un mes.\nAGENTE: Muy bien. Modifico el anuncio hoy mismo.",
      vocab: [
        { fr: "Je suis très déçu", es: "Estoy muy decepcionado" },
        { fr: "Une baisse stratégique", es: "Una bajada estratégica" },
        { fr: "Faisons un essai", es: "Hagamos una prueba" }
      ],
      questions: []
    },
    {
      id: 'mkt-9', title: 'Pitch lors d\'un salon professionnel', titleEs: 'Pitch en feria',
      level: 'Intermedio-avanzado',
      fr: "Bonjour, je m'appelle Sophie Martin et je dirige l'agence Belleville Immobilier. Notre particularité ? Nous combinons l'expertise locale d'une agence de quartier avec les outils digitaux des grands réseaux. Concrètement, cela signifie : visites virtuelles en trois D pour chaque bien, photos professionnelles avec drone, et une présence active sur les réseaux sociaux qui génère plus de cinquante pour cent de nos prospects. Nos résultats parlent d'eux-mêmes : un délai moyen de vente de quarante-cinq jours, contre quatre-vingt-dix en moyenne sur le marché. Voici ma carte. Je serais ravie d'échanger avec vous autour d'un café. Au plaisir de vous rencontrer.",
      es: "Buenos días, me llamo Sophie Martin y dirijo la agencia Belleville Immobilier. ¿Nuestra particularidad? Combinamos la experiencia local de una agencia de barrio con las herramientas digitales de las grandes redes. Concretamente, eso significa: visitas virtuales en 3D para cada bien, fotos profesionales con dron, y una presencia activa en redes sociales que genera más del 50% de nuestros prospectos. Nuestros resultados hablan por sí solos: un plazo medio de venta de 45 días, frente a 90 de media del mercado. Aquí tiene mi tarjeta. Estaría encantada de intercambiar con usted tomando un café. Encantada de conocerle.",
      vocab: [
        { fr: "Je dirige l'agence", es: "Dirijo la agencia" },
        { fr: "Nos résultats parlent d'eux-mêmes", es: "Nuestros resultados hablan por sí solos" },
        { fr: "Échanger autour d'un café", es: "Intercambiar tomando un café" }
      ],
      questions: []
    },
    {
      id: 'mkt-10', title: 'Stratégie de contenu Instagram', titleEs: 'Estrategia de contenido',
      level: 'Avanzado',
      fr: "Notre stratégie de contenu sur Instagram repose sur trois piliers. Premièrement, l'inspiration : nous publions chaque semaine trois biens d'exception soigneusement sélectionnés, présentés avec un visuel léché et une histoire courte qui éveille le rêve. Deuxièmement, la pédagogie : tous les mardis, notre série 'Le saviez-vous ?' partage des conseils pratiques sur la fiscalité, le financement ou la décoration. Troisièmement, les coulisses : nous montrons l'envers du décor, les équipes, les visites, les signatures. Ce mix entre rêve, expertise et humanité génère un taux d'engagement supérieur à la moyenne du secteur. Notre objectif pour les six prochains mois est de doubler notre communauté pour atteindre cinquante mille abonnés.",
      es: "Nuestra estrategia de contenido en Instagram se basa en tres pilares. Primero, la inspiración: publicamos cada semana tres bienes de excepción cuidadosamente seleccionados, presentados con un visual cuidado y una historia corta que despierta el sueño. Segundo, la pedagogía: todos los martes, nuestra serie '¿Lo sabías?' comparte consejos prácticos sobre fiscalidad, financiación o decoración. Tercero, el detrás de cámaras: mostramos lo que no se ve, los equipos, las visitas, las firmas. Esta mezcla de sueño, experiencia y humanidad genera una tasa de engagement superior a la media del sector. Nuestro objetivo para los próximos seis meses es doblar nuestra comunidad para alcanzar 50.000 seguidores.",
      vocab: [
        { fr: "Repose sur trois piliers", es: "Se basa en tres pilares" },
        { fr: "Éveille le rêve", es: "Despierta el sueño" },
        { fr: "Doubler notre communauté", es: "Doblar nuestra comunidad" }
      ],
      questions: []
    }
  ],

  secretaria: [
    {
      id: 'sec-1', title: 'Contestar el teléfono', titleEs: 'Contestar el teléfono',
      level: 'Principiante',
      fr: "SECRÉTAIRE : Agence Belleville Immobilier, bonjour, Ruben à l'appareil.\nCLIENT : Bonjour, je vous appelle au sujet de votre annonce pour un appartement à Montmartre.\nSECRÉTAIRE : Très bien. Quelle est la référence de l'annonce, s'il vous plaît ?\nCLIENT : C'est la référence A-2378.\nSECRÉTAIRE : Je vérifie un instant... Oui, ce bien est toujours disponible. Quel est votre nom ?\nCLIENT : Madame Bernard.\nSECRÉTAIRE : Madame Bernard, souhaitez-vous organiser une visite ?\nCLIENTE : Oui, est-ce possible cette semaine ?\nSECRÉTAIRE : Je vous propose jeudi à quinze heures. Cela vous convient-il ?\nCLIENTE : Parfait.\nSECRÉTAIRE : C'est noté. Je vous envoie un email de confirmation. Bonne journée.",
      es: "SECRETARIO: Agencia Belleville Immobilier, buenos días, Ruben al habla.\nCLIENTE: Buenos días, le llamo sobre su anuncio de un apartamento en Montmartre.\nSECRETARIO: Muy bien. ¿Cuál es la referencia del anuncio, por favor?\nCLIENTE: Es la referencia A-2378.\nSECRETARIO: Verifico un momento... Sí, este bien sigue disponible. ¿Cuál es su nombre?\nCLIENTA: Sra. Bernard.\nSECRETARIO: Sra. Bernard, ¿desea organizar una visita?\nCLIENTA: Sí, ¿es posible esta semana?\nSECRETARIO: Le propongo el jueves a las 15h. ¿Le viene bien?\nCLIENTA: Perfecto.\nSECRETARIO: Apuntado. Le envío un email de confirmación. Buen día.",
      vocab: [
        { fr: "Au sujet de", es: "Acerca de / sobre" },
        { fr: "Cela vous convient-il ?", es: "¿Le viene bien?" },
        { fr: "C'est noté", es: "Apuntado" }
      ],
      questions: []
    },
    {
      id: 'sec-2', title: 'Recibir un visitante', titleEs: 'Recibir visitante',
      level: 'Principiante',
      fr: "SECRÉTAIRE : Bonjour Monsieur, bienvenue à l'agence.\nCLIENT : Bonjour, j'ai rendez-vous avec Madame Martin à dix heures.\nSECRÉTAIRE : Très bien. Pouvez-vous me donner votre nom, s'il vous plaît ?\nCLIENT : Pierre Lefèvre.\nSECRÉTAIRE : Parfait, Monsieur Lefèvre. Je préviens Madame Martin de votre arrivée. Veuillez vous installer dans l'espace d'accueil.\nCLIENT : Merci.\nSECRÉTAIRE : Puis-je vous offrir quelque chose à boire ? Un café, un thé, un verre d'eau ?\nCLIENT : Un café, s'il vous plaît, sans sucre.\nSECRÉTAIRE : Je vous l'apporte tout de suite. Madame Martin arrive dans deux minutes.",
      es: "SECRETARIO: Buenos días señor, bienvenido a la agencia.\nCLIENTE: Buenos días, tengo cita con la Sra. Martin a las 10.\nSECRETARIO: Muy bien. ¿Puede darme su nombre, por favor?\nCLIENTE: Pierre Lefèvre.\nSECRETARIO: Perfecto, Sr. Lefèvre. Aviso a la Sra. Martin de su llegada. Por favor, póngase cómodo en el espacio de recepción.\nCLIENTE: Gracias.\nSECRETARIO: ¿Puedo ofrecerle algo de beber? ¿Un café, un té, un vaso de agua?\nCLIENTE: Un café, por favor, sin azúcar.\nSECRETARIO: Se lo traigo enseguida. La Sra. Martin llega en dos minutos.",
      vocab: [
        { fr: "Je préviens... de votre arrivée", es: "Aviso a... de su llegada" },
        { fr: "Veuillez vous installer", es: "Por favor, póngase cómodo" }
      ],
      questions: []
    },
    {
      id: 'sec-3', title: 'Concertar una cita', titleEs: 'Concertar una cita',
      level: 'Principiante-intermedio',
      fr: "CLIENT : Bonjour, je souhaiterais prendre un rendez-vous pour faire estimer mon appartement.\nSECRÉTAIRE : Bonjour. Bien sûr, je vais vous aider. Quel est votre nom ?\nCLIENT : Sophie Durand.\nSECRÉTAIRE : Très bien. Quelles sont vos disponibilités cette semaine ou la semaine prochaine ?\nCLIENT : Plutôt en fin d'après-midi, après dix-sept heures si possible.\nSECRÉTAIRE : Je vois... Monsieur Martin est libre mardi prochain à dix-huit heures, et jeudi à dix-sept heures trente.\nCLIENT : Jeudi à dix-sept heures trente, c'est parfait.\nSECRÉTAIRE : Quelle est l'adresse de votre bien ?\nCLIENT : Vingt-cinq, rue Lafayette, dans le neuvième.\nSECRÉTAIRE : Très bien. Et un numéro pour vous joindre ?\nCLIENT : Zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit.\nSECRÉTAIRE : Je vous remercie. Vous recevrez la confirmation par email dans la journée.",
      es: "CLIENTA: Buenos días, quisiera concertar una cita para hacer tasar mi apartamento.\nSECRETARIO: Buenos días. Por supuesto, le ayudaré. ¿Cuál es su nombre?\nCLIENTA: Sophie Durand.\nSECRETARIO: Muy bien. ¿Cuál es su disponibilidad esta semana o la semana próxima?\nCLIENTA: Más bien a última hora de la tarde, después de las 17 si es posible.\nSECRETARIO: Veamos... El Sr. Martin está libre el martes a las 18 y el jueves a las 17:30.\nCLIENTA: El jueves a las 17:30, perfecto.\nSECRETARIO: ¿Cuál es la dirección de su bien?\nCLIENTA: Calle Lafayette 25, en el distrito 9.\nSECRETARIO: Muy bien. ¿Y un número para contactarla?\nCLIENTA: 06 12 34 56 78.\nSECRETARIO: Gracias. Recibirá la confirmación por email durante el día.",
      vocab: [
        { fr: "Faire estimer", es: "Hacer tasar" },
        { fr: "Vos disponibilités", es: "Su disponibilidad" },
        { fr: "Pour vous joindre", es: "Para contactar con usted" }
      ],
      questions: []
    },
    {
      id: 'sec-4', title: 'Transferir una llamada', titleEs: 'Transferir una llamada',
      level: 'Intermedio',
      fr: "SECRÉTAIRE : Agence Belleville, bonjour.\nCLIENT : Bonjour, je voudrais parler à Monsieur Martin, c'est urgent.\nSECRÉTAIRE : Bonjour. Monsieur Martin est actuellement en rendez-vous. Puis-je vous aider ou souhaitez-vous laisser un message ?\nCLIENT : C'est concernant la signature du compromis prévu vendredi. Le notaire a un empêchement.\nSECRÉTAIRE : Je comprends. C'est effectivement important. Je vais essayer de l'interrompre. Pouvez-vous me donner votre nom ?\nCLIENT : Monsieur Dupré, l'acheteur du bien rue Lafayette.\nSECRÉTAIRE : Ne quittez pas, Monsieur Dupré, je vous mets en attente quelques secondes.\nSECRÉTAIRE : Monsieur Dupré, je vous passe Monsieur Martin.\nCLIENT : Merci beaucoup.",
      es: "SECRETARIO: Agencia Belleville, buenos días.\nCLIENTE: Buenos días, quisiera hablar con el Sr. Martin, es urgente.\nSECRETARIO: Buenos días. El Sr. Martin está actualmente en una reunión. ¿Puedo ayudarle o desea dejar un mensaje?\nCLIENTE: Es sobre la firma del precontrato prevista el viernes. El notario tiene un imprevisto.\nSECRETARIO: Entiendo. Es efectivamente importante. Voy a intentar interrumpirle. ¿Puede darme su nombre?\nCLIENTE: Sr. Dupré, el comprador del bien de la calle Lafayette.\nSECRETARIO: No cuelgue, Sr. Dupré, le pongo en espera unos segundos.\nSECRETARIO: Sr. Dupré, le paso con el Sr. Martin.\nCLIENTE: Muchas gracias.",
      vocab: [
        { fr: "Souhaitez-vous laisser un message ?", es: "¿Desea dejar un mensaje?" },
        { fr: "Un empêchement", es: "Un imprevisto" },
        { fr: "Ne quittez pas", es: "No cuelgue" }
      ],
      questions: []
    },
    {
      id: 'sec-5', title: 'Cliente insatisfecho', titleEs: 'Cliente insatisfecho',
      level: 'Intermedio',
      fr: "CLIENT : Bonjour, je vous appelle parce que je suis très mécontent. Cela fait une semaine que j'attends une réponse à mon email !\nSECRÉTAIRE : Bonjour Monsieur. Je suis vraiment désolée pour ce délai. Pouvez-vous me donner votre nom et le sujet de votre demande ?\nCLIENT : Bertrand. C'est concernant ma demande de location au cinq, rue des Lilas.\nSECRÉTAIRE : Un instant, je vérifie votre dossier... Je vois en effet votre email du quinze. Je comprends votre frustration.\nCLIENT : C'est inadmissible. J'avais besoin d'une réponse rapide.\nSECRÉTAIRE : Vous avez parfaitement raison, et je vous prie de nous excuser. Je vais m'occuper personnellement de votre dossier. Pouvez-vous me confirmer votre numéro de téléphone ?\nCLIENT : Oui, zéro six, vingt-cinq, trente-six, quarante-sept, cinquante-huit.\nSECRÉTAIRE : Je m'engage à ce qu'un consultant vous rappelle avant dix-sept heures aujourd'hui.\nCLIENT : J'espère bien.\nSECRÉTAIRE : Encore une fois, mes excuses. Bonne journée Monsieur Bertrand.",
      es: "CLIENTE: Buenos días, les llamo porque estoy muy descontento. ¡Hace una semana que espero respuesta a mi email!\nSECRETARIA: Buenos días señor. Siento mucho la demora. ¿Puede darme su nombre y el motivo de su solicitud?\nCLIENTE: Bertrand. Es sobre mi solicitud de alquiler en el 5 de la calle des Lilas.\nSECRETARIA: Un momento, verifico su expediente... Veo efectivamente su email del 15. Entiendo su frustración.\nCLIENTE: Es inadmisible. Necesitaba una respuesta rápida.\nSECRETARIA: Tiene toda la razón, y le ruego que nos disculpe. Me ocuparé personalmente de su expediente. ¿Puede confirmarme su número de teléfono?\nCLIENTE: Sí, 06 25 36 47 58.\nSECRETARIA: Me comprometo a que un consultor le devuelva la llamada antes de las 17 hoy.\nCLIENTE: Eso espero.\nSECRETARIA: Una vez más, mis disculpas. Buen día Sr. Bertrand.",
      vocab: [
        { fr: "Je suis vraiment désolée", es: "Lo siento mucho" },
        { fr: "C'est inadmissible", es: "Es inadmisible" },
        { fr: "Je m'engage à...", es: "Me comprometo a..." }
      ],
      questions: []
    },
    {
      id: 'sec-6', title: 'Email confirmación cita', titleEs: 'Email confirmación cita',
      level: 'Intermedio',
      fr: "Objet : Confirmation de votre rendez-vous du quinze mai.\nBonjour Madame Bernard,\nJe vous confirme votre rendez-vous avec Monsieur Martin, prévu le mercredi quinze mai à quatorze heures, dans nos locaux situés au quinze, rue de la Paix, dans le deuxième arrondissement de Paris.\nAfin que ce rendez-vous se déroule dans les meilleures conditions, merci de bien vouloir prévoir votre pièce d'identité, ainsi que les documents demandés par Monsieur Martin lors de votre dernier échange.\nEn cas d'imprévu, n'hésitez pas à me contacter au zéro un, vingt-trois, quarante-cinq, soixante-sept, quatre-vingt-neuf, ou par retour de ce message.\nAu plaisir de vous accueillir.\nBien cordialement,\nRuben, Accueil de l'Agence Belleville Immobilier.",
      es: "Asunto: Confirmación de su cita del 15 de mayo.\nBuenos días Sra. Bernard,\nLe confirmo su cita con el Sr. Martin, prevista para el miércoles 15 de mayo a las 14h, en nuestras oficinas en la calle de la Paix 15, distrito 2 de París.\nPara que esta cita se desarrolle en las mejores condiciones, le rogamos que prepare su documento de identidad, así como los documentos solicitados por el Sr. Martin en su último intercambio.\nEn caso de imprevisto, no dude en contactarme en el 01 23 45 67 89, o respondiendo a este mensaje.\nEncantado de recibirla.\nAtentamente,\nRuben, Recepción de la Agencia Belleville Immobilier.",
      vocab: [
        { fr: "Afin que... se déroule", es: "Para que se desarrolle" },
        { fr: "En cas d'imprévu", es: "En caso de imprevisto" },
        { fr: "Par retour de ce message", es: "Respondiendo a este mensaje" }
      ],
      questions: []
    },
    {
      id: 'sec-7', title: 'Anular y reagendar', titleEs: 'Anular y reagendar',
      level: 'Intermedio',
      fr: "CLIENT : Bonjour, je voudrais annuler mon rendez-vous de demain matin.\nSECRÉTAIRE : Bonjour. Pouvez-vous me donner votre nom et l'heure du rendez-vous ?\nCLIENT : Madame Garcia, à dix heures avec Monsieur Martin.\nSECRÉTAIRE : Très bien, je vous trouve dans l'agenda. Souhaitez-vous reporter ce rendez-vous ?\nCLIENT : Oui, mais je ne sais pas encore quand.\nSECRÉTAIRE : Pas de problème. Voulez-vous que je vous rappelle dans la semaine pour fixer une nouvelle date ?\nCLIENT : Ce serait parfait. Je serai disponible la semaine prochaine.\nSECRÉTAIRE : C'est noté. Je vous appelle lundi pour caler ensemble. Préférez-vous le matin ou l'après-midi ?\nCLIENT : Plutôt le matin si possible.\nSECRÉTAIRE : Très bien. Je vous appelle lundi entre neuf et dix heures.",
      es: "CLIENTA: Buenos días, quisiera anular mi cita de mañana por la mañana.\nSECRETARIO: Buenos días. ¿Puede darme su nombre y la hora de la cita?\nCLIENTA: Sra. Garcia, a las 10 con el Sr. Martin.\nSECRETARIO: Muy bien, la encuentro en la agenda. ¿Desea aplazar esta cita?\nCLIENTA: Sí, pero aún no sé cuándo.\nSECRETARIO: No hay problema. ¿Quiere que la llame durante la semana para fijar una nueva fecha?\nCLIENTA: Sería perfecto. Estaré disponible la próxima semana.\nSECRETARIO: Apuntado. La llamo el lunes para concretar juntos. ¿Prefiere por la mañana o por la tarde?\nCLIENTA: Mejor por la mañana si es posible.\nSECRETARIO: Muy bien. La llamo el lunes entre las 9 y las 10.",
      vocab: [
        { fr: "Reporter un rendez-vous", es: "Aplazar una cita" },
        { fr: "Fixer une nouvelle date", es: "Fijar una nueva fecha" },
        { fr: "Caler ensemble", es: "Concretar juntos" }
      ],
      questions: []
    },
    {
      id: 'sec-8', title: 'Comunicación interna', titleEs: 'Comunicación interna',
      level: 'Intermedio',
      fr: "SECRÉTAIRE : Bonjour Monsieur Martin, je vous fais le point sur la matinée.\nAGENT : Bonjour Ruben, je vous écoute.\nSECRÉTAIRE : Vous avez trois rendez-vous aujourd'hui : Madame Bernard à dix heures pour une estimation, Monsieur Lefèvre à quatorze heures pour une signature, et Madame Garcia à seize heures pour une première visite virtuelle.\nAGENT : Très bien. Et les messages ?\nSECRÉTAIRE : Trois appels en votre absence. Le notaire vous demande de le rappeler pour le dossier Dupont. Madame Lefort souhaite avancer son rendez-vous de jeudi. Et Monsieur Garnier a confirmé sa venue de vendredi.\nAGENT : Parfait. Pouvez-vous rappeler Madame Lefort et lui proposer mercredi à quinze heures ?\nSECRÉTAIRE : C'est noté. Je m'en occupe immédiatement.\nAGENT : Merci, Ruben.",
      es: "SECRETARIO: Buenos días Sr. Martin, le hago un resumen de la mañana.\nAGENTE: Buenos días Ruben, le escucho.\nSECRETARIO: Tiene tres citas hoy: la Sra. Bernard a las 10 para una tasación, el Sr. Lefèvre a las 14 para una firma, y la Sra. Garcia a las 16 para una primera visita virtual.\nAGENTE: Muy bien. ¿Y los mensajes?\nSECRETARIO: Tres llamadas durante su ausencia. El notario le pide que le devuelva la llamada para el expediente Dupont. La Sra. Lefort desea adelantar su cita del jueves. Y el Sr. Garnier ha confirmado su visita del viernes.\nAGENTE: Perfecto. ¿Puede llamar a la Sra. Lefort y proponerle el miércoles a las 15?\nSECRETARIO: Apuntado. Me ocupo inmediatamente.\nAGENTE: Gracias, Ruben.",
      vocab: [
        { fr: "Je vous fais le point", es: "Le hago un resumen" },
        { fr: "Avancer son rendez-vous", es: "Adelantar su cita" }
      ],
      questions: []
    },
    {
      id: 'sec-9', title: 'Visita inesperada', titleEs: 'Visita inesperada',
      level: 'Intermedio',
      fr: "SECRÉTAIRE : Bonjour, bienvenue à l'agence.\nVISITEUR : Bonjour, je n'ai pas de rendez-vous, mais j'aurais voulu rencontrer un consultant.\nSECRÉTAIRE : Très bien. C'est concernant un projet d'achat, de vente ou de location ?\nVISITEUR : Un projet d'achat, plutôt en région parisienne.\nSECRÉTAIRE : D'accord. Tous nos consultants sont en rendez-vous ou en visite extérieure pour le moment. Je peux vous proposer plusieurs solutions.\nVISITEUR : Je vous écoute.\nSECRÉTAIRE : Soit je vous prends vos coordonnées et un consultant vous rappelle aujourd'hui même, soit je vous fixe un rendez-vous pour demain matin.\nVISITEUR : Demain matin, c'est très bien. Disons dix heures.\nSECRÉTAIRE : Parfait. Avec Monsieur Martin ou Madame Dubois, indifféremment ?\nVISITEUR : Comme vous voulez.\nSECRÉTAIRE : Je note avec Madame Dubois. Pouvez-vous remplir cette fiche d'information rapide ?\nVISITEUR : Bien sûr.",
      es: "SECRETARIO: Buenos días, bienvenido a la agencia.\nVISITANTE: Buenos días, no tengo cita, pero quería ver a un consultor.\nSECRETARIO: Muy bien. ¿Es sobre un proyecto de compra, venta o alquiler?\nVISITANTE: Un proyecto de compra, más bien en la región parisina.\nSECRETARIO: De acuerdo. Todos nuestros consultores están en cita o de visita fuera por el momento. Puedo proponerle varias soluciones.\nVISITANTE: Le escucho.\nSECRETARIO: O bien le tomo sus datos y un consultor le llama hoy mismo, o bien le fijo una cita para mañana por la mañana.\nVISITANTE: Mañana por la mañana está muy bien. Digamos las 10.\nSECRETARIO: Perfecto. ¿Con el Sr. Martin o la Sra. Dubois, indistintamente?\nVISITANTE: Como quiera.\nSECRETARIO: Apunto con la Sra. Dubois. ¿Puede rellenar esta ficha de información rápida?\nVISITANTE: Por supuesto.",
      vocab: [
        { fr: "Je n'ai pas de rendez-vous", es: "No tengo cita" },
        { fr: "En visite extérieure", es: "De visita fuera" },
        { fr: "Une fiche d'information", es: "Una ficha de información" }
      ],
      questions: []
    },
    {
      id: 'sec-10', title: 'Día completo en recepción', titleEs: 'Día completo',
      level: 'Intermedio-avanzado',
      fr: "Une journée typique à l'accueil de notre agence commence à neuf heures. La première heure est consacrée à la préparation : je vérifie l'agenda du jour, j'imprime les dossiers des rendez-vous, et je prépare la salle de réunion. Vers neuf heures trente, les premiers clients arrivent pour leurs rendez-vous. Je les accueille, je leur offre un café, et je préviens les consultants. Entre dix heures et midi, le téléphone sonne sans arrêt. Je gère les demandes d'information, je fixe de nouveaux rendez-vous, je transfère les appels urgents et je prends les messages. En parallèle, je traite les emails entrants et j'envoie les confirmations de rendez-vous. À midi, je profite d'une pause d'une heure. L'après-midi est consacrée principalement à l'administratif : préparation des contrats, classement des dossiers, suivi des paiements, et coordination avec le notaire. Vers dix-huit heures, je clôture la journée : je transmets les messages urgents aux consultants, je sauvegarde les documents importants, et je prépare l'agenda du lendemain. Une journée bien remplie, mais passionnante.",
      es: "Una jornada típica en la recepción de nuestra agencia empieza a las 9. La primera hora está dedicada a la preparación: verifico la agenda del día, imprimo los expedientes de las citas, y preparo la sala de reuniones. Hacia las 9:30, llegan los primeros clientes para sus citas. Les recibo, les ofrezco un café, y aviso a los consultores. Entre las 10 y mediodía, el teléfono suena sin parar. Gestiono las solicitudes de información, fijo nuevas citas, transfiero las llamadas urgentes y tomo mensajes. En paralelo, atiendo los emails entrantes y envío las confirmaciones de cita. A mediodía, disfruto de una pausa de una hora. La tarde está dedicada principalmente a lo administrativo: preparación de contratos, archivo de expedientes, seguimiento de pagos, y coordinación con el notario. Hacia las 18, cierro la jornada: transmito los mensajes urgentes a los consultores, guardo los documentos importantes, y preparo la agenda del día siguiente. Una jornada bien llena, pero apasionante.",
      vocab: [
        { fr: "Sans arrêt", es: "Sin parar" },
        { fr: "En parallèle", es: "En paralelo" },
        { fr: "Le suivi des paiements", es: "El seguimiento de los pagos" },
        { fr: "Je clôture la journée", es: "Cierro la jornada" }
      ],
      questions: []
    }
  ]
};

window.LISTENING_TOTAL = Object.values(window.LISTENING).reduce((a, arr) => a + arr.length, 0);
