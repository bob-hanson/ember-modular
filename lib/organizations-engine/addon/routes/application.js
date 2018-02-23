import { get } from '@ember/object';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  validateRouteAccess(transition) {
    if (get(this, 'cannotAccessAdmin')) {
      transition.abort();
      get(this, 'toast').errorToast('Unauthorized');
    }
  },

  model() {
    return get(this, 'repository')
          .fetchAllOrganizations()
          .then(this.handleSuccessfulResponse.bind(this));
  },

  setupController(controller, currentOrganizations) {
    controller.set('currentOrganizations', currentOrganizations);
  },

  handleSuccessfulResponse(response) {
    get(this, 'store').push(response);
    return this.get('store').peekAll('organization').sortBy('name');
  }

});
