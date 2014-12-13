cordovaFuse
===========

Let's fuse Cordova projects

The goal of this project is to increase your productivity when you develop phonegap / cordova projects.

Some of these dev have been directly taken from the Holly Schinsky excellent article (http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/) and 
Dan Moore (http://www.mooreds.com/) (whose THE creator of some of these scripts).

Some of these scripts have been written by us.

Furthermore, we'll update this Fuse frequently with astounding new features. 
The next to come : Being able to update your js files dynamically from the cloud (You won't have to resubmit your app for a js bug fix !)

Stay tuned and enjoy !

##Pre-requisites

You need node and npm installed on your system (but we assume you have it since you're working with Cordova which has the same pre-requisite)

## Installation

Don't forget to give execute rights to your hooks (chown and chmod).

Open file config/settings.js and change variable appName :
```
var settings = {
	appName: 'myapp',
```
! appName is equal to the last string of app bundle id (myapp = from com.mycompany.myapp)

Once installed on an existing project, configure your files in the directory "config" and uninstall (cordova plaform rm) / reinstall (cordova plaform add) the platforms 
# Cordova Hooks
## 1. Plugins installation
If you need to install plugins, we propose you an "after_add_platform" hook. Just fill in the array of the plugins you want to install in config/settings.json and 
they will be install when you add your plaform with cordova (cordova platform add).

They will be removed when you rm your platform with cordova (cordova platform rm).

Example :
```
	plugins: [
    	{"org.apache.cordova.console": "https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git"},
    	{"org.apache.cordova.splashscreen": "https://github.com/apache/cordova-plugin-splashscreen.git"}
	],
```


## 2. Manage your environments
This hook is an "after_prepare" hook.
Put a project.json file with key/value in the config directory. Put these keys in the files (under www) you want to see updated by the values.
Each time you'll prepare your project (cordova prepare), The files will be updated depending on the env you want :
execute with : TARGET=prod; cordova build ios (if you want the prod env to be taken)
 
## 3. Install the icons and Splash screens
This hook is an "after_prepare" hook.
I've revisited the script from Dan because I wanted all the icons and splash screen to be copied from source to the platform destinations.

The principle is simple : Create a config directory (root of your project) in which you'll create the platform directories and a subdirectory "icons" and another "splash".
Once done, every time you prepare your project (cordova prepare), theses directories will be put in your platforms !

## 4. Install Fonts in iOS
This hook is an "after_prepare" hook.
This is always tedious to install new fonts in your iOS cordova project. Mika (https://github.com/mikaelh94) has written an excellent article on this subject :
http://connect.adfab.fr/tutorial/phonegap-utiliser-des-polices-systemes (ask me if you want it to be translated).
(Be Careful, custom fonts config has slighly changed in iOS8 since then. See the source code if you need more info.)

And this hook will make everything for you : Just create a "fonts" directory in the config/'platform' directory and put .otf and .ttf fonts in there.
Each time you'll prepare your project (cordova prepare), these fonts will be copied in your ios Resources directory and the plist file will be updated.

Don't forget to use the right names (read Mika's article) in your css. That's it !

## 5. Add custom config into xcode .plist file
This hook is an "after_prepare" hook.
You need to add all the custom config into config/settings.js

Example :
```
	plist: {
		"UISupportedInterfaceOrientations": [
			"UIInterfaceOrientationPortrait",
			"UIInterfaceOrientationLandscapeLeft",
			"UIInterfaceOrientationPortraitUpsideDown",
			"UIInterfaceOrientationLandscapeRight"
		],
		"UISupportedInterfaceOrientations~ipad": [
  			"UIInterfaceOrientationPortrait",
			"UIInterfaceOrientationLandscapeLeft",
			"UIInterfaceOrientationPortraitUpsideDown",
			"UIInterfaceOrientationLandscapeRight"
		],
		"UIStatusBarStyle": "UIStatusBarStyleLightContent",
		"UIViewControllerBasedStatusBarAppearance": false,
		"UIStatusBarHidden": true
}
```

# Grunt tasks
There is one headache you'll want to avoid when working on a Cordova project : Having to launch "Cordova build" each time you want to update your project.

Just launch "grunt" (after a first npm install), and Grunt will watch each time you modify a file under www and automatically launch a "cordova build" for you !
You can even refresh the simulator automatically !

Of course, it doesn't replace the wonderful Phonegap developer app (http://devgirl.org/2014/04/22/introducing-the-phonegap-developer-app/) but it can help (hopefully).

Enjoy !

If you need additional tools to improve your dev process with cordova, just let us know, We'll try to help ;) (you can also send PR !)

