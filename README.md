cordovaFuse
===========

Let's fuse Cordova projects

The goal of this project is to increase your productivity when you develop phonegap / cordova projects.

Some of these dev have been directly taken from the Holly Schinsky excellent article (http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/) and 
Dan Moore (http://www.mooreds.com/) (whose THE creator of some of these scripts).

Some of these scripts have been written by me.

Enjoy !

##Pre-requisites

You need node and npm installed on your system (but we assume you have it since you're working with Cordova which has the same pre-requisite)

# Cordova Hooks
## 1. Plugins installation
If you need to install plugins, we propose you a "after_add_platform" hook. Just fill in the array of the plugins you want to install in 001_install_plugins.js and 
they will be install when you add your plaform with cordova (cordova platform add)

## 2. Manage your environments
This hook is an "after_prepare" hook.
Put a project.json file with key/value in the config directory. Put these keys in the files (under www) you want to see updated by the values.
Each time you'll prepare your project (cordova prepare), The files will be updated depending on the env you want :
execute with : TARGET=prod; cordova build ios (if you want the prod env to be taken)
 
## 3. Install the icons and Splash screens
This hook is an "after_prepare" hook.
I've revisited the script from Dan becasue I wanted all the icons and splash screen to be copied from source to the platform destinations.

The principle is simple : Create a config directory (root of your project) in which you'll create the platform directories and a subdirectory "icons" and another "splash".
Once done, every time you prepare your project (cordova prepare), theses directories will be put in your platforms !

## 4. Install Fonts in iOS
This hook is an "after_prepare" hook.
This is always tedious to install new fonts in your iOS cordova project. Mika (https://github.com/mikaelh94) has written an excellent article on this subject :
http://connect.adfab.fr/tutorial/phonegap-utiliser-des-polices-systemes (ask me if you want it to be translated).

And this hook will make everything for you : Just create a "Fonts" directory in the config/'platform' directory and put .otf and .ttf fonts in there.
Each time you'll prepare your project (cordova prepare), these fonts will be copied in your ios Resources directory and the plist file will be updated.

Don't forget to use the right names (read Mika's article) in your css. That's it !

# Grunt tasks
There is one headache you'll want to avoid when working on a Cordova project : Having to launch "Cordova build" each time you want to update your project.

Just launch "grunt" (after a first npm install), and Grunt will watch each time you modify a file under www and automatically launch a "cordova build" for you !
You can even refresh the simulator automatically !

Of course, it doesn't replace the wonderful Phonegap developer app (http://devgirl.org/2014/04/22/introducing-the-phonegap-developer-app/) but it can help (hopefully).

Enjoy !

If you need additional tools to improve your dev process with cordova, just let me know, I'll try to help ;) (you can also send PR !)

