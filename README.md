# Pug.js + Sass Starter Repo

Repo containing files to bootstrap a [Pug.js](https://github.com/pugjs/pug) and [Sass](https://github.com/sass/sass) project, including build scripts, PUG starter templates, and Sass base styles (based on [Bulma.io](https://github.com/jgthms/bulma) base styles).

## Directories
- `src/assets` - Any static assets, including images, scripts, etc. This folder will be copied over to `dist/assets/`.
- `src/pug` - Holds all Pug.js templates, blocks, mixins, etc.
- `src/pug/templates` - The Pug.js templates that will be compiled to HTML files in the `dist/` directory.
- `src/sass` - The Sass files that will be compiled to CSS files in the `dist/css` directory.

## Build Scripts
- `npm run html` - Compile Pug.js templates in `src/pug/templates` into HTML files in the `dist/` directory.
- `npm run css` - Compile the `src/sass/index.sass` file into `dist/css/index.css`. This script will build the CSS with sourcemaps and normal spacing.
- `npm run assets` - Copy the `src/assets` directory to `dist/assets`
- `npm run watch_html` - Watch Pug.js templates and automatically compile them when changes are made.
- `npm run watch_css` - Watch Sass files and automatically compile them when changes are made.
- `npm run build` - Compile Pug.js templates, Sass files, and copy assets.
- `npm run prod` - Same as `npm run build`, but Sass files are compiled for production (no sourcemaps, compressed space).