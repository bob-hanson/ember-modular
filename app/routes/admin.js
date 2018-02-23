import BaseRoute from './base-route';
import { get } from '@ember/object';

export default BaseRoute.extend({

  beforeModel(transition) {
    this._super(transition);
    this.validateRoute();
    this.resetCurrentApp('admin');
    this.resetCurrentAppClass('platform');
  },

  validateRoute() {
    if (get(this, 'sessionUser.isNotPlatformAdmin')) {
      this.transitionToLogin();
    }
  },

  transitionToUser(userSearchResult) {
    this.transitionTo('system-user-details', get(userSearchResult, 'userSlug'));
  },

  actions: {

    triggerUserSearchResultSelect(userSearchResult) {
      this.transitionToUser(userSearchResult);
    }

  }

});
