import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization.organization-users.organization-user');
  },

   setupController(controller, currentUser) {
    this._super(controller, currentUser);
    controller.set('currentUser', currentUser);
  },

  afterModel() {
    this.setUserSubState("user-detail");
  },

  setUserSubState(substate) {
    this.modelFor('organization.organization-users').setEach('currentSubstate', "");
    this.modelFor('organization.organization-users.organization-user').set('currentSubstate', substate);
  },

  transitionToUserEdit(currentUser) {
    this.transitionTo('organization.organization-users.organization-user.edit-organization-user', currentUser.get('userSlug'));
  },

  actions: {

    triggerUserEdit(currentUser) {
      this.transitionToUserEdit(currentUser);
    }

  }


});
