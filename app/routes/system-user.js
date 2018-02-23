import BaseRoute from './base-route';

export default BaseRoute.extend({

  model(params) {
    return this.get('repository')
               .fetchSystemUser(params.userSlug);
  },

  setupController(controller, currentUser) {
    this._super(controller, currentUser);
    controller.set('currentUser', currentUser);
  }

});
