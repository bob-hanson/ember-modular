import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({
  
  model() {
    return this.modelFor('organization');
  },

  setupController(controller, currentOrganization) {
   this._super(controller, currentOrganization);
   controller.set('currentOrganization', currentOrganization);
  },

  afterModel() {
    this.setOrganizationState("details");
  },

  setOrganizationState(substate) {
    this.modelFor('application').setEach('currentSubstate', "");
    this.modelFor('organization').set('currentSubstate', substate);
  }
});
