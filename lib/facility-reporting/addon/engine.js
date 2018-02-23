import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix } = config;

const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies: {
    externalRoutes: [
      'facility-encounters',
      'facility-projects',
      'facility-admin',
      'facility-records'
    ],
    services: [
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
    ]
  }
});

loadInitializers(Eng, modulePrefix);

export default Eng;
