import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization.clients.client').get('users');
  },

  setupController(controller, currentUsers) {
    this._super(controller, currentUsers);
    controller.set('currentApp', this.get('currentApp'));
    controller.set('currentUsers', currentUsers);
  },

  afterModel() {
    this.setUsersState("users");
  },

  setUsersState(substate) {
    this.modelFor('organization.clients').setEach('currentSubstate', "");
    this.modelFor('organization.clients.client').set('currentSubstate', substate);
  }
});
