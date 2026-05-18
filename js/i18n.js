/* ============================================================
   i18n.js — Badge langue FR/EN + traduction UI
   Dépend de strings.js (chargé avant)
   ============================================================ */
(function(){

  var LANG = localStorage.getItem('fm_lang') || 'fr';

  /* ── Dictionnaire UI (éléments HTML statiques) ── */
  var UI = {
    'nav.home':           { fr:'← Home',          en:'← Home' },
    'nav.back':           { fr:'← Back',            en:'← Back' },

    'nav.continue':       { fr:'Continuer quand même', en:'Continue anyway' },
    'nav.close':          { fr:'Fermer',              en:'Close' },
    'top.budget':         { fr:'Budget',              en:'Budget' },
    'top.manager':        { fr:'Manager',             en:'Manager' },
    'index.rotate':       { fr:'TOURNE TON TÉLÉPHONE', en:'ROTATE YOUR PHONE' },
    'index.rotate_sub':   { fr:'Expérience optimisée en paysage', en:'Best experienced in landscape mode' },
    'index.choose_sub':   { fr:"Sélectionne l'team que tu vas diriger", en:'Select the team you will manage' },
    'index.qg_title':     { fr:'🏢 QUARTIER GÉNÉRAL', en:'🏢 HEADQUARTERS' },
    'index.buildings':    { fr:'Buildings',           en:'Buildings' },
    'index.infrastructure':{ fr:'Infrastructure',      en:'Infrastructure' },
    'race.loading':       { fr:'Chargement de la course…', en:'Loading race…' },
    'race.ready':         { fr:'Prêt',                en:'Ready' },
    'race.waiting':       { fr:'En attente',          en:'Waiting' },
    'race.podium':        { fr:'Podium',              en:'Podium' },
    'race.sc':            { fr:'Safety Car',          en:'Safety Car' },
    'race.season_calc':   { fr:'Calcul de la saison…', en:'Calculating season…' },
    'race.strategies_all':{ fr:'Stratégies de course', en:'Race strategies' },
    'quali.quali_icon':   { fr:'🏁 Qualifications',   en:'🏁 Qualifying' },
    'misc.race_icon':     { fr:'🏁 Course',           en:'🏁 Race' },
    'misc.car_rd':        { fr:'🔧 Voiture & R&D',    en:'🔧 Car & R&D' },
    'misc.strategy':      { fr:'Stratégie',           en:'Strategy' },
    'misc.pit':           { fr:'Stand',               en:'Pit' },
    'rd.aero_icon':       { fr:'🌊 Aéro',             en:'🌊 Aero' },
    'rd.chassis_icon':    { fr:'🏗️ Chassis',          en:'🏗️ Chassis' },
    'rd.engine_icon':     { fr:'⚡ Engine',            en:'⚡ Engine' },
    'rd.reliability_icon':{ fr:'🔩 Reliability',        en:'🔩 Reliability' },
    'rd.upgrades_delivery':{ fr:'Livraison des évolutions', en:'Upgrade delivery' },
    'drivers.driver':     { fr:'Driver',              en:'Driver' },
    'drivers.recruit':    { fr:'Recruter',            en:'Recruit' },
    'drivers.consistency':{ fr:'Consistency',          en:'Consistency' },
    'drivers.overtaking': { fr:'Dépassement',         en:'Overtaking' },
    'drivers.defending':  { fr:'Defending',             en:'Defending' },
    'drivers.wet':        { fr:'Wet',               en:'Wet weather' },
    'drivers.potential':  { fr:'Potentiel',           en:'Potential' },
    'drivers.confidence': { fr:'Confidence',           en:'Confidence' },
    'drivers.loyalty':    { fr:'Loyalty',             en:'Loyalty' },
    'staff.title':        { fr:'Staff',               en:'Staff' },
    'training.title_icon':{ fr:'🏋️ Entraînement',    en:'🏋️ Training' },
    'training.academy_icon':{ fr:'🌱 Academy',       en:'🌱 Academy' },
    'board.title':        { fr:'🏢 Direction',        en:'🏢 Board' },
    'sponsors.title':     { fr:'🤝 Sponsors',         en:'🤝 Sponsors' },
    'sponsors.reputation':{ fr:'Réputation',          en:'Reputation' },
    'standings.title':    { fr:'📊 Classements',      en:'📊 Standings' },
    'standings.history':  { fr:'Historique',          en:'History' },
    'standings.records':  { fr:'Records',             en:'Records' },
    'season.results':     { fr:'Résultats de saison', en:'Season results' },
    'social.title':       { fr:'Social',              en:'Social' },
    'social.immersion':   { fr:'Immersion',           en:'Immersion' },
    'social.system':      { fr:'Système',             en:'System' },
    'news.title':         { fr:'Actualités',          en:'News' },
    'news.paddock':       { fr:'Paddock',             en:'Paddock' },
    'journal.history_icon':{ fr:'📓 Historique',      en:'📓 History' },
    'aide.loop_title':    { fr:'Boucle de gameplay',  en:'Gameplay loop' },
    'race.start':         { fr:'▶ Démarrer',          en:'▶ Start' },
    'race.slow':          { fr:'🐢 Lent',             en:'🐢 Slow' },
    'race.pause':         { fr:'⏸ Pause',             en:'⏸ Pause' },
    'race.end':           { fr:'⏩ Fin de course',     en:'⏩ End Race' },
    'race.standings':     { fr:'Classement',          en:'Standings' },
    'race.last':          { fr:'Dernier',             en:'Last' },
    'race.tyre':          { fr:'Pneu/Gap',            en:'Tyre/Gap' },
    'race.radio':         { fr:'Radio & Événements',  en:'Radio & Events' },
    'race.orders':        { fr:'🎧 Ordres',           en:'🎧 Orders' },
    'race.rhythm':        { fr:'⏱ Rythme',            en:'⏱ Pace' },
    'race.gaps':          { fr:'📊 Gaps',             en:'📊 Gaps' },
    'race.strategy':      { fr:'🗺 Stratégie',        en:'🗺 Strategy' },
    'race.tyre_life':     { fr:'🛞 Length estimée des pneus', en:'🛞 Estimated tyre life' },
    'race.weather':       { fr:'🌦️ Météo & Piste',   en:'🌦️ Weather & Track' },
    'race.see_podium':    { fr:'Voir le podium',      en:'View podium' },
    'race.actions':       { fr:'⚙️ Actions disponibles', en:'⚙️ Available actions' },
    'race.dry':           { fr:'☀️ SEC',              en:'☀️ DRY' },
    'weekend.friday':     { fr:'Vendredi',            en:'Friday' },
    'weekend.saturday':   { fr:'Samedi',              en:'Saturday' },
    'weekend.sunday':     { fr:'Dimanche',            en:'Sunday' },
    'weekend.quali':      { fr:'Qualifications',      en:'Qualifying' },
    'weekend.race':       { fr:'Course',              en:'Race' },
    'weekend.gp':         { fr:'Grand Prix',          en:'Grand Prix' },
    'weekend.fp':         { fr:'Essais Libres',       en:'Free Practice' },
    'drivers.title':      { fr:'Drivers',             en:'Drivers' },

    'drivers.center_contracts': { fr:'Driver centre & contracts', en:'Driver centre & contracts' },
    'drivers.contract_intro': { fr:"Each offer takes salary, role, length, team reputation, constructor ranking and driver personality into account. A refusal makes the driver harder to convince until next season.", en:"Each offer takes salary, role, length, team reputation, constructor ranking and driver personality into account. A refusal makes the driver harder to convince until next season." },
    'drivers.my_contracts': { fr:'My drivers — contracts & management', en:'My drivers — contracts & management' },
    'drivers.market': { fr:'Driver market', en:'Driver market' },
    'drivers.search': { fr:'Search…', en:'Search…' },
    'drivers.young': { fr:'Young ≤24', en:'Young ≤24' },
    'drivers.top_score': { fr:'Top score ≥85', en:'Top score ≥85' },
    'drivers.end_season_title': { fr:'End of season', en:'End of season' },
    'drivers.filter':     { fr:'Filtrer :',           en:'Filter:' },
    'drivers.all':        { fr:'Tous',                en:'All' },
    'drivers.free_agents':{ fr:'Free agents',       en:'Free agents' },
    'drivers.pace':       { fr:'Pace',                en:'Pace' },
    'drivers.morale':     { fr:'Moral',               en:'Morale' },
    'drivers.contracts':  { fr:'Contrats',            en:'Contracts' },
    'staff.salary':       { fr:'💰 Masse salariale',  en:'💰 Salary bill' },
    'staff.elite':        { fr:'⭐ Élite',            en:'⭐ Elite' },
    'rd.alloc':           { fr:'R&D resource allocation', en:'R&D resource allocation' },
    'rd.aero':            { fr:'🌊 Aéro',             en:'🌊 Aero' },
    'rd.chassis':         { fr:'🏗️ Chassis',          en:'🏗️ Chassis' },
    'rd.engine':          { fr:'⚡ Engine',            en:'⚡ Engine' },
    'rd.reliability':     { fr:'🔩 Reliability',        en:'🔩 Reliability' },
    'rd.tokens':          { fr:'Tokens R&D',          en:'R&D Tokens' },
    'standings.drivers':  { fr:'Classement drivers',  en:'Driver standings' },
    'standings.teams':    { fr:'Classement constructeurs', en:'Constructor standings' },
    'standings.no_season':{ fr:'No completed seasons recorded.', en:'No completed seasons recorded.' },
    'sponsors.revenue':   { fr:'Revenus sponsors / an', en:'Sponsor revenue / year' },
    'board.pressure':     { fr:'Board pressure',  en:'Board pressure' },
    'training.academy':   { fr:'🌱 Academy',         en:'🌱 Academy' },
    'season.end_btn':     { fr:'📅 End season', en:'📅 End season' },
    'season.new_career':  { fr:'Nouvelle carrière',   en:'New career' },
    'aide.title':         { fr:'Guide du Team Principal', en:'Team Principal Guide' },
    'misc.loading':       { fr:'Chargement…',         en:'Loading…' },
    'misc.select_circuit':{ fr:'Sélectionne un circuit', en:'Select a circuit' },
    'misc.cancel':        { fr:'Annuler',             en:'Cancel' },
    'misc.confirm':       { fr:'Confirmer',           en:'Confirm' },
    'index.choose_team':  { fr:'🏎 CHOISIR TON ÉCURIE', en:'🏎 CHOOSE YOUR TEAM' },
    'index.enter_hq':     { fr:'Entrer au QG →',      en:'Enter HQ →' },
    'index.active_bonus': { fr:'Active bonuses',        en:'Active bonuses' },
    'index.no_bonus':     { fr:"No bonuses yet", en:'No bonuses yet' },
    'qg.upgrade':         { fr:'🔨 Upgrade',        en:'🔨 Upgrade' },
    'qg.max':             { fr:'✓ Max level',    en:'✓ Max level' },
    'qg.in_progress':     { fr:'⏳ En cours',         en:'⏳ In progress' },
  };

  function t(key){
    /* D'abord cherche dans UI, puis dans STRINGS (strings.js) */
    var entry = UI[key];
    if(!entry && typeof STRINGS !== 'undefined') entry = STRINGS[key];
    if(!entry) return key;
    return entry[LANG] || entry['fr'] || key;
  }


  var AUTO_TEXT = {
    'F1 Manager — Comment jouer':'F1 Manager — How to play',
    'Strategie, pneus, meteo, DNF.':'Strategy, tyres, weather, DNFs.',
    'Drivers, staff, moral, loyaute.':'Drivers, staff, morale, loyalty.',
    'Stats, progression, academie.':'Stats, progression, academy.',
    'Developpement, staff, budget.':'Development, staff, budget.',
    'Objectifs, sponsors, finances.':'Objectives, sponsors, finances.',
    'Briefing EL — Vendredi':'FP briefing — Friday',
    'Qualifications — Samedi':'Qualifying — Saturday',
    'Briefing pre-course — Dimanche matin':'Pre-race briefing — Sunday morning',
    'Grand Prix — Dimanche':'Grand Prix — Sunday',
    'Entre deux GP':'Between Grands Prix',
    'Strategie pneus':'Tyre strategy',
    'Meteo dynamique':'Dynamic weather',
    'Briefing technique':'Technical briefing',
    'Moral, Confidence, Loyaute':'Morale, Confidence, Loyalty',
    'Contrats':'Contracts',
    'Developpement':'Development',
    'Gestion':'Management',
    '🏢 Direction, sponsors & finances':'🏢 Board, sponsors & finances',
    'Sponsors':'Sponsors',
    'Budget':'Budget',
    '🏠 Accueil':'🏠 Home',
    '📝 Contrats':'📝 Contracts',
    '🧪 R&D':'🧪 R&D',
    '👨‍🔧 Staff':'👨‍🔧 Staff',
    'My drivers — contracts & management':'My drivers — contracts & management',
    'Driver market':'Driver market',
    'Search…':'Search…',
    'Tous':'All',
    'Free agents':'Free agents',
    'Young ≤24':'Young ≤24',
    'No driver found.':'No driver found.',
    'No driver in your team.':'No driver in your team.',
    "No bonus pour l\'instant":"No bonuses yet",
    'No bonus':'No bonus',
    'No journal available yet.':'No journal available yet.',
    'End of season':'End of season',
    'Driver centre & contracts':'Driver centre & contracts',
    "Chaque offre tient compte du salaire, du rôle, de la durée, de la réputation de ton team, du classement constructeur et de la personnalité du driver. Un refus rend le driver plus difficile à convaincre jusqu\'à la saison suivante.":"Each offer takes salary, role, length, team reputation, constructor ranking and driver personality into account. A refusal makes the driver harder to convince until next season.",
    'Create a career':'Create a career',
    'No career found':'No career found',
    'Continuer quand même':'Continue anyway',
    'ACCÉDER →':'ENTER →'
  };

  var AUTO_PARTIAL = [
    ['Upgrade','Upgrade'], ['Budget insuffisant','Insufficient budget'], ['Niveau','Level'], ['Coût','Cost'],
    ['Amélioration','Upgrade'], ['Saison','Season'], ['course(s) disputée(s)','race(s) completed'], ['restante(s)','remaining'],
    ['Mes drivers','My drivers'], ['Libérés','Released'], ['Nouveaux talents','New talents'], ['Vainqueur','Winner'],
    ['Gains','Rewards'], ['No race completed yet.','No races completed yet.'], ['Error de chargement','Loading error'],
    ['Back accueil','Back home'], ['Length','Length'], ['Role','Role'], ['Signing bonus','Signing bonus'],
    ['Seat to replace','Seat to replace'], ['Target seat','Target seat'], ['Add to a free seat','Add to a free seat'],
    ['Extend','Extend'], ['Make an offer','Make an offer'], ['Safe offer','Safe offer'], ['Strong offer','Strong offer'],
    ['Release','Release'], ['Chance estimée','Estimated chance'], ['Demande probable','Likely demand'], ['an(s)','year(s)'],
    ['rôle','role'], ['Transfer market closed','Transfer window closed'], ['Transferts uniquement avant la 1ère course','Transfers only before the first race'],
    ['Impossible de libérer un driver en cours de saison','Cannot release a driver during the season'],
    ['Moral','Morale']
  ];

  var AUTO_PARTIAL_EXTRA = [
    ['Accueil','Home'], ['Back','Back'], ['No career','No career'], ['carrière','career'], ['Carrière','Career'],
    ['Direction','Board'], ['Pression de la direction','Board pressure'], ['Board pressure','Board pressure'], ['Licenciement imminent','Dismissal imminent'], ['Forte pression','High pressure'], ['Acceptable','Acceptable'], ['Direction satisfaite','Board satisfied'],
    ['Objectifs de la saison','Season objectives'], ['Objectif','Objective'], ['Objectifs','Objectives'], ['Résultats','Results'], ['résultats','results'], ['résultat','result'],
    ['Tableau de bord','Dashboard'], ['Actions disponibles','Available actions'], ['Historique des saisons','Season history'], ['No completed seasons recorded.','No completed seasons recorded.'],
    ['Based on your performance and objectives','Based on your performance and objectives'], ['Pressure rises when you miss objectives and drops after good results.','Pressure rises when you miss objectives and drops after each good result.'], ['licenciement automatique','automatic dismissal'],
    ['Classement drivers','Driver standings'], ['Classement constructeurs','Constructor standings'], ['Classement','Standings'], ['Points','Points'], ['Victoires','Wins'], ['Podiums','Podiums'], ['Meilleur','Best'],
    ['Drivers','Drivers'], ['Driver','Driver'], ['Écurie','Team'], ['Ecurie','Team'], ['team','team'], ['Team','Team'], ['Free agent','Free agent'], ['Free agents','Free agents'], ['Actif','Active'], ['Retraité','Retired'],
    ['Contrat','Contract'], ['Contrats','Contracts'], ['Salary','Salary'], ['Statut','Status'], ['Trait','Trait'], ['ans','years old'], ['âge inconnu','unknown age'],
    ['Consistency','Consistency'], ['Régulier','Consistent'], ['Wet','Wet weather'], ['Overtaking','Attack'], ['Defending','Defence'], ['Potentiel','Potential'], ['Confidence','Confidence'], ['Loyalty','Loyalty'],
    ['Compétences','Skills'], ['Contrat & passif','Contract & passive'], ['Spécialité','Specialty'], ['Coût recrutement','Recruitment cost'], ['En poste','Hired'], ['Disponible','Available'],
    ['Membre de staff qualifié.','Qualified staff member.'], ['Bonus de performance','Performance bonus'], ['Performance technique actuelle','Current technical performance'],
    ['Recrutement','Recruitment'], ['Marché','Market'], ['Aéro','Aero'], ['Chassis','Chassis'], ['Engine','Engine'], ['Reliability','Reliability'], ['Élite','Elite'], ['Nouveau','New'], ['Sous contrat','Under contract'],
    ['None staff recruté. Va sur l\'onglet Recrutement pour engager des experts.','No staff hired. Go to the Recruitment tab to hire experts.'],
    ['Current season','Current season'], ['Next season','Next season'], ['Current car','Current car'], ['Next car','Next car'], ['Kept from previous season','Kept from previous season'], ['Nonee — atteins','None — reach'], ['in one area to unlock a circuit bonus','in one area to unlock a circuit bonus'], ['upgrades','upgrades'], ['efficacité','efficiency'], ['investi','invested'], ['Aerodynamics','Aerodynamics'], ['Confirmé','Confirmed'], ['Passif','Passive'], ['Améliore les performances de l\'team.','Improves team performance.'], ['Recruter','Recruit'], ['Licencier','Fire'], ['Budget','Budget'], ['Budget insuffisant','Insufficient budget'], ['Tu as déjà un Directeur Technique exclusif !','You already have an exclusive Technical Director!'], ['rejoint l\'team','joins the team'], ['recruté','hired'], ['licencié','fired'], ['Indemnité','Compensation'],
    ['Masse salariale','Salary bill'], ['Staff technique','Technical staff'], ['Marge opérationnelle','Operating margin'],
    ['Immersion carrière','Career immersion'], ['Vie de l\'team','Team life'], ['Le moral sera alimenté après les prochains GP.','Morale will update after the next Grands Prix.'], ['Les sponsors attendent les prochains résultats.','Sponsors are waiting for the next results.'], ['Projet stable','Stable project'], ['GP archivés','Archived GPs'],
    ['Samedi','Saturday'], ['Dimanche','Sunday'], ['Vendredi','Friday'], ['Briefing Qualifications','Qualifying Briefing'], ['Qualifications','Qualifying'], ['Piste humide','Wet track'], ['Piste seche','Dry track'], ['Analyse ingenieur','Engineer analysis'], ['Pneu','Tyre'], ['Pneus','Tyres'], ['Soft neuf','Fresh Soft'], ['Medium','Medium'], ['Intermediaires','Intermediates'], ['Full Wet','Full Wet'], ['Secteur cle','Key sector'], ['La pole est decisive ici','Pole is decisive here'], ['Bonne grille utile','A good grid slot is useful'], ['avant les qualifications','before qualifying'], ['No career','No career'],
    ['Course','Race'], ['Stratégie','Strategy'], ['Météo','Weather'], ['Dégâts','Damage'], ['Tour','Lap'], ['Développement','Development'], ['Recherche','Research'], ['Personnel','Staff'], ['Entraînement','Training'], ['Négociation','Negotiation'], ['Terminé','Finished'], ['Commencer','Start'], ['Quitter','Quit'], ['Oui','Yes'], ['Non','No'], ['Créer','Create'], ['Continuer','Continue'], ['Chargement','Loading'], ['Prêt','Ready'],
    ['Réputation','Reputation'], ['Santé financière','Financial health'], ['Maintenir','Maintain'], ['supérieur à','above'], ['Budget actuel','Current budget'], ['Currently','Currently'], ['No data yet this season','No data yet this season'], ['points-scoring races','points-scoring races'], ['courses avec au moins 1 point','races with at least 1 point'], ['Raté','Failed'], ['En cours','In progress'],
    ['Médias','Media'], ['Actualités','News'], ['Historique','History'], ['Sauvegarde','Save'], ['Charger','Load'], ['Nouvelle','New'], ['Fermer','Close'], ['Annuler','Cancel'], ['Confirmer','Confirm']
  ];
  AUTO_PARTIAL_EXTRA.forEach(function(pair){ AUTO_PARTIAL.push(pair); });

  function partialTranslate(raw){
    var out = raw;
    AUTO_PARTIAL.forEach(function(pair){ out = out.split(pair[0]).join(pair[1]); });
    return out;
  }

  function patchDialogs(){
    if(LANG !== 'en' || window.__fm_i18n_dialogs) return;
    window.__fm_i18n_dialogs = true;
    var nativeAlert = window.alert, nativeConfirm = window.confirm, nativePrompt = window.prompt;
    window.alert = function(msg){ return nativeAlert.call(window, partialTranslate(String(msg))); };
    window.confirm = function(msg){ return nativeConfirm.call(window, partialTranslate(String(msg))); };
    window.prompt = function(msg, def){ return nativePrompt.call(window, partialTranslate(String(msg)), def); };
  }

  function translateLooseText(){
    if(LANG !== 'en') return;

    if(document.title) document.title = partialTranslate(AUTO_TEXT[document.title] || document.title);

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        var parent = node.parentNode;
        if(!parent) return NodeFilter.FILTER_REJECT;
        var tag = parent.nodeName.toLowerCase();
        if(tag === 'script' || tag === 'style' || tag === 'noscript') return NodeFilter.FILTER_REJECT;
        if(!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [], n;
    while((n = walker.nextNode())) nodes.push(n);
    nodes.forEach(function(node){
      var raw = node.nodeValue;
      var txt = raw.trim();
      var tr = AUTO_TEXT[txt] ? raw.replace(txt, AUTO_TEXT[txt]) : partialTranslate(raw);
      if(tr !== raw) node.nodeValue = tr;
    });

    document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function(el){
      var ph = el.getAttribute('placeholder');
      var tr = AUTO_TEXT[ph] || partialTranslate(ph);
      if(tr !== ph) el.setAttribute('placeholder', tr);
    });
    document.querySelectorAll('option').forEach(function(el){
      var txt = el.textContent.trim();
      var tr = AUTO_TEXT[txt] || partialTranslate(txt);
      if(tr !== txt) el.textContent = tr;
    });
  }

  function apply(){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if(val !== key) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el){
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if(val !== key) el.setAttribute('placeholder', val);
    });
  }

  function setLang(lang){
    localStorage.setItem('fm_lang', lang);
    /* Recharge pour que les strings JS dynamiques (S()) se mettent à jour */
    location.reload();
  }

  function injectBadge(){
    if(document.getElementById('lang-badge')) return;

    var badge = document.createElement('div');
    badge.id = 'lang-badge';
    badge.style.cssText = [
      'position:fixed','top:10px','right:10px','z-index:999',
      'display:flex','gap:4px','align-items:center',
      'background:rgba(7,7,13,.82)','backdrop-filter:blur(12px)',
      'border:1px solid rgba(255,255,255,.12)','border-radius:20px',
      'padding:4px 10px','cursor:pointer',
      'font-family:"Barlow Condensed",sans-serif',
      'font-size:11px','font-weight:700','letter-spacing:1px',
      '-webkit-tap-highlight-color:transparent',
      'user-select:none'
    ].join(';');

    function render(){
      badge.innerHTML = LANG === 'fr'
        ? '🇫🇷 <span style="color:#fff">FR</span> <span style="color:rgba(255,255,255,.3);margin:0 3px">/</span> <span style="color:rgba(255,255,255,.3)">EN</span>'
        : '<span style="color:rgba(255,255,255,.3)">FR</span> <span style="color:rgba(255,255,255,.3);margin:0 3px">/</span> 🇬🇧 <span style="color:#fff">EN</span>';
    }
    render();

    badge.addEventListener('click', function(){
      setLang(LANG === 'fr' ? 'en' : 'fr');
    });
    badge.addEventListener('touchend', function(e){
      e.preventDefault();
      setLang(LANG === 'fr' ? 'en' : 'fr');
    }, {passive:false});

    document.body.appendChild(badge);
  }

  function observeDynamicText(){
    if(LANG !== 'en' || !window.MutationObserver) return;
    var busy = false;
    var obs = new MutationObserver(function(muts){
      if(busy) return;
      busy = true;
      setTimeout(function(){
        muts.forEach(function(m){
          m.addedNodes && m.addedNodes.forEach(function(n){
            if(n.nodeType === 1){
              n.querySelectorAll && n.querySelectorAll('[data-i18n]').forEach(function(el){
                var key = el.getAttribute('data-i18n');
                var val = t(key);
                if(val !== key) el.textContent = val;
              });
            }
          });
        });
        translateLooseText();
        busy = false;
      }, 0);
    });
    obs.observe(document.body, { childList:true, subtree:true });
  }

  document.addEventListener('DOMContentLoaded', function(){
    patchDialogs();
    apply();
    translateLooseText();
    observeDynamicText();
    injectBadge();
  });

})();
