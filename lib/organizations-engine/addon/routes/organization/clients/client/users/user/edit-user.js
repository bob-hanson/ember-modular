import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  afterModel() {
    this.setUserSubState("edit-user");
  },

  setUserSubState(substate) {
    this.modelFor('organization.clients.client.users').setEach('currentSubstate', "");
    this.modelFor('organization.clients.client.users.user').set('currentSubstate', substate);
  }
});
