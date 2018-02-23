/* jshint node: true */

module.exports = function(environment) {

  var ENV = {
    i18n: {
      defaultLocale: 'en'
    },
    modulePrefix: 'hyspa',
    environment: environment,
    locationType: 'hash',
    baseServices: [
      'store',
      'current-session',
      'current-app',
      'http',
      'resize-service',
      'toast-message',
      'utilities',
      'repository',
      'i18n',
      'external-links',
      'form-utility',
      'ripple',
      'static-collections',
      'filter-list',
      'fixtures',
      'hyspa-action-panel-service',
      'hyspa-notification-panel-service',
      'hyspa-modal-service',
      'indexed-db',
      'indexed-db-configuration'
    ],
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      featuresOff: true,
      inactiveRoutes: [
        'organization-client-users',
        'clients'
      ]
    }
  };

  if (environment === 'development') {
    ENV.rootURL = '/';
    ENV.APP.featuresOff = false;
    ENV.APP.apiHost = "http://localhost:3000";
    ENV.APP.logoutUrl = "http://localhost:3000/logout";
  }

  if (environment === 'test') {
    ENV.rootURL = '/';
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'qa') {
    ENV.rootURL = '/';
    ENV.APP.logoutUrl = "/logout";
    ENV.APP.featuresOff = false;
  }

  if (environment === 'staging') {
    ENV.rootURL = '/';
    ENV.APP.logoutUrl = "/logout";
    ENV.APP.featuresOff = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/';
    ENV.APP.logoutUrl = "/logout";
  }

  return ENV;
};
