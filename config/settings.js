var settings = {
	appName: 'fr.adfab.myApp',
	environment: {
		dev: {
			datahostname : "myApp.dev"
		},
		stage: {
			datahostname : "myApp.adfab.fr"
		},
		prod: {
			datahostname : "myApp.fr"
		}
	},
	plugins: [
    	{"org.apache.cordova.console": "https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git"},
    	{"org.apache.cordova.splashscreen": "https://github.com/apache/cordova-plugin-splashscreen.git"}
	],
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
};

module.exports = settings;