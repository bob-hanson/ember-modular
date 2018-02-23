import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    return this.get('repository')
               .fetchClient(params.clientSlug)
               .then(this.handleModelSuccess.bind(this));
  },

  setupController(controller, currentClient) {
    this._super(controller, currentClient);

    controller.set('currentClient', currentClient);
  },

  afterModel(currentClient) {
    this.setSelectedModel(currentClient);
  },

  handleModelSuccess(response) {
    var currentClient = this.get('store').push(response);
    this.get('currentApp').set('currentClient', currentClient);
    return currentClient;
  },

  setSelectedModel(currentClient) {
    this.modelFor('organization.clients').setEach('isSelected', false);
    currentClient.set('isSelected', true);
  }

});
