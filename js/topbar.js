/* ============================================================
   topbar.js — Topbar universelle F1 Manager
   À inclure dans toutes les pages AVANT les autres scripts.
   Injecte automatiquement :
   - La police Orbitron si absente
   - Les pills saison + budget dans .top-pills
   - Le logo standardisé
   ============================================================ */
(function(){

  /* ── 1. Orbitron si pas déjà chargé ── */
  if(!document.querySelector('link[href*="Orbitron"]')){
    var l = document.createElement('link');
    l.rel  = 'stylesheet';
    l.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap';
    document.head.appendChild(l);
  }

  /* ── 2. Standardise la topbar après le DOM ── */
  document.addEventListener('DOMContentLoaded', function(){
    var save = (typeof Save !== 'undefined') ? Save.load() : null;
    if(!save) return;

    var pid  = save.playerTeamId || '';
    var team = (typeof F1Data !== 'undefined')
      ? F1Data.teams.find(function(t){ return t.id === pid; })
      : null;

    /* ── Logo : ajoute Orbitron et couleur équipe ── */
    var logo = document.querySelector('.logo');
    if(logo){
      logo.style.fontFamily = "'Orbitron', sans-serif";
      /* Ajoute le point coloré équipe si pas déjà là */
      if(team && !logo.querySelector('.logo-dot')){
        var dot = document.createElement('span');
        dot.className = 'logo-dot';
        dot.style.cssText = 'display:inline-block;width:7px;height:7px;border-radius:50%;background:'+team.color+';margin-right:5px;margin-left:2px;flex-shrink:0;';
        /* Insère après le premier enfant (img ou premier text) */
        
        if(firstImg){
          firstImg.after(dot);
        } else {
          logo.insertBefore(dot, logo.firstChild);
        }
      }
    }

    /* ── Pills saison + budget ── */
    var pills = document.querySelector('.top-pills');
    if(pills){
      /* Met à jour les badges existants */
      var season = pills.querySelector('#seasonBadge, .season-badge, [id*="season"]');
      var budget = pills.querySelector('#budgetBadge, .budget-badge, [id*="budget"]');

      if(season) season.textContent = 'S.' + (save.season || 2025) + ' · GP' + (save.race || 0);
      if(budget){
        budget.textContent = Math.round(save.budget || 0) + 'M€';
        budget.classList.add('pill-budget');
      }

      /* Ajoute un badge équipe s'il n'y en a pas */
      if(team && !pills.querySelector('.pill-team')){
        var tp = document.createElement('div');
        tp.className = 'pill pill-team';
        tp.style.cssText = 'background:rgba('+hexRgb(team.color)+',.12);border-color:rgba('+hexRgb(team.color)+',.28);color:'+team.color;
        tp.innerHTML = '<span style="display:inline-block;width:6px;height:6px;border-radius:50%;background:'+team.color+';margin-right:4px;vertical-align:middle;"></span>'+(team.shortName||team.name);
        pills.insertBefore(tp, pills.firstChild);
      }
    }

    /* ── nav-back : ajoute ← si texte vide ── */
    document.querySelectorAll('.nav-back, .back-home').forEach(function(el){
      if(!el.textContent.trim()) el.textContent = '← Accueil';
      if(!el.getAttribute('href') || el.getAttribute('href') === '#')
        el.setAttribute('href', 'index.html');
    });
  });

  function hexRgb(h){
    if(!h || h.length < 7) return '232,0,61';
    return parseInt(h.slice(1,3),16)+','+parseInt(h.slice(3,5),16)+','+parseInt(h.slice(5,7),16);
  }

})();
