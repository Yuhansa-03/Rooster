const fs = require('fs');
const path = require('path');

const cwd = process.cwd();
try {
  const entries = fs.readdirSync(cwd);
  const targets = entries.filter(name => {
    if (!name.includes('next.config')) return false;
    // keep the canonical mjs config
    if (name === 'next.config.mjs') return false;
    return true;
  });

  if (targets.length === 0) {
    // nothing to do
    process.exit(0);
  }

  for (const file of targets) {
    const full = path.join(cwd, file);
    try {
      fs.unlinkSync(full);
      console.log('Removed temporary Next.js config artifact:', file);
    } catch (err) {
      console.error('Failed to remove', file, err.message || err);
      process.exitCode = 1;
    }
  }
} catch (err) {
  console.error('clean-next-config failed:', err.message || err);
  process.exitCode = 1;
}
