export class User {
    id = 0;
    nom = '';
    prenom = '';
    email = '';
    password = '';
    adresse = '';
    tel = '';
    fix = '';
    username = '';
    actif = false;
    idOrganisme = 0;
    idProfil = 0;
    organisme = new Organisme();
    profil = new Profil();
    traites: Traite[] = [];
    syhthese: Synthese[] = [];
  }
  
  export class Organisme {
    id = 0;
    label = '';
    labelAr = '';
    abr = '';
    abrAr = '';
    adresse = '';
    tel = '';
    type = '';
    users: User[] = [];
  }
  
  export class Examen {
    id = 0;
    libelle = '';
    libelleAr = '';
    rapportNational = '';
    compilationHCDH = '';
    observationFinale = '';
    rapportMiParcours = '';
    discours = '';
    rapportINDH = '';
    miseOeuvrePiece = '';
  }
  
  export class Notification {
    id = 0;
    idConcerner = 0;
    idOrganisme = 0;
    tableConcerner = '';
    message = '';
    destinataire = '';
    date = new Date();
    vu = false;
    priorite = 1;
  }
  
  export class Traite {
    id = 0;
    nom = '';
    nomAr = '';
    dateSignature = new Date();
    dateRatification = new Date();
    idUser = 0;
    conventionPiece = '';
    miseOeuvrePiece = '';
    observationPiece = '';
    analytiquePiece = '';
    discours = '';
    rapportParallelePiece = '';
    rapportINDH = '';
    avisPosition = '';
    rapports: Rapport[] = [];
    user = new User();
  }
  
  export class FicheSynthese {
    id = 0;
    ficheUrl = '';
    idOrganisme = 0;
    idSynthese = 0;
    idUser = 0;
    organisme = new Organisme();
    synthese = new Synthese();
  }
  
  export class Rapport {
    id = 0;
    titre = '';
    reference = '';
    dateDernierRapport = new Date();
    dateObservation = new Date();
    dateProchaineRapport = new Date();
    pieceJointe = '';
    idTraite = 0;
    traite = new Traite();
    syntheses: Synthese[] = [];
  }
  
  
  export class Synthese {
    id = 0;
    code = '';
    detail = '';
    detailAr = '';
    lienUpload = '';
    idRapport = null;
    idUser = 0;
    user = new User();
    rapport = new Rapport();
    syntheseRecommandations: SyntheseRecommandation[] = [];
  }
  
  export class Visite {
    id = 0;
    // objet = '';
    mandat = '';
    mandatAr = '';
    discours = '';
    abr = '';
    abrAr = '';
    date = new Date();
    lienRapport = '';
    lienUpload = '';
    miseOeuvrePiece = '';
    commentaire = '';
  }
  
  export class Evenement {
    id = 0;
    title = '';
    titleAr = '';
    description = '';
    descriptionAr = '';
    categorie = '';
  
    date = new Date();
  }
  
  export class Profil {
    id = 0;
    label = '';
    labelAr = '';
  }
  
  export class RecomOrg {
    idRecommendation = 0;
    idOrganisme = 0;
    date = new Date();
    organisme = new Organisme();
    recommendation = new Recommendation();
  }
  
  export class SyntheseRecommandation {
    idRecommandation = 0;
    idSynthese = 0;
    synthese = new Synthese();
    recommendation = new Recommendation();
  }
  
  export class Recommendation {
    id = 0;
    codeRecommendation = '';
    codeRecommendationAr = '';
    nom = '';
    nomAr = '';
    etat = '';
    complement = '';
    etatAvancement = '';
    observation = '';
    mecanisme = '';
    anneeDisplay = '';
    anneeDisplayAr = '';
  
    idCycle = 0;
    axes = '';
    sousAxes = '';
  
    pieceJointe = '';
    etatAvancementChiffre = 0;
    idOrgane = null;
    idVisite = null;
    idPays = null;
    annee = null;
    recomOrgs: RecomOrg[] = [];
    organe = new Organe();
    visite = new Visite();
    // axe = new Axe();
    // sousAxe = new SousAxe();
    cycle = new Cycle();
    pays = new Pays();
    syntheseRecommandations: SyntheseRecommandation[] = [];
  }
  
  export class Questionnaire {
    id = 0;
    idAxe = 0;
    axe = new Axe();
    idSousAxe = 0;
    sousAxe = new SousAxe();
    theme = 0;
    themeDis = '';
    sousThemeDis = '';
    sousTheme = 0;
    reporter = '';
    reporterAr = '';
    pieceJointe = '';
    annee = new Date().getFullYear();
  }
  
  export class ParticipationSession {
    id = 0;
    session = '';
    sessionAr = '';
    discours = '';
    documents = '';
    annee = new Date().getFullYear();
  }
  
  export class Cycle {
    id = 0;
    label = '';
    labelAr = '';
  }
  
  export class Axe {
    id = 0;
    label = '';
    labelAr = '';
    abv = '';
    abvAr = '';
  
    sousAxes: SousAxe[] = [];
  }
  
  export class Organe {
    id = 0;
    label = '';
    labelAr = '';
    abv = '';
    abvAr = '';
    recommandations: Recommendation[] = [];
  }
  
  export class SousAxe {
    id = 0;
    label = '';
    labelAr = '';
    idAxe = 0;
    axe = new Axe();
  }
  
  export class SituationReserve {
    id = 0;
    url = '';
  }
  
  export class Pays {
    id = 0;
    nom = '';
    nomAr = '';
  }
  