import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization').get('users');
  },

  setupController(controller, currentUsers) {
    this._super(controller, currentUsers);
    controller.set('currentApp', this.get('currentApp'));
    controller.set('currentOrganization', this.modelFor('organization'));
    controller.set('currentUsers', currentUsers);
  },

  afterModel() {
    this.setOrganizationState("users");
  },

  setOrganizationState(substate) {
    this.modelFor('application').setEach('currentSubstate', "");
    this.modelFor('organization').set('currentSubstate', substate);
  },




});
