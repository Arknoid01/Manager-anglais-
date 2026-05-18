/* ============================================================
   i18n.js — Badge langue FR/EN + traduction UI
   Dépend de strings.js (chargé avant)
   ============================================================ */
(function(){

  var LANG = localStorage.getItem('fm_lang') || 'fr';

  /* ── Dictionnaire UI (éléments HTML statiques) ── */
  var UI = {
    'nav.home':           { fr:'← Accueil',          en:'← Home' },
    'nav.back':           { fr:'← Retour',            en:'← Back' },
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
    'race.tyre_life':     { fr:'🛞 Durée estimée des pneus', en:'🛞 Estimated tyre life' },
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
    'drivers.title':      { fr:'Pilotes',             en:'Drivers' },
    'drivers.filter':     { fr:'Filtrer :',           en:'Filter:' },
    'drivers.all':        { fr:'Tous',                en:'All' },
    'drivers.free_agents':{ fr:'Agents libres',       en:'Free agents' },
    'drivers.pace':       { fr:'Pace',                en:'Pace' },
    'drivers.morale':     { fr:'Moral',               en:'Morale' },
    'drivers.contracts':  { fr:'Contrats',            en:'Contracts' },
    'staff.salary':       { fr:'💰 Masse salariale',  en:'💰 Salary bill' },
    'staff.elite':        { fr:'⭐ Élite',            en:'⭐ Elite' },
    'rd.alloc':           { fr:'Allocation des ressources R&D', en:'R&D resource allocation' },
    'rd.aero':            { fr:'🌊 Aéro',             en:'🌊 Aero' },
    'rd.chassis':         { fr:'🏗️ Châssis',          en:'🏗️ Chassis' },
    'rd.engine':          { fr:'⚡ Moteur',            en:'⚡ Engine' },
    'rd.reliability':     { fr:'🔩 Fiabilité',        en:'🔩 Reliability' },
    'rd.tokens':          { fr:'Tokens R&D',          en:'R&D Tokens' },
    'standings.drivers':  { fr:'Classement pilotes',  en:'Driver standings' },
    'standings.teams':    { fr:'Classement constructeurs', en:'Constructor standings' },
    'standings.no_season':{ fr:'Aucune saison complète enregistrée.', en:'No completed seasons recorded.' },
    'sponsors.revenue':   { fr:'Revenus sponsors / an', en:'Sponsor revenue / year' },
    'board.pressure':     { fr:'Pression direction',  en:'Board pressure' },
    'training.academy':   { fr:'🌱 Académie',         en:'🌱 Academy' },
    'season.end_btn':     { fr:'📅 Terminer la saison', en:'📅 End season' },
    'season.new_career':  { fr:'Nouvelle carrière',   en:'New career' },
    'aide.title':         { fr:'Guide du Team Principal', en:'Team Principal Guide' },
    'misc.loading':       { fr:'Chargement…',         en:'Loading…' },
    'misc.select_circuit':{ fr:'Sélectionne un circuit', en:'Select a circuit' },
    'misc.cancel':        { fr:'Annuler',             en:'Cancel' },
    'misc.confirm':       { fr:'Confirmer',           en:'Confirm' },
    'index.choose_team':  { fr:'🏎 CHOISIR TON ÉCURIE', en:'🏎 CHOOSE YOUR TEAM' },
    'index.enter_hq':     { fr:'Entrer au QG →',      en:'Enter HQ →' },
    'index.active_bonus': { fr:'Bonus actifs',        en:'Active bonuses' },
    'index.no_bonus':     { fr:"Aucun bonus pour l'instant", en:'No bonuses yet' },
    'qg.upgrade':         { fr:'🔨 Améliorer',        en:'🔨 Upgrade' },
    'qg.max':             { fr:'✓ Niveau maximum',    en:'✓ Max level' },
    'qg.in_progress':     { fr:'⏳ En cours',         en:'⏳ In progress' },
  };

  function t(key){
    /* D'abord cherche dans UI, puis dans STRINGS (strings.js) */
    var entry = UI[key];
    if(!entry && typeof STRINGS !== 'undefined') entry = STRINGS[key];
    if(!entry) return key;
    return entry[LANG] || entry['fr'] || key;
  }

  function apply(){
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if(val !== key) el.textContent = val;
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

  document.addEventListener('DOMContentLoaded', function(){
    apply();
    injectBadge();
  });

})();
