import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// In this repo, `require('tailwindcss')` resolves to `{}`.
// The actual PostCSS plugin factory lives at `tailwindcss/lib/plugin`.
const tailwindcss = require('tailwindcss/lib/plugin');
const autoprefixer = require('autoprefixer');

export default {
  plugins: [tailwindcss(), autoprefixer()],
};
