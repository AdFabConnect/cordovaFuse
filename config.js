module.exports = {
  /**
   * Gulp configuration
   */
  path: {
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
      , libs:           [ 
        './node_modules/angular/angular.js',
        './node_modules/angular-animate/angular-animate.js',
        './node_modules/angular-resource/angular-resource.js',
        './node_modules/angular-route/angular-route.js',
      ]
    }
};