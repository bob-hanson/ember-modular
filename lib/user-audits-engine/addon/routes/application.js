// import Ember from 'ember';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.get('repository')
               .fetchAllUserAuditProjects()
               .then(this.loadFixtureData.bind(this));
  },

  setupController(controller, currentProjects) {
    this._super();
    controller.set('currentProjects', currentProjects);
  },

  loadFixtureData(response) {
    this.get('store').pushPayload(response);
    return this.get('store').peekAll('audit_project');
  },

  transitionToDetails(auditProject) {
    this.transitionTo('user-project', auditProject);
  },

  actions: {

    triggerTransitionToDetails(auditProject) {
      this.transitionToDetails(auditProject);
    }

  }

});
