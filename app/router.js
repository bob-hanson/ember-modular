import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // Admin
  this.route('admin', { resetNamespace: true }, function () {
    // Admin Add User General Flow
    this.route('import-users', { resetNamespace: true });
    this.route('system-users', { resetNamespace: true }, function () {
      this.route('system-user', { resetNamespace: true, path: ':userSlug' }, function () {
        this.route('system-user-details', { resetNamespace: true });
        this.route('edit-system-user', { resetNamespace: true });
      });
    });

    // Organizations Flow
    this.mount('organizations-engine',{ as: 'organizations', path: '/organizations', resetNamespace: true });
  });

  // Client Scoped Routes (most work in HY is under the scope of a client)
  this.route('clients', { resetNamespace: true }, function() {
    this.route('client', { resetNamespace: true, path: ':clientSlug'}, function () {

      // Compliance Manager
      this.route('cm', { resetNamespace: true }, function() {
        this.route('compliance-dashboard', { resetNamespace: true });
        this.mount('compliance-risks', { as: 'risk-assessments', path: '/risk-assessments' });
      });

      // Audit Manager
      this.route('am', { resetNamespace: true }, function() {
        this.route('audit-dashboard', { resetNamespace: true });
        this.mount('user-audits-engine', { as: 'user-projects', path: '/user-projects' });
        this.mount('audit-projects-engine', { as: 'audit-projects', path: '/audit-projects' } );
      });

      // Facility Audits
      this.route('facility', { resetNamespace: true }, function() {
        this.mount('facility-encounters', { as: 'facility-encounters', path: '/facility-encounters' });
        this.mount('facility-projects', { as: 'facility-projects', path: '/facility-projects' });
        this.mount('facility-admin', { as: 'facility-admin', path: '/facility-admin' });
        this.mount('facility-records', { as: 'facility-records', path: '/facility-records' });
        this.mount('facility-reporting', { as: 'facility-reporting', path: '/facility-reporting' });
      });

      // Analytics
      this.route('analytics', { resetNamespace: true }, function() {
        this.mount('provider-analytics-engine', { as: 'providers', path: '/providers', resetNamespace: true });
      });

    });
  });

  this.route('projects', function() {
    this.route('outpatient', function() {
      this.route('project', function() {});
    });
  });
});

export default Router;
