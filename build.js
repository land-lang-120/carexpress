/* CarExpress — Build Script
   Concatenates all JS modules into a single bundle for Babel standalone.
   Run: node build.js
*/
const fs = require('fs');
const path = require('path');

const FILES = [
  'js/config.js',
  'js/data.js',
  'js/components.js',
  'js/home.js',
  'js/driver.js',
  'js/passenger.js',
  'js/results.js',
  'js/cancellation.js',
  'js/notifications.js',
  'js/history.js',
  'js/favorites.js',
  'js/profile.js',
  'js/chat.js',
  'js/map.js',
  'js/onboarding.js',
  'js/app.js',
  'js/main.js',
];

let bundle = '/* CarExpress — Auto-generated bundle. Do not edit manually. */\n\n';

for (const file of FILES) {
  const content = fs.readFileSync(path.join(__dirname, file), 'utf-8');
  bundle += `\n/* ═══ ${file} ═══ */\n${content}\n`;
}

fs.writeFileSync(path.join(__dirname, 'bundle.js'), bundle, 'utf-8');
console.log(`✓ Bundle created (${FILES.length} files → bundle.js)`);
