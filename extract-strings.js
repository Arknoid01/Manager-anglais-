#!/usr/bin/env node
/**
 * extract-strings.js
 * Scanne le projet, extrait les strings françaises non encore traduites
 * et génère un fichier to-translate.json à coller dans Claude.
 *
 * Usage : node extract-strings.js
 * Output: to-translate.json
 */

const fs   = require('fs');
const path = require('path');

const PROJECT_DIR  = process.cwd();
const STRINGS_FILE = path.join(PROJECT_DIR, 'js', 'strings.js');
const OUTPUT_FILE  = path.join(PROJECT_DIR, 'to-translate.json');

/* ── Détecte si une string est française ── */
function isFrench(str) {
  const s = str.trim().toLowerCase();

  // 1. Caractères accentués typiquement français
  if (/[éèêëàâùûôîïçœæ]/.test(s)) return true;

  // 2. Mots français courants (sans accents)
  const frenchWords = [
    // Articles / pronoms
    'les','des','une','mon','ton','son','nos','vos','leurs',
    'cet','cette','ces','quel','quelle',
    // Prépositions / conjonctions
    'dans','avec','pour','par','sur','sous','vers','chez','entre',
    'depuis','avant','après','pendant','sans','selon','donc','mais',
    'aussi','comme','quand','alors','ainsi',
    // Verbes courants
    'est','sont','être','avoir','faire','aller','voir','vouloir',
    'pouvoir','devoir','savoir','prendre','donner','mettre',
    'jouer','gagner','perdre','lancer','terminer','choisir',
    'confirmer','annuler','continuer','commencer','afficher',
    // Noms/adjectifs du jeu
    'pilote','pilotes','équipe','équipes','course','courses',
    'saison','budget','points','tours','tour','circuit','circuits',
    'pneu','pneus','stratégie','météo','classement','podium',
    'sponsor','contrat','staff','moteur','châssis','voiture',
    'amélioration','développement','performance','résultat',
    'victoire','qualification','arrêt','stand','muret',
    // UI
    'accueil','retour','fermer','annuler','confirmer','sauvegarder',
    'chargement','suivant','précédent','terminer','démarrer',
    'pause','lent','rapide','nouveau','nouvelle','aucun','aucune',
    'total','actuel','actuelle','disponible','impossible',
    // Adjectifs courants
    'petit','grand','fort','faible','rapide','lent','nouveau','vieux',
    'bon','mauvais','premier','dernier','prochain','meilleur',
  ];

  const words = s.split(/[\s\-_,!?.:;()\[\]'"\/]+/).filter(w => w.length > 1);
  const frenchCount = words.filter(w => frenchWords.includes(w)).length;

  // Si au moins 1 mot français reconnu sur une string courte, ou 2+ sur une longue
  if (words.length <= 3 && frenchCount >= 1) return true;
  if (words.length > 3  && frenchCount >= 2) return true;

  // 3. Patterns grammaticaux français
  // Articles contractés
  if (/\b(du|au|aux)\s+[a-z]/i.test(s)) return true;
  // Apostrophes françaises : l'equipe, d'abord, j'ai, n'est, c'est, s'il
  if (/\b[ldjncs]'[a-z]/i.test(s)) return true;
  // Terminaisons typiques
  if (/\b\w+(tion|sion|ment|eur|eux|euse|ique|aire|oire|iser|ifier)\b/.test(s)) return true;
  // Négation française
  if (/\bne\s+\w+\s+(pas|plus|jamais|rien|aucun)\b/.test(s)) return true;

  return false;
}

/* ── Strings à ignorer ── */
function isSkippable(str) {
  const s = str.trim();

  // Trop court ou trop long
  if (s.length < 4 || s.length > 150) return true;

  // URLs et chemins
  if (/^https?:\/\//.test(s)) return true;
  if (/^\.\.|\.css$|\.js$|\.html$|\.png$|\.jpg$|\.svg$|\.json$/.test(s)) return true;
  if (/^\/[a-z]/.test(s)) return true;                   // chemin absolu

  // Template literals avec variables JS — trop risqué de remplacer
  if (/\$\{/.test(s)) return true;

  // Debug / logs
  if (/^\[/.test(s) && /\]/.test(s)) return true;        // [DEBUG MSG]
  if (/^console\.|^window\.|^document\./.test(s)) return true;

  // CSS
  if (/rgba?\(|#[0-9a-f]{3,6}\b/i.test(s)) return true;
  if (/\bpx\b|\bem\b|\brem\b|\b%\b/.test(s)) return true;
  if (/var\(--/.test(s)) return true;

  // Sélecteurs CSS / classes
  if (/^[.#][a-z]/.test(s)) return true;
  if (/^[a-z-]+:[a-z]/.test(s)) return true;             // propriété CSS

  // Clés d'objet, identifiants techniques
  if (/^[a-z][a-zA-Z]+Id$|^[a-z][a-zA-Z]+Key$/.test(s)) return true;

  // Formats techniques
  if (/^\d{4}-\d{2}/.test(s)) return true;               // date ISO
  if (/^[A-Z]{2,5}$/.test(s)) return true;               // acronyme pur (GP, FP, SC...)
  if (/^[a-z_]+\.[a-z_]+$/.test(s)) return true;         // clé i18n existante

  // Déjà une clé S()
  if (/^auto\.|^race\.|^wk\.|^rd\.|^imm\.|^career\./.test(s)) return true;

  // Chaîne purement numérique ou symbole
  if (/^[\d\s+\-*/=<>!@#$%^&()[\]{}|\\]+$/.test(s)) return true;

  // Strings qui ne sont que des emojis
  if (/^[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\s]+$/u.test(s)) return true;

  // Noms propres seuls (une majuscule + lettres, pas de mot fr)
  if (/^[A-Z][a-z]{2,}$/.test(s) && !/[éèêëàâùûôîïçœ]/.test(s)) return true;

  return false;
}

/* ── Génère une clé lisible depuis le texte ── */
function makeKey(str) {
  return 'auto.' + str
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .slice(0, 35)
    .replace(/_+$/, '');
}

/* ── Scan ── */
const stringsContent = fs.readFileSync(STRINGS_FILE, 'utf8');

const htmlFiles = fs.readdirSync(PROJECT_DIR)
  .filter(f => f.endsWith('.html'))
  .map(f => path.join(PROJECT_DIR, f));

const jsFiles = fs.readdirSync(path.join(PROJECT_DIR, 'js'))
  .filter(f => f.endsWith('.js') && !['strings.js','i18n.js','sw.js','topbar.js'].includes(f))
  .map(f => path.join(PROJECT_DIR, 'js', f));

const files = [...htmlFiles, ...jsFiles];
const found = new Map(); // fr → {key, occurrences:[{file,line}]}

for (const fp of files) {
  const content = fs.readFileSync(fp, 'utf8');
  const lines   = content.split('\n');
  const relFile = path.relative(PROJECT_DIR, fp);

  lines.forEach((line, i) => {
    // Skip commentaires
    if (/^\s*(\/\/|\/\*|\*|#)/.test(line)) return;
    // Skip lignes CSS
    if (/^\s*[a-z-]+\s*:/.test(line) && !line.includes('(')) return;

    // Cherche toutes les strings littérales
    const matches = [...line.matchAll(/(?:^|[=:,(+\[!? ])['"]([^'"\n\\]{3,120})['"]/g)];

    for (const m of matches) {
      const str = m[1].trim();
      if (!isFrench(str) || isSkippable(str)) continue;
      // Déjà dans strings.js ?
      if (stringsContent.includes(JSON.stringify(str))) continue;

      if (!found.has(str)) {
        found.set(str, { key: makeKey(str), occurrences: [] });
      }
      found.get(str).occurrences.push({ file: relFile, line: i + 1 });
    }
  });
}

/* ── Résolution des doublons de clés ── */
const keyCount = {};
for (const [, data] of found) {
  const k = data.key;
  keyCount[k] = (keyCount[k] || 0) + 1;
  if (keyCount[k] > 1) data.key = k + '_' + keyCount[k];
}

/* ── Output ── */
const output = {
  _instructions: [
    "1. Traduis chaque 'fr' en anglais dans le champ 'en'",
    "2. Ne modifie PAS les clés ni la structure JSON",
    "3. Garde les emojis, balises HTML et variables ${...} tels quels",
    "4. Sauvegarde le fichier sous le même nom : to-translate.json",
    "5. Lance ensuite : node inject-translations.js"
  ],
  _stats: {
    total: found.size,
    files_scanned: files.length,
    generated_at: new Date().toISOString()
  },
  strings: {}
};

for (const [fr, data] of found) {
  output.strings[data.key] = {
    fr,
    en: "",   // ← à remplir
    _occurrences: data.occurrences.slice(0, 3) // max 3 pour lisibilité
  };
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));

console.log(`\n✓ ${found.size} strings extraites → ${OUTPUT_FILE}`);
console.log(`\nProchaine étape :`);
console.log(`  → Ouvre to-translate.json`);
console.log(`  → Colle le contenu dans Claude`);
console.log(`  → Demande : "Traduis toutes les valeurs 'en' vides de ce JSON"`);
console.log(`  → Sauvegarde la réponse dans to-translate.json`);
console.log(`  → Lance : node inject-translations.js\n`);
