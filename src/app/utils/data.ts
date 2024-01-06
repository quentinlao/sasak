export const data = {
  header: {
    headerLeft: {
      title: "Je suis",
      subtitle: "Bienvenue",
      description: `Après avoir choisi de me spécialiser dans le développement logiciel, en mettant l'accent sur la technique et
      l'architecture, j'ai acquis une expertise qui me permet aujourd'hui de travailler dans un large éventail de
      projets`,
      slogans: [
        "Un développeur frontend React/TS",
        "Un développeur backend Java",
        "Un développeur mobile Flutter",
        "Un CTO en devenir",
      ],
      cta: "Me recruter",
    },
    headerImage: {
      src: "/img/quentinlao-hero.jpeg",
    },
    headerDescription: [
      { title: `${new Date().getFullYear() - 2018}+`, description: "Années d'expérience" },
      { title: "100%", description: "A l'écoute du business" },
      { title: "8+", description: "Projets d'entreprises" },
    ],
    logos: [
      { id: "gmf", url: "/img/gmf.svg" },
      { id: "ivalua", url: "/img/ivalua.svg" },
      { id: "interieur", url: "/img/interieur.svg" },
      { id: "sante", url: "/img/sante.svg" },
      { id: "upec", url: "/img/upec.svg" },
      { id: "sopra", url: "/img/sopra.svg" },
      { id: "thales", url: "/img/thales.svg" },
      { id: "canal", url: "/img/canal.svg" },
    ],
  },
  services: {
    title: "Principaux services",
    subtitle: "A propos de moi",
    description: "Je m’adapte aux exigences spécifiques de chaque projet. Et voici parmi mes compétences clés.",
    cards: [
      {
        title: "Integration",
        description: "Je crée des interfaces utilisateur efficaces pour votre site web ou votre application.",
        skills: ["#Figma", "#Photoshop"],
        image: "/img/figma.svg",
        bgColor: "#FFF4E8",
        color: "#F27405",
      },
      {
        title: "Mobile",
        description: "Je transforme vos idées en applications fonctionnelles et efficaces sur Android / iOS.",
        skills: ["#Flutter", "#Dart JS", "#Java", "#Android"],
        image: "/img/flutter.svg",
        bgColor: "#EEFFEF",
        color: "#1D8D22",
      },
      {
        title: "Web",
        description:
          "Je réalise des sites web professionnels et personnalisés pour répondre à vos besoins spécifiques.",
        skills: ["#React", "#Next JS", "#Typescript"],
        image: "/img/react.svg",
        bgColor: "#FFF4E8",
        color: "#F27405",
      },
    ],
  },
  experiences: {
    title: "Professionnelles",
    subtitle: "experiences",
    enterprise: [
      {
        year: "sept. 2022 - aujourd’hui",
        title: "Développeur web front-end myCANAL",
        subtitle: "CANAL+ Group",
        description: `Contribution des features de la webApp unifié myCANAL sur web, mobile navigateur, TV natif et
        Fournisseur d’Accès Internet.Evolution des features sous forte contrainte d’utilisateurs avec plus de
        25,5 millions d'abonnés et de performance avec les pics d’audiences lors des directs F1, MotoGP,
        Champions League...Développement du nouveau parcours utilisateurs de la partie Transactional Video On
        Demand de la plateforme myCANAL et de la marque blanche TelecomItalia TIM afin de permettre une mise en
        avant business.Travail en coopération avec le studio design CANAL+ sur figma pour la création et
        intégration du Design System de CANAL+. Conception en étroite collaboration (Code review, peer prog,
        mob, live review) pour une bonne qualité de produit et une continuité de livable des nouvelles features
        sous méthodologie scrumban.`,
        techs: ["React", "Typescript", "Redux", "TanStack", "Playwright / RTL / Jest", "Gitlab"],
      },
      {
        year: "dec. 2020 - sept. 2022",
        title: "Ingénieur développement logiciel II",
        subtitle: "Thales, LAS France SAS",
        description: `Réalisation d'une application web from scratch pour la simulation d’un espace aérien et la surveillance
        d’une zone cartographique. Développement d’une solution avec COTS technique, de problématique
        d'industrialisation long terme et performance. Conception de tests Jest (unitaires), Cypress
        (fonctionnels) dans un environnement d’intégration continu (Sonar 80% de couvertures de code avec+1500
        tests sur tout le projet). Contribution à la fiabilité et la maintenance du code (Code review) et
        documentation des spécifications technico-fonctionnels. Travail en méthodologie SCRUM agile sous Jira
        avec livrable régulier et prise en compte des remarques clients/PO.`,
        techs: ["React", "Typescript", "Flux", "Java", "Cypress / Jest", "Sonar", "Bitbucket"],
      },
      {
        year: "janv. 2020 - nov. 2020",
        title: "Développeur fullstack",
        subtitle: "Sopra Steria Group",
        subtitleBis: "Ministère de l’intérieur",
        description: `Responsabilités sur 2 projets d'applications web d’un Dépôt d’Armes et d’un Gestionnaire de
        Propriétaires d’Armes. Gestion de la Tierce Maintenance Applicative en agilité permettant le
        décommissionnement et derniers lots d’évolutions MEP (Java, Oracle, mRemoteNG) du gestionnaire de
        propriétaires d’armes. Réalisation des features de l’application web des dépôt d’armes afin d'améliorer
        la gestion opérateur et mise en place d'accès aux données sécurisées (React, Redux, Symfony 3).
        Documentation des spécifications fonctionnelles détaillées pour le PO et automatisation des tests à
        travers HPQC`,
        techs: ["React", "Symfony 3", "Redux", "Sonar", "Oracle 11g", "Java"],
      },
      {
        year: "nov. 2018 - janv. 2020",
        title: "Ingénieur d’études et de développement",
        subtitle: "Sopra Steria Group",
        subtitleBis: "Agence Du Numérique En Santé",
        description: `-Développement d’une migration technique Liferay 7 (Java) pour l'application web
        https://annuaire.sante.fr/ Prise en compte MCO chez le client dans le domaine de la santé publique en
        cycle V constitués d’équipes Madrid/Paris pour les professionnels de santés (personnes
        physiques/morales). Participation aux ateliers techniques avec les architectes internes et prestataires
        afin de concevoir un webservice d'interrogation synchrone (SpringBoot) permettant aux services de santé
        de récupérer des données de personnes actives API Rest +40k données au format d’une norme médical FHIR
        permettant à tous les acteurs médicaux ARS de travailler sur ce WS.`,
        techs: ["Java", "SpringBoot", "J2EE", "Oracle", "Sonar", "Mantis", "Liferay 7"],
      },
    ],
    cta: { onClick: "https://www.linkedin.com/in/quentinlao/", label: "Voir mes expériences complètes" },
  },
  projects: {},
  hobbies: {
    title: "Mes hobbies",
    subtitle: "A propos de moi",
    description:
      "Je suis un passionné de nouvelles technologies et de développement web. Je fais des photos et découvre de nouveaux endroits. Je suis également un grand fan de mangas et de jeux vidéo.",
    backgroundImages: [
      "/img/quentinlao-hero.jpeg",
      "/img/quentinlao-hero.jpeg",
      "/img/quentinlao-hero.jpeg",
      "/img/quentinlao-hero.jpeg",
      "/img/quentinlao-hero.jpeg",
      "/img/quentinlao-hero.jpeg",
    ],
    socials: [
      { id: "linkedin", url: "https://www.linkedin.com/in/quentinlao/" },
      { id: "github", url: "" },
      { id: "instagram", url: "https://www.instagram.com/_sasak/", label: "_sasak" },
    ],
  },
};
