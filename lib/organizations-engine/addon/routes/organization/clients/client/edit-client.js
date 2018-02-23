import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization.clients.client');
  },

  setupController(controller, currentClient) {
    this._super(controller, currentClient);
    controller.set('currentClient', currentClient);
  },

  submitFormData(currentClientId, formData) {
    // this.debugFormData(formData);
    this.get('repository')
        .editClient(currentClientId, formData)
        .then(this.handleSuccessfulSave.bind(this));
        // .catch(this.handleSaveFailure.bind(this));
  },

  handleSuccessfulSave(response) {
    this.get('toast').successToast(this.dynamicSaveMessage(response));
    this.get('store').pushPayload(response);
    this.transitionTo('organization.clients.client.client-details', this.modelFor('organization.clients.client'));
  },

  dynamicSaveMessage(response) {
    return "Edits to " + response.data.attributes.name + " have been saved.";
  },

  handleSaveFailure() {
    this.get('toast').errorToast(this.get('i18n').t('admin.clients.forms.saveErrorMessage'));
  },

  actions: {

    triggerFormSubmit(currentClientId, formData) {
      this.submitFormData(currentClientId, formData);
    },

    triggerFormCancel() {
      this.transitionToPrevious('application');
    },

    // didTransition() {
    //   this.get('currentApp').set('isInFullScreenView', true);
    // },
    //
    // willTransition() {
    //   this.get('currentApp').set('isInFullScreenView', false);
    // }

  }

});
