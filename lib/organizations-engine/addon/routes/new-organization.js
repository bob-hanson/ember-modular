import { get } from '@ember/object';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  validateRouteAccess() {
    if (get(this, 'isNotSuperOrganizationUser')) {
      this.transitionToPrevious('organizations');
      get(this, 'toast').errorToast('Unauthorized');
    }
  },

  submitFormData(formData) {
    get(this, 'repository')
    .createOrganization(formData)
    .then(this.handleSuccessfulSave.bind(this), this.handleSaveFailure.bind(this));
  },

  handleSuccessfulSave(response) {
    var newOrganization;
    get(this, 'toast').successToast(this.dynamicSaveMessage(response));
    get(this, 'store').pushPayload(response);
    newOrganization = get(this, 'store').peekRecord('organization', response.data.id);
    this.modelFor('application').pushObject(newOrganization);
    this.transitionTo('organization.organization-details', newOrganization);
  },

  dynamicSaveMessage(response) {
    return "Edits to " + response.data.attributes.name + " have been saved.";
  },

  handleSaveFailure() {
    get(this, 'toast').errorToast(get(this, 'i18n').t('admin.organizations.forms.saveErrorMessage'));
  },

  actions: {

    triggerFormSubmit(formData) {
      this.submitFormData(formData);
    },

    triggerFormCancel() {
      this.transitionToPrevious('organizations');
    }

  }

});
