import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization.clients.client.users.user');
  },

   setupController(controller, currentUser) {
    this._super(controller, currentUser);
    controller.set('currentUser', currentUser);
  },

  afterModel() {
    this.setUserSubState("user-details");
  },

  setUserSubState(substate) {
    this.modelFor('organization.clients.client.users').setEach('currentSubstate', "");
    this.modelFor('organization.clients.client.users.user').set('currentSubstate', substate);
  },

  transitionToUserEdit(currentUser) {
    currentUser;
    // TODO: Link out of engine
    // this.transitionTo('edit-system-user', currentUser.get('userSlug'));
  },

  actions: {

    triggerUserEdit(currentUser) {
      this.transitionToUserEdit(currentUser);
    }

  }

});
