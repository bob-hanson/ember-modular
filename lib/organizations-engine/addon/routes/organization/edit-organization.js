import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return this.modelFor('organization');
  },

  setupController(controller, currentOrganization) {
    this._super(controller, currentOrganization);
    controller.set('currentOrganization', currentOrganization);
  },

  submitFormData(currentOrganizationId, formData) {
    // this.debugFormData(formData);
    this.get('repository')
        .editOrganization(currentOrganizationId, formData)
        .then(this.handleSuccessfulSave.bind(this));
  },

  handleSuccessfulSave(response) {
    this.get('toast').successToast(this.dynamicSaveMessage(response));
    this.get('store').pushPayload(response);
    this.transitionTo('organization.organization-details', this.get('store').peekRecord('organization', response.data.id));
  },

  dynamicSaveMessage(response) {
    return "Edits to " + response.data.attributes.name + " have been saved.";
  },

  handleSaveFailure() {
    this.get('toast').errorToast(this.get('i18n').t('admin.organizations.forms.saveErrorMessage'));
  },

  actions: {

    triggerFormSubmit(currentOrganizationId, formData) {
      this.submitFormData(currentOrganizationId, formData);
    },

    triggerFormCancel() {
      this.transitionToPrevious('organizations');
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
