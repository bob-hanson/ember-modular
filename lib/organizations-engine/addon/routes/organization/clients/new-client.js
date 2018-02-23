import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('currentOrganization', this.modelFor('organization'));
  },

  submitFormData(formData) {
    this.get('repository')
        .createClient(formData)
        .then(this.handleSuccessfulSave.bind(this), this.handleSaveFailure.bind(this));
  },

  handleSuccessfulSave(response) {
    var client;
    this.get('store').pushPayload(response);
    this.get('toast').successToast(this.get('i18n').t(this.dynamicSaveMessage(response)));

    client = this.get('store').peekRecord('client', response.data.id);
    this.modelFor('organization.clients').pushObject(client);
    this.transitionTo('organization.clients.client.client-details', client);
  },

  dynamicSaveMessage(response) {
    return response.data.attributes.name + " has been created.";
  },

  handleSaveFailure() {
    this.get('toast').errorToast(this.get('i18n').t('admin.clients.forms.saveErrorMessage'));
  },

  actions: {

    triggerFormSubmit(formData) {
      this.submitFormData(formData);
    },

    triggerFormCancel() {
      this.transitionToPrevious('organization.clients');
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
