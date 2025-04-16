const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const outFile = path.join(__dirname, '../bookmarklets.md');

const files = fs.readdirSync(distDir).filter(f => f.endsWith('.bookmarklet.js'));

let md = '# ブックマークレット一覧\n\n';

for (const file of files) {
  const code = fs.readFileSync(path.join(distDir, file), 'utf8');
  md += `## ${file}\n\n`;
  md += '```javascript\n';
  md += code + '\n';
  md += '```\n\n';
}

fs.writeFileSync(outFile, md);
console.log('bookmarklets.md generated!');
