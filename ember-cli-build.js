/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    types = require('node-sass').types,
    env = EmberApp.env(),
    isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1,
    assetPath = '/',
    fontPath = '/fonts',
    iconPath = '/fonts/material-icons';

if (env === 'development') { // you can also consult process.env.DEPLOY_TARGET
  assetPath = '/';
  iconPath = '/fonts/material-icons';
}

if (env === 'qa') {
  assetPath = process.env.ASSET_PATH + '/';
  fontPath = assetPath + 'fonts';
  iconPath = process.env.ICON_PATH + '';
}

if (env === 'staging') {
  assetPath = process.env.ASSET_PATH + '/';
  fontPath = assetPath + 'fonts';
  iconPath = process.env.ICON_PATH + '';
}

if (env === 'production') {
  assetPath = process.env.ASSET_PATH + '/';
  fontPath = assetPath + 'fonts';
  iconPath = process.env.ICON_PATH + '';
}

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    emberHighCharts: {
      includeHighCharts: true,
      includeHighChartsMore: true,
      includeModules: ['solid-gauge']
    },
    assetLoader: {
      generateURI: function(filePath) {
        return process.env.ASSET_PATH + filePath;
      }
    },
    fingerprint: {
      enabled: isProductionLikeBuild,
      prepend: process.env.ASSET_PATH + '/'
    },
    sourcemaps: {
      enabled: false,
      extensions: ['js']
    },
    minifyCSS: { enabled: isProductionLikeBuild },
    minifyJS: {
      enabled: isProductionLikeBuild,
      options: {
        exclude: ["**/vendor.js"],
        output: { max_line_len: 120000 }
      }
    },
    sassOptions: {
      includePaths: [
        'app/styles'
      ],
      outputStyle: env !== 'test' && env !== 'development' ? 'compressed': 'expanded',
      functions: {
        'font-path()': function() {
          return new types.String(fontPath);
        },
        'icon-path()': function() {
          return new types.String(iconPath);
        }
      }
    }
  });

  return app.toTree();
};
