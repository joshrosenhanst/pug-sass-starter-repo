# Pug.js + Sass Starter Repo

Repo containing files to bootstrap a [Pug.js](https://github.com/pugjs/pug) and [Sass](https://github.com/sass/sass) project, including gulp scripts, PUG starter templates, and Sass base styles (based on [Bulma.io](https://github.com/jgthms/bulma) base styles).

## Directories
- `src/assets` - Any static assets, including images, scripts, etc. This folder will be copied over to `dist/assets/`.
- `src/pug` - Holds all Pug.js templates, blocks, mixins, etc.
- `src/pug/templates` - The Pug.js templates that will be compiled to HTML files in the `dist/` directory.
- `src/sass` - The Sass files that will be compiled to CSS files in the `dist/css` directory.
- `gulpfile.js` - Gulp config file that sets up standard watch and build scripts.
- `.browserlistrc` - CSS Autoprefixer browser config file. Set to the autoprefixer defaults, but can be changed to add browser support.

## Build Scripts
- `npm run gulp` - Watches Pug.js templates, Sass files, and files in the `src/assets` directory for changes. Automatically compiles files in the `dist` directory.
- `npm run build` - Compile Pug.js templates, Sass files, and copy assets. CSS is built for production (no sourcemaps).