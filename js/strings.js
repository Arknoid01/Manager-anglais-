/* ============================================================
   strings.js — Dictionnaire FR/EN pour les strings JS dynamiques
   Usage : S('clé') retourne la string dans la langue active
   La langue est définie par localStorage('fm_lang')
   ============================================================ */

(function(global){

const LANG = () => localStorage.getItem('fm_lang') || 'fr';

const STRINGS = {

  /* ── RACE.JS ── */
  'race.heavy_rain':   { fr:'⛈️ Forte pluie ! Safety Car déployée.', en:'⛈️ Heavy rain! Safety Car deployed.' },
  'race.rain_start':   { fr:'🌧️ La pluie commence à tomber !',       en:'🌧️ Rain is starting to fall!' },
  'race.track_dry':    { fr:'☀️ La piste sèche !',                   en:'☀️ The track is drying!' },
  'race.mech_issue':   { fr:'Problème mécanique',                    en:'Mechanical issue' },
  'race.planned_stop': { fr:'arrêt planifié selon la stratégie',     en:'planned stop per strategy' },
  'race.sc_opp':       { fr:'opportunité sous Safety Car : perte de temps réduite', en:'Safety Car opportunity: reduced time loss' },
  'race.weather_stop': { fr:'changement météo : pneu adapté aux conditions', en:'weather change: tyre adapted to conditions' },
  'race.crit_tyres':   { fr:'pneus critiques : arrêt de sécurité',   en:'critical tyres: safety stop' },
  'race.wall_order':   { fr:'consigne du muret : arrêt demandé',     en:'pit wall order: stop requested' },
  'race.strat_adj':    { fr:'ajustement stratégique',                en:'strategic adjustment' },
  'race.overtake':     { fr:' — dépassement exceptionnel !',         en:' — exceptional overtake!' },
  'race.sc_deployed':  { fr:'🟡 Safety Car déployée !',             en:'🟡 Safety Car deployed!' },
  'race.chequered':    { fr:'🏁 Drapeau à damiers !',               en:'🏁 Chequered flag!' },
  'race.tyre_saving':  { fr:'économie pneus',                       en:'tyre saving' },
  'race.chequered2':   { fr:'Drapeau à damiers sous les vivats du public !', en:'Chequered flag under the crowd\'s cheers!' },

  /* ── SAVE.JS ── */
  'save.sponsors_start': { fr:'Versement sponsors — Début de saison', en:'Sponsor payment — Season start' },
  'save.season_end':     { fr:'Le dernier Grand Prix est terminé. La revue annuelle est disponible avant de lancer la prochaine saison.', en:'The last Grand Prix is over. The annual review is available before launching the next season.' },

  /* ── WEATHER.JS ── */
  'weather.slightly_wet': { fr:'Légèrement humide',  en:'Slightly damp' },
  'weather.wet_track':    { fr:'Piste mouillée',      en:'Wet track' },
  'weather.soaked':       { fr:'Détrempée',           en:'Soaked' },

  /* ── WEEKEND.JS ── */
  'weekend.balanced':     { fr:'Équilibré',                          en:'Balanced' },
  'weekend.low_drag':     { fr:'Faible traînée',                     en:'Low drag' },
  'weekend.quali_setup':  { fr:'Setup optimisé pour un tour rapide', en:'Setup optimised for a fast lap' },
  'weekend.race_setup':   { fr:'Meilleure gestion pneus sur la durée',en:'Better tyre management over distance' },
  'weekend.run_test':     { fr:'Tour lancé → données temps par compound', en:'Flying lap → compound time data' },
  'weekend.race_sim':     { fr:'Simulation course → données dégradation', en:'Race sim → degradation data' },
  'weekend.fine_tuning':  { fr:'Réglages fins → améliore le setup',  en:'Fine tuning → improves setup' },
  'weekend.great_prep':   { fr:'Excellente préparation',             en:'Excellent preparation' },
  'weekend.good_prep':    { fr:'Bonne préparation',                  en:'Good preparation' },
  'weekend.limited_prep': { fr:'Préparation limitée',               en:'Limited preparation' },

  /* ── SPONSORS.JS ── */
  'spon.cloud':        { fr:'Leader mondial du cloud. Exige des résultats en piste et une visibilité maximale.', en:'Global cloud leader. Demands on-track results and maximum visibility.' },
  'spon.oil':          { fr:'Géant pétrolier. Partenariat technique avec carburant optimisé.', en:'Oil giant. Technical partnership with optimised fuel.' },
  'spon.it':           { fr:'Société IT en croissance. Idéal pour les équipes en progression.', en:'Growing IT company. Ideal for teams in progress.' },
  'spon.historic':     { fr:'Sponsor historique F1. Priorité à la visibilité TV et aux podiums.', en:'Historic F1 sponsor. Priority on TV visibility and podiums.' },
  'spon.lifestyle':    { fr:'Marque lifestyle agressive. Paye bien mais part si les résultats ne suivent pas.', en:'Aggressive lifestyle brand. Pays well but leaves if results don\'t follow.' },
  'spon.logistics':    { fr:'Logistique officielle F1. Réduit tes coûts opérationnels.', en:'Official F1 logistics. Reduces your operational costs.' },
  'spon.fuel':         { fr:'Carburant et lubrifiants. Améliore les performances moteur.', en:'Fuel and lubricants. Improves engine performance.' },
  'spon.tyredata':     { fr:'Données pneumatiques partagées. Améliore ta gestion des pneus.', en:'Shared tyre data. Improves your tyre management.' },
  'spon.digital':      { fr:'Visibilité digitale mondiale. Bonus tokens via analyse data.', en:'Global digital visibility. Bonus tokens via data analysis.' },
  'spon.sport':        { fr:'Équipementier sportif. Évolue avec ta popularité.', en:'Sports equipment brand. Grows with your popularity.' },
  'spon.bank':         { fr:'Banque internationale. Stabilité financière et loyauté.', en:'International bank. Financial stability and loyalty.' },
  'spon.energy':       { fr:'Groupe énergétique en expansion. Cherche une équipe en progression.', en:'Expanding energy group. Looking for a team in progress.' },
  'spon.betting':      { fr:'Plateforme de paris en ligne. Très généreux mais exigeant.', en:'Online betting platform. Very generous but demanding.' },
  'spon.crypto':       { fr:'Exchange crypto. Gros budget mais attend des résultats visibles.', en:'Crypto exchange. Big budget but expects visible results.' },
  'spon.motorsport':   { fr:'Équipementier motorsport. Partenaire de longue date.', en:'Motorsport equipment maker. Long-standing partner.' },
  'spon.cyber':        { fr:'Cybersécurité. Partenaire tech discret mais solide.', en:'Cybersecurity. Discreet but solid tech partner.' },
  'spon.watch':        { fr:'Horloger officiel F1. Accessible, fidèle et régulier.', en:'Official F1 watchmaker. Accessible, loyal and consistent.' },
  'spon.composite':    { fr:'Matériaux composites. Améliore la fiabilité des pièces.', en:'Composite materials. Improves part reliability.' },
  'spon.crm':          { fr:'CRM cloud. Investit dans les équipes qui progressent.', en:'Cloud CRM. Invests in teams that progress.' },
  'spon.gear':         { fr:'Équipements pilotes. Accessible à toutes les équipes.', en:'Driver equipment. Accessible to all teams.' },
  'spon.suits':        { fr:'Combinaisons et équipements motorsport. Partenaire entrée de gamme.', en:'Motorsport suits and equipment. Entry-level partner.' },
  'spon.food':         { fr:'Agroalimentaire. Sponsor accessible, fidèle et peu exigeant.', en:'Food & agri. Accessible, loyal, low-demand sponsor.' },
  'spon.telecom':      { fr:'Opérateur télécom. Visibilité digitale et croissance.', en:'Telecom operator. Digital visibility and growth.' },
  'spon.rental':       { fr:'Location de véhicules. Partenariat logistique stable.', en:'Vehicle rental. Stable logistics partnership.' },
  'spon.fantoken':     { fr:'Fan tokens et engagement communautaire. Très médiatique.', en:'Fan tokens and community engagement. Very high-profile.' },
  'spon.tyre':         { fr:'Manufacturier de pneus. Partenariat technique et loyauté garantie.', en:'Tyre manufacturer. Technical partnership and guaranteed loyalty.' },
  'spon.gaming':       { fr:'Gaming & PC. Popularité auprès des jeunes fans.', en:'Gaming & PC. Popular with young fans.' },
  'spon.brazil_bank':  { fr:'Banque nationale brésilienne. Forte visibilité à Interlagos.', en:'Brazilian national bank. Strong visibility at Interlagos.' },
  'spon.oil2':         { fr:'Huile moteur iconique. Améliore les performances moteur.', en:'Iconic motor oil. Improves engine performance.' },
  'spon.airline':      { fr:'Compagnie aérienne. Réduit les coûts de déplacement.', en:'Airline. Reduces travel costs.' },
  'spon.airline2':     { fr:'Compagnie aérienne premium. Sponsor historique du sport.', en:'Premium airline. Historic sport sponsor.' },
  'spon.creative':     { fr:'Logiciels créatifs. Boost la réputation médiatique.', en:'Creative software. Boosts media reputation.' },
  'spon.safety':       { fr:'Équipements de sécurité. Améliore la fiabilité.', en:'Safety equipment. Improves reliability.' },
  'spon.sport2':       { fr:'Équipementier sportif mondial. Partenaire accessible.', en:'Global sports equipment maker. Accessible partner.' },
  'spon.race_equip':   { fr:'Équipements de course. Partenaire technique discret.', en:'Racing equipment. Discreet technical partner.' },
  'spon.data_telecom': { fr:'Data et télécommunications. Bonus tokens analyse de performance.', en:'Data and telecoms. Performance analysis token bonus.' },
  'spon.cyber2':       { fr:'Cybersécurité grand public. Partenaire tech discret.', en:'Consumer cybersecurity. Discreet tech partner.' },
  'spon.beer':         { fr:'Bière thaïlandaise. Présence forte en Asie.', en:'Thai beer. Strong presence in Asia.' },
  'spon.champagne':    { fr:'Champagne officiel du podium. Bonus si podiums réguliers.', en:'Official podium champagne. Bonus if podiums are regular.' },
  'spon.video':        { fr:'Communications vidéo. Visibilité dans le paddock digital.', en:'Video communications. Visibility in the digital paddock.' },
  'spon.title_taken':  { fr:'Déjà un title sponsor actif !', en:'Already an active title sponsor!' },

  /* ── CAREER.JS ── */
  'career.fia_token':   { fr:'La FIA alloue un token R&D supplémentaire aux équipes en difficulté.', en:'The FIA allocates an extra R&D token to struggling teams.' },
  'career.retired':     { fr:'Pilote retraité',             en:'Retired driver' },
  'career.team_nf':     { fr:'Équipe joueur introuvable',   en:'Player team not found' },
  'career.transfer':    { fr:'Transfert signé',             en:'Transfer signed' },
  'career.extension':   { fr:'Prolongation signée',        en:'Extension signed' },
  'career.contract':    { fr:'Contrat signé',               en:'Contract signed' },
  'career.released':    { fr:'Pilote libéré',               en:'Driver released' },
  'career.replace':     { fr:'Choisis le pilote de ton équipe à remplacer.', en:'Choose the driver from your team to replace.' },
  'career.not_found':   { fr:'Le pilote à remplacer est introuvable dans ton équipe.', en:'The driver to replace was not found in your team.' },
  'career.already_in':  { fr:'Ce pilote est déjà dans ton équipe.', en:'This driver is already in your team.' },
  'career.legendary':   { fr:'Légendaire',   en:'Legendary' },
  'career.limited':     { fr:'Limité',       en:'Limited' },
  'career.experienced': { fr:'Expérimenté', en:'Experienced' },
  'career.decline':     { fr:'Déclin',       en:'Declining' },
  'career.veteran':     { fr:'Vétéran',      en:'Veteran' },
  'career.elite':       { fr:'Élite',        en:'Elite' },
  'career.confirmed':   { fr:'Confirmé',     en:'Confirmed' },
  'career.staff_poached':{ fr:'Staff débauché', en:'Staff poached' },
  'career.aero_chief':  { fr:'Chef Aérodynamicien',    en:'Chief Aerodynamicist' },
  'career.susp_spec':   { fr:'Spécialiste Suspensions', en:'Suspension Specialist' },
  'career.setup_eng':   { fr:'Ingénieur Setup',         en:'Setup Engineer' },
  'career.vehicle_dyn': { fr:'Dynamicien Véhicule',     en:'Vehicle Dynamicist' },
  'career.ers_spec':    { fr:'Spécialiste ERS',          en:'ERS Specialist' },
  'career.data_analyst':{ fr:'Analyste Données',         en:'Data Analyst' },
  'career.quality_mgr': { fr:'Responsable Qualité',      en:'Quality Manager' },

  /* ── EVENTS.JS ── */
  'ev.injury_light':   { fr:'Blessure légère',           en:'Minor injury' },
  'ev.aero_pkg':       { fr:'Package aérodynamique validé', en:'Aerodynamic package validated' },
  'ev.aero_desc':      { fr:'La FIA valide votre nouveau package aéro. Petit gain de performance immédiat.', en:'The FIA validates your new aero package. Small immediate performance gain.' },
  'ev.hydraulic':      { fr:'Fuite hydraulique détectée', en:'Hydraulic leak detected' },
  'ev.hydraulic_desc': { fr:'Les mécaniciens ont repéré un problème sur la voiture de pole. Fiabilité temporairement en baisse.', en:'Mechanics spotted an issue on the pole car. Reliability temporarily reduced.' },
  'ev.windtunnel':     { fr:'Soufflerie validée',         en:'Wind tunnel validated' },
  'ev.windtunnel_desc':{ fr:'Vos données de soufflerie se confirment en piste. La corrélation est excellente ce week-end.', en:'Your wind tunnel data is confirmed on track. Correlation is excellent this weekend.' },
  'ev.gearbox':        { fr:'Problème de boîte de vitesses', en:'Gearbox issue' },
  'ev.grid_pen':       { fr:'Pénalité grille',            en:'Grid penalty' },
  'ev.fia_check':      { fr:'Contrôle technique renforcé', en:'Strengthened technical inspection' },
  'ev.fia_check_desc': { fr:'La FIA contrôle plusieurs pièces de votre voiture. Vos ingénieurs perdent du temps de développement.', en:'The FIA checks several parts of your car. Your engineers lose development time.' },
  'ev.new_sponsor':    { fr:'Nouveau sponsor intéressé',  en:'New sponsor interested' },
  'ev.rival_engine':   { fr:'Mise à jour moteur concurrente', en:'Rival engine update' },
  'ev.rival_engine_desc':{ fr:'Une équipe rivale a apporté une grosse évolution moteur ce week-end. Attention !', en:'A rival team brought a major engine upgrade this weekend. Watch out!' },
  'ev.board_meeting':  { fr:'Réunion de direction',       en:'Board meeting' },
  'ev.board_desc':     { fr:'La direction est préoccupée par les résultats. Elle attend une amélioration immédiate.', en:'The board is concerned about results. They expect immediate improvement.' },
  'ev.factory_inspired':{ fr:'Usine inspirée par le résultat', en:'Factory inspired by the result' },
  'ev.factory_desc':   { fr:'Les ingénieurs ont trouvé une piste de développement suite à la course. +1 token R&D.', en:'Engineers found a development lead after the race. +1 R&D token.' },
  'ev.costly_accident':{ fr:'Accident coûteux au garage', en:'Costly garage accident' },
  'ev.costly_desc':    { fr:'Une casse logistique lors du transport coûte 6M€ en réparations.', en:'A logistics breakdown during transport costs 6M€ in repairs.' },
  'ev.pit_progress':   { fr:'Progrès en pit stop',        en:'Pit stop progress' },
  'ev.pit_desc':       { fr:"L'analyse vidéo des arrêts au stand porte ses fruits. Le département pit stop progresse.", en:'Video analysis of pit stops is paying off. The pit stop department is improving.' },
  'ev.interview':      { fr:'Interview remarquée',        en:'Noticed interview' },
  'ev.aero_analysis':  { fr:'Analyse aéro post-course',  en:'Post-race aero analysis' },
  'ev.aero_analysis_desc':{ fr:'Les données de course permettent une corrélation exceptionnelle avec la soufflerie.', en:'Race data enables exceptional correlation with the wind tunnel.' },
  'ev.paddock_party':  { fr:'Fête au paddock !',          en:'Paddock party!' },
  'ev.budget_audit':   { fr:'La FIA annonce un audit du budget cap. Vos finances seront scrutées en fin de saison.', en:'The FIA announces a budget cap audit. Your finances will be scrutinised at season end.' },
  'ev.contact':        { fr:'Contact avec une équipe adverse', en:'Contact with a rival team' },
  'ev.contact_desc':   { fr:'Un incident en piste est sous investigation. Résultat à confirmer.', en:'An on-track incident is under investigation. Result to be confirmed.' },

  /* ── IMMERSION.JS ── */
  'imm.partners':      { fr:'Les partenaires attendent des résultats réguliers.', en:'Partners expect consistent results.' },
  'imm.team_label':    { fr:'Équipe',                     en:'Team' },
  'imm.team_form':     { fr:'Équipe en forme',            en:'Team on form' },
  'imm.aggr_strat':    { fr:'Stratégie agressive',        en:'Aggressive strategy' },
  'imm.garage_belief': { fr:'Le garage croit au projet après ce résultat.', en:'The garage believes in the project after this result.' },
  'imm.staff_analyze': { fr:'Le staff veut comprendre où le week-end a été perdu.', en:'The staff want to understand where the weekend was lost.' },
  'imm.sponsors_happy':{ fr:'Les sponsors sont très satisfaits de la visibilité.', en:'Sponsors are very satisfied with the visibility.' },
  'imm.sponsors_ok':   { fr:'Les sponsors valident le résultat, sans euphorie.', en:'Sponsors validate the result, without euphoria.' },
  'imm.sponsors_wait': { fr:'Les sponsors attendent une réaction au prochain GP.', en:'Sponsors are waiting for a reaction at the next GP.' },
  'imm.driver_podium': { fr:'Très motivé après le podium.',  en:'Very motivated after the podium.' },
  'imm.driver_conf':   { fr:'Confiant, le rythme était là.',  en:'Confident, the pace was there.' },
  'imm.driver_points': { fr:"Satisfait d'avoir marqué des points.", en:'Satisfied to have scored points.' },
  'imm.paddock_react': { fr:'Réaction paddock',           en:'Paddock reaction' },
  'imm.analyze_wknd':  { fr:'Week-end à analyser',        en:'Weekend to analyse' },
  'imm.neutralized':   { fr:'Course neutralisée',         en:'Neutralised race' },
  'imm.weather_watch': { fr:'Météo sous surveillance',    en:'Weather being monitored' },
  'imm.rep_up':        { fr:'Réputation en hausse',       en:'Rising reputation' },
  'imm.podium_confirm':{ fr:"Un podium qui confirme le potentiel de l'équipe.", en:"A podium that confirms the team's potential." },
  'imm.fast_wet':      { fr:'Très rapide sous pluie',     en:'Very fast in wet' },
  'imm.regular':       { fr:'Régulier',                   en:'Consistent' },
  'imm.inexperienced': { fr:'Inexpérimenté en F1',        en:'Inexperienced in F1' },
  'imm.hothead':       { fr:'Parfois tête brûlée',        en:'Sometimes hot-headed' },
  'imm.f2_step':       { fr:'Franchit un cap décisif en F2.', en:'Taking a decisive step in F2.' },
  'imm.consistency':   { fr:'Sa régularité impressionne les recruteurs.', en:'His consistency impresses recruiters.' },
  'imm.acad_prog':     { fr:'Académie — Progression',    en:'Academy — Progression' },
  'imm.external_int':  { fr:'Intérêt extérieur — paddock', en:'External interest — paddock' },
  'imm.already_driver':{ fr:'Ce pilote est déjà titulaire.', en:'This driver is already a race driver.' },
  'imm.already_promo': { fr:'Déjà promu.',                en:'Already promoted.' },
  'imm.data_unavail':  { fr:'Données pilotes indisponibles.', en:'Driver data unavailable.' },
  'imm.acad_leave':    { fr:'Académie — départ',          en:'Academy — departure' },
  'imm.acad_new':      { fr:'Académie — nouveau talent',  en:'Academy — new talent' },
  'imm.eval_f3':       { fr:'À évaluer en F3',            en:'To be assessed in F3' },
  'imm.raw_potential': { fr:'Potentiel brut intéressant', en:'Interesting raw potential' },
  'imm.wet_feeling':   { fr:'Très bon feeling sous pluie', en:'Very good wet weather feel' },
  'imm.breakthrough':  { fr:'Percée !',                   en:'Breakthrough!' },
  'imm.slump':         { fr:'Passage à vide',             en:'Slump' },
  'imm.media':         { fr:'Médias',                     en:'Media' },

  /* ── DATA.JS — traits pilotes ── */
  'trait.regular':     { fr:'Régulier',       en:'Consistent' },
  'trait.rain_master': { fr:'Maître pluie',   en:'Rain Master' },
  'trait.defender':    { fr:'Défenseur',      en:'Defender' },
  'trait.overtaker':   { fr:'Dépasseur',      en:'Overtaker' },

  /* ── DATA.JS — R&D upgrades ── */
  'rd.flat_rework':    { fr:'Fond plat optimisé',          en:'Optimised floor' },
  'rd.flat_desc':      { fr:'Refonte du fond plat pour réduire la traînée.', en:'Floor redesign to reduce drag.' },
  'rd.front_wing':     { fr:'Aileron avant à 5 volets, meilleure charge en virage.', en:'5-element front wing, better cornering load.' },
  'rd.radical_aero':   { fr:'Concept aéro radical',        en:'Radical aero concept' },
  'rd.full_rework':    { fr:'Refonte complète du concept aérodynamique.', en:'Complete aerodynamic concept overhaul.' },
  'rd.reg2026_aero':   { fr:'Nouveau concept pour le règlement 2026.', en:'New concept for 2026 regulations.' },
  'rd.susp_revised':   { fr:'Suspension révisée',           en:'Revised suspension' },
  'rd.susp_desc':      { fr:'Géométrie de suspension améliorée, meilleur transfert.', en:'Improved suspension geometry, better transfer.' },
  'rd.lighter_mono':   { fr:'Monocoque allégée',            en:'Lightened monocoque' },
  'rd.platform':       { fr:'Plateforme renforcée',         en:'Reinforced platform' },
  'rd.full_chassis':   { fr:'Refonte complète de la plateforme châssis.', en:'Complete chassis platform overhaul.' },
  'rd.chassis2026':    { fr:'Châssis 2026',                 en:'2026 Chassis' },
  'rd.chassis2026_desc':{ fr:'Architecture châssis conçue pour le nouveau règlement.', en:'Chassis architecture designed for the new regulations.' },
  'rd.engine_map':     { fr:'Mapping moteur optimisé',      en:'Optimised engine mapping' },
  'rd.ers_improved':   { fr:'ERS amélioré',                 en:'Improved ERS' },
  'rd.ers_desc':       { fr:'Nouvelle batterie ERS, déploiement plus efficace.', en:'New ERS battery, more efficient deployment.' },
  'rd.engine_v3':      { fr:'Unité de puissance V3',        en:'Power unit V3' },
  'rd.engine_v3_desc': { fr:'Troisième spec moteur de la saison.', en:'Third engine spec of the season.' },
  'rd.engine2026':     { fr:'Nouveau groupe propulseur pour le règlement 2026.', en:'New power unit for 2026 regulations.' },
  'rd.cooling':        { fr:'Refroidissement amélioré',     en:'Improved cooling' },
  'rd.hydraulic':      { fr:'Hydraulique renforcé',         en:'Reinforced hydraulics' },
  'rd.hydraulic_desc': { fr:'Circuit hydraulique revu, réduction des fuites.', en:'Revised hydraulic circuit, leak reduction.' },
  'rd.control_v3':     { fr:'Système de contrôle v3',       en:'Control system v3' },
  'rd.control_desc':   { fr:'Nouveau software de monitoring pièces critiques.', en:'New critical parts monitoring software.' },
  'rd.rel2026':        { fr:'Fiabilité 2026',               en:'2026 Reliability' },
  'rd.rel2026_desc':   { fr:'Conception durable pour le nouveau règlement.', en:'Durable design for the new regulations.' },
  'rd.pit_proc':       { fr:'Procédures optimisées',        en:'Optimised procedures' },
  'rd.pit_full':       { fr:'Révision complète des procédures stands.', en:'Complete pit procedures overhaul.' },
  'rd.pit_stop_desc':  { fr:"arrêts pour améliorer la précision.", en:'stops to improve precision.' },
  'rd.pit_rework':     { fr:'Refonte complète du processus pit stop.', en:'Complete pit stop process overhaul.' },

};

/* ── Fonction principale ── */
global.S = function(key) {
  const entry = STRINGS[key];
  if (!entry) {
    console.warn('[i18n] Missing key:', key);
    return key;
  }
  const lang = LANG();
  return entry[lang] || entry['fr'] || key;
};

/* Expose le dict complet si besoin */
global.STRINGS = STRINGS;

})(typeof window !== 'undefined' ? window : global);
