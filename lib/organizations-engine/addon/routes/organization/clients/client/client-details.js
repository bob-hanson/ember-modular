import { get, set } from '@ember/object';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization.clients.client');
  },

  setupController(controller, currentClient) {
    this._super(controller, currentClient);
    set(controller, 'currentClient', currentClient);
  },


  afterModel() {
    this.setClientState("client-detail");
  },

  setClientState(substate) {
    this.modelFor('organization.clients').setEach('currentSubstate', "");
    this.modelFor('organization.clients.client').set('currentSubstate', substate);
  },

  retryCreateClientDatabase() {
    var currentClient = this.modelFor('organization.clients.client');
    this.setPendingState(currentClient);
    get(this, 'repository').retryCreateClient(this.modelFor('organization').get('id'), get(currentClient, 'id'))
    .then(this.updateClient.bind(this), this.handleRetryError.bind(this));

  },

  updateClient(response) {
    get(this, 'toast').successToast("Client Database Created!");
    get(this, 'store').pushPayload(response);
  },

  handleRetryError() {
    this.setErrorState();
  },

  setPendingState(currentClient) {
    currentClient.setStatus('pending');
  },

  setErrorState() {
    var currentClient = this.modelFor('organization.clients.client');
    get(this, 'toast').errorToast("Database creation failed.");
    currentClient.setStatus('failed');
  },

  actions: {

    triggerDatabaseCreationRetry() {
      this.retryCreateClientDatabase();
    }

  }

});
