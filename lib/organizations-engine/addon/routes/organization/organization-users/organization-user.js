import { isEmpty } from '@ember/utils';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    return this.modelFor('organization.organization-users').findBy('id', params.userSlug);
  },

  setupController(controller, currentUser) {
    this._super(controller, currentUser);

    controller.set('currentUser', currentUser);
  },

  afterModel(currentUser) {
    this.checkForMissingModel(currentUser);
    this.setSelectedModel(currentUser);
  },

  setSelectedModel(currentUser) {
    this.modelFor('organization.organization-users').setEach('isSelected', false);
    currentUser.set('isSelected', true);
  },

  checkForMissingModel(currentUser) {
    if (isEmpty(currentUser)) {
      this.replaceWith('organization.organization-users');
    }
  }

});
