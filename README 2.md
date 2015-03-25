Cordova Angular Fuse
=====================

## Quick start

#### Prérequis
- node + npm : `brew install node` ou [visionmedia/n](https://github.com/visionmedia/n)
- cordova : `npm install -g cordova`
- imagemagick : `brew install imagemagick`, pour Windows => [ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows)

#### Instructions

```bash
$ npm install
$ gulp
$ cordova plugin add \
	org.apache.cordova.console \
	org.apache.cordova.device \
$ cordova platform add [ ios | android ]
$ cordova build [ ios | android ]
$ cordova [ emulate | run ] [ ios | android ]
```

## Description

### [npm](https://www.npmjs.org/) _(package manager)_

Toutes les bibliothèques externes sont gérées avec npm, et sont donc présentes dans le dossier *./node_modules*.

### [gulp](http://gulpjs.com/) _(build system)_

Construit le dossier _./www_ nécessaire à cordova pour compiler l'application, à partir des sources présentes dans le dossier _./src_ et des bibliothèques externes dans le dossier *./node_modules*.

Le fichier _config.js_ définit les variables de l'application telles que l'environnement, la version ou les chemins des différentes sources et bibliothèques.

Le dossier _./task_ contient les tâches gulp pour construire l'application. Elles sont chargées dans le fichier _gulp.js_.
- `gulp build` (ou `gulp`) : construit l'application dans le dossier _www_.
- `gulp watch` : lance un processus de construction de l'application à chaque modification des sources.

### [browserify](https://github.com/substack/browserify-handbook) _(javascript modularity)_

L'application est découpée en modules présents dans le dossier _./src/modules_. Chaque module contient des templates et des modules angular.

Browserify nous permet de regrouper chacun des modules javascript en un seul fichier à l'aide de la méthode `require('modules')`. Les bibliothèques externes récupérées via npm et compatible avec le système de module de node peuvent aussi être intégrées grâce à la méthode `require('modules')`.

Le point d'entrée du regroupement est le fichier _./src/modules/app.js_.

### [sass](http://sass-lang.com/) _(css pre-processor)_

Le point d'entrée est le fichier _./src/assets/app.scss_, il importe les autres fichier sass qui commencent par \_.  
Lors de la compilation du sass vers le css, on utilise [autoprefixer](https://github.com/ai/autoprefixer) qui ajoute les _vendor prefixes_ nécessaires donc inutile de les écrire nous même.


