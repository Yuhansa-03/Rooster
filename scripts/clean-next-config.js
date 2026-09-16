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
  // After removing temporary artifacts, ensure next.config.mjs does not import
  // a temporary compiled config. If it does, overwrite with a safe canonical
  // config (the project's intended configuration).
  const mainConfig = path.join(cwd, 'next.config.mjs');
  try {
    if (fs.existsSync(mainConfig)) {
      const content = fs.readFileSync(mainConfig, 'utf8');
      // Detect imports referencing a *.next.config.* artifact
      if (/\.next\.config\.[a-z0-9]+/i.test(content)) {
        const canonical = `/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  async redirects() {\n    return [\n      { source: \"/about\", destination: \"/#about\", permanent: false },\n      { source: \"/services\", destination: \"/#services\", permanent: false },\n      { source: \"/work\", destination: \"/#projects\", permanent: false },\n      { source: \"/projects\", destination: \"/#projects\", permanent: false },\n      { source: \"/packages\", destination: \"/#services\", permanent: false },\n      { source: \"/contact\", destination: \"/#contact\", permanent: false },\n    ];\n  },\n};\n\nexport default nextConfig;\n`;
        fs.writeFileSync(mainConfig, canonical, 'utf8');
        console.log('Restored canonical next.config.mjs because a temporary import was detected.');
      }
    }
  } catch (err) {
    console.error('Failed to validate/restore next.config.mjs:', err.message || err);
    process.exitCode = 1;
  }
} catch (err) {
  console.error('clean-next-config failed:', err.message || err);
  process.exitCode = 1;
}
