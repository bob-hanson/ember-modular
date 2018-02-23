import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.get('repository')
               .fetchOrganizationClients(this.modelFor('organization').get('id'))
               .then(this.handleSuccessfulResponse.bind(this));
  },

  setupController(controller, currentClients) {
    this._super(controller, currentClients);
    controller.set('currentClients', currentClients);
  },

  afterModel(currentClients) {
    this.setOrganizationState(currentClients);
  },

  handleSuccessfulResponse(response) {
    return this.get('store').push(response);
  },

  setOrganizationState(substate) {
    this.modelFor('application').setEach('currentSubstate', "");
    this.modelFor('organization').set('currentSubstate', substate);
  }


});
