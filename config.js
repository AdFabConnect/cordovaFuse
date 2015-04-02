module.exports = {

  /**
   * Global Variables
   */
    appName: 'myApp'
  , bundleId: 'fr.adfab.myapp'
  , env: 'development'
  , version: '0.0.1'

  /**
   * Path shortcuts to build the app
   */
  , path: {
        build:          './www/'
      , buildAssets:    './www/assets/'
      , styles:         ['./src/assets/scss/**/*.scss']
      , images:         ['./src/assets/img/**/*']
	    , fonts:          ['./src/assets/fonts/**/*']
	    , js:             ['./src/assets/js/*']
      , scriptsEntry:   './src/modules/app.js'
      , scripts:        ['./src/modules/**/*.js']
      , views:          ['./src/**/*.html']
      , libBase:        './bower_components'
    }

  /**
   * Extra library files to include in the app
   */
  , libPath: [
    ]

  /**
   * Plugins to install/uninstall after platform_add/remove hook
   */
  , plugins: [
        {"org.apache.cordova.console"       : "https://github.com/apache/cordova-plugin-console.git"}
      , {"org.apache.cordova.splashscreen"  : "https://github.com/apache/cordova-plugin-splashscreen.git"}
      , {"com.telerik.plugins.wkwebview"    : "https://github.com/Telerik-Verified-Plugins/WKWebView.git"}
    ]

  /**
   *  iOS's Plist content
   */
  , plist: {
        "UISupportedInterfaceOrientations": [
            "UIInterfaceOrientationPortrait"
          , "UIInterfaceOrientationLandscapeLeft"
          , "UIInterfaceOrientationPortraitUpsideDown"
          , "UIInterfaceOrientationLandscapeRight"
        ]
      , "UISupportedInterfaceOrientations~ipad": [
            "UIInterfaceOrientationPortrait"
          , "UIInterfaceOrientationLandscapeLeft"
          , "UIInterfaceOrientationPortraitUpsideDown"
          , "UIInterfaceOrientationLandscapeRight"
        ]
      , "UIStatusBarStyle": "UIStatusBarStyleLightContent"
      , "UIViewControllerBasedStatusBarAppearance": false
      , "UIStatusBarHidden": true
    }

};