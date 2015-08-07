CordovaFuse
=====================

Let's fuse Cordova projects

This projects aims to increase your productivity when you develop cordova projects. We use it every day to build real life applications, and it's improved based on our experience on these projects.

With this, you can start a [Cordova](https://cordova.apache.org/) application based on [AngularJS](https://angularjs.org/). We also use [gulp](http://gulpjs.com/), [sass](http://sass-lang.com/), [autoprefixer](https://github.com/ai/autoprefixer) and [browserify](http://browserify.org/) to build our apps.

Also, we already included two of the most useful cordova plugins available : [wkwebview](https://github.com/Telerik-Verified-Plugins/WKWebView) and [crosswalk](http://crosswalk-project.org/). These two will help you to have consistent graphics, to sped up the app' and have access to the latest APIs available in browsers. 

Stay tuned and enjoy !

## Quick start

#### Requirements

- node : `brew install node` or [visionmedia/n](https://github.com/visionmedia/n)
- imagemagick : `brew install imagemagick`, for Windows => [ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows) (used to generate icons and splashscreen)

#### Instructions

Open file package.json and change variables name and bundleId:
```
  name: 'myapp',
  bundleId: 'fr.adfab.myapp',
```
! name is equal to the last string of app bundle id (myapp = from com.mycompany.myapp)

```bash
$ npm install
$ cordova create tmp com.mycompany.myapp myapp && cp -r tmp/* ./ && rm -rf tmp
$ gulp [ watch ]

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