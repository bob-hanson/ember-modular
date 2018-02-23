import BaseRoute from './base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('system-user');
  },

  setupController(controller, currentUser) {
    this._super(controller, currentUser);
    controller.set('currentUser', currentUser);
  },

  transitionToUserEdit(currentUser) {
    this.transitionTo('edit-system-user', currentUser.get('userSlug'));
  },

  actions: {

    triggerUserEdit(currentUser) {
      this.transitionToUserEdit(currentUser);
    }

  }

});
