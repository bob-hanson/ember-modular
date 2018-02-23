import Application from '@ember/application';
import LinkComponent from '@ember/routing/link-component';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { computed, get } from '@ember/object';
import { alias, notEmpty, and } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { typeOf, isEmpty } from '@ember/utils';

let App;

App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    organizationsEngine: {
      dependencies: {
        services: config.baseServices
      }
    },
    complianceRisks: {
      dependencies: {
        services: config.baseServices
      }
    },
    auditProjectsEngine: {
      dependencies: {
        externalRoutes: {
          "audit-projects": 'am.audit-projects',
          "user-projects": 'am.user-projects'
        },
        services: config.baseServices
      }
    },
    userAuditsEngine: {
      dependencies: {
        externalRoutes: {
          "audit-projects": 'am.audit-projects',
          "user-projects": 'am.user-projects'
        },
        services: config.baseServices
      }
    },
    facilityAdmin: {
      dependencies: {
        externalRoutes: {
          "facility-encounters": 'facility.facility-encounters',
          "facility-projects": 'facility.facility-projects',
          "facility-records": 'facility.facility-records',
          "facility-reporting": 'facility.facility-reporting'
        },
        services: config.baseServices
      }
    },
    facilityEncounters: {
      dependencies: {
        externalRoutes: {
          "facility-admin": 'facility.facility-admin',
          "facility-projects": 'facility.facility-projects',
          'facility-projects-pending-tasks': 'facility.facility-projects.pending-tasks',
          'facility-projects-manage-audits': "facility.facility-projects.manage-audits",
          "facility-records": 'facility.facility-records',
          "facility-reporting": 'facility.facility-reporting'
        },
        services: config.baseServices
      }
    },
    facilityProjects: {
      dependencies: {
        externalRoutes: {
          "facility-encounters": 'facility.facility-encounters',
          "facility-admin": 'facility.facility-admin',
          "facility-records": 'facility.facility-records',
          "facility-reporting": 'facility.facility-reporting'
        },
        services: config.baseServices
      }
    },
    facilityRecords: {
      dependencies: {
        externalRoutes: {
          "facility-encounters": 'facility.facility-encounters',
          "facility-projects": 'facility.facility-projects',
          "facility-admin": 'facility.facility-admin',
          "facility-reporting": 'facility.facility-reporting'
        },
        services: config.baseServices
      }
    },
    facilityReporting: {
      dependencies: {
        externalRoutes: {
          "facility-encounters": 'facility.facility-encounters',
          "facility-projects": 'facility.facility-projects',
          "facility-admin": 'facility.facility-admin',
          "facility-records": 'facility.facility-records'
        },
        services: config.baseServices
      }
    },
    providerAnalyticsEngine: {
      dependencies: {
        services: config.baseServices
      }
    }
  }
});

loadInitializers(App, config.modulePrefix);

LinkComponent.reopen({
  activeClass: 'is-active primary-border-color',
  classNames: 'primary-border-color-hover',
  classNameBindings: ['isActivePath:is-active', 'isPrimary:primary-border-color'],

  currentApp: service(),

  routeHash: alias('currentApp.currentHash'),
  hasRouteHash: notEmpty('routeHash'),
  hasActivePath: notEmpty('activePath'),
  hasModel: notEmpty('currentItem'),
  hasHashAndPath: and('hasRouteHash', 'hasActivePath'),
  hasHashAndPathAndModel: and('hasHashAndPath', 'hasModel'),

  isPrimary: alias('isActivePath'),

  isActivePath: computed('routeHash', 'hashAndPathAndModel', function() {
    if (get(this, 'hasHashAndPath')) {
      return get(this, 'routeHash').includes(`${get(this, 'activePath')}`);
    }
  }),

  currentItem: computed('models', function() {
    let model = get(this, 'models').objectAt(0);
    if (isEmpty(model) || isEmpty(get(this, 'activePath'))) { return false; }
    if (typeOf(model) === 'string') {
      return model;
    } else {
      return get(model, 'id');
    }
  })

});

export default App;
