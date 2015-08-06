CordovaFuse
=====================

Let's fuse Cordova projects

The goal of this project is to increase your productivity when you develop phonegap / cordova projects.

Some of these dev have been directly taken from the Holly Schinsky excellent article (http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/)

Some of these scripts have been written by us.

Furthermore, we'll update this Fuse frequently with astounding new features. 
The next to come : Being able to update your js files dynamically from the cloud (You won't have to resubmit your app for a js bug fix !)

Stay tuned and enjoy !

## Quick start

#### Prérequis

- node + npm : `brew install node` ou [visionmedia/n](https://github.com/visionmedia/n)
- imagemagick : `brew install imagemagick`, pour Windows => [ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows)
- cordova : `npm install -g cordova`

#### Instructions

Don't forget to give execute rights to your hooks (chown and chmod).

Open file package.json and change variables name and bundleId:
```
var settings = {
  appName: 'myapp',
  bundleId: 'fr.adfab.myapp',
```
! name is equal to the last string of app bundle id (myapp = from com.mycompany.myapp)


```bash
$ npm install
$ sh init.sh
$ gulp
$ cordova platform add [ ios | android ]
$ cordova build [ ios | android ]
$ cordova [ emulate | run ] [ ios | android ]
```

#### Dependencies

All project dependencies should be managed in the package.json. This file contains cordova plugins (see next chapter), build depencencies and front-end librairies and frameworks.

#### Pre-commit

A pre-commit hook is available during development. It'll prevent some errors and code style issues by running jshint. To install it, just do :

```
ln -s ../../hooks/pre-commit.sh .git/hooks/pre-commit
```

You can update the .jshintrc file to match your team coding style.


## Cordova Hooks

### 1. Plugins installation
If you need to install plugins, we propose you an "after_add_platform" hook. Just fill in the array of the plugins you want to install in package.json and they will be installed when you add your plaform with cordova (cordova platform add).

They will be removed when you rm your platform with cordova (cordova platform rm).

Example :
```
  "plugins": [
    "cordova-plugin-console",
    "cordova-plugin-splashscreen",
    "com.telerik.plugins.wkwebview",
    "cordova-plugin-crosswalk-webview"
  ]
```

**Warning** : We strongly recommend to fix your plugins versions. For instance : 
```
  "plugins": [
    "cordova-plugin-console@r1.0.1",
    "cordova-plugin-splashscreen@r2.1.0",
    "com.telerik.plugins.wkwebview",
    "cordova-plugin-crosswalk-webview@1.2.0"
  ]
```
 
### 2. Install the icons and Splash screens
This hook is an "after_prepare" hook.

Just put a icon.png and a splash.png in your project root folder.
This hook will generate all icons/splashs needed for ios/android.

### 3. Install Fonts in iOS
This hook is an "after_prepare" hook.
This is always tedious to install new fonts in your iOS cordova project. Mika (https://github.com/mikaelh94) has written an excellent article on this subject :
http://connect.adfab.fr/tutorial/phonegap-utiliser-des-polices-systemes (ask me if you want it to be translated).
(Be Careful, custom fonts config has slighly changed in iOS8 since then. See the source code if you need more info.)

And this hook will make everything for you : Just create a "fonts" directory in the config/'platform' directory and put .otf and .ttf fonts in there.
Each time you'll prepare your project (cordova prepare), these fonts will be copied in your ios Resources directory and the plist file will be updated.

Don't forget to use the right names (read Mika's article) in your css. That's it !

There is one simple thing to do if you want to know the names of your fonts to use in your css : Just add the following code in MainViewController.m in the method viewDidLoad :

```
- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    for (NSString *name in [UIFont familyNames]) {
        NSLog(@"Family name : %@", name);
        for (NSString *font in [UIFont fontNamesForFamilyName:name]) {
            NSLog(@"Font name : %@", font);
        }
    }
}
```
It will display the list of the fonts available to your app with their correct name.

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


