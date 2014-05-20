var settings = {
	appName: 'pocStat',
	environment: {
		dev: {
			datahostname : "'pocstat.dev'"
		},
		stage: {
			datahostname : "'ic.adfab.fr'"
		},
		prod: {
			datahostname : "'prod.domain.fr'"
		}
	},
	plugins: [
    	{"org.apache.cordova.console": "https://git-wip-us.apache.org/repos/asf/cordova-plugin-console.git"},
    	{"org.apache.cordova.splashscreen": "https://github.com/apache/cordova-plugin-splashscreen.git"}
	]
};

module.exports = settings;