import { hash } from 'rsvp';
import { get } from '@ember/object';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  model() {
    return hash({
      currentUser: this.modelFor('system-user'),
      currentOrganizations: this.store.findAll('organization'),
      currentClients: get(this, 'repository').fetchOrganizationClients(),
      organizationSelectOptions: null,
      clientSelectOptions: null
    });
  },

  setupController(controller, model) {
    controller.set('currentUser', model.currentUser);
    controller.set('currentOrganizations', model.currentOrganizations);
    controller.set('currentClients', model.currentClients);
    controller.set('organizationSelectOptions', model.organizationSelectOptions);
    controller.set('clientSelectOptions', model.clientSelectOptions);
  },

  afterModel(model) {
    model.currentClients = this.store.push(model.currentClients);
    this.buildOrganizationSelectOptions(model);
    this.buildClientSelectOptions(model);
  },

  buildOrganizationSelectOptions(model) {
    model.organizationSelectOptions = model.currentOrganizations.map(function (organization) {
      return { originalObject: organization, optionName: organization.get('name'), optionValue: organization.get('name')};
    });
  },

  buildClientSelectOptions(model) {
    model.clientSelectOptions = model.currentClients.map(function (client) {
      return { originalObject: client, optionName: client.get('name'), optionValue: client.get('name')};
    });
  },

  submitFormData(formData) {
    // this.debugFormData(formData);
    get(this, 'repository')
        .createUser(formData)
        .then(this.handleSuccessfulSave.bind(this), this.handleSaveFailure.bind(this));
  },

  handleSuccessfulSave(response) {
    get(this, 'toast').successToast(get(this, 'i18n').t(this.dynamicSaveMessage(response)));
    get(this, 'store').pushPayload(response);
  },

  dynamicSaveMessage(response) {
    return "Edits to " + response.data.attributes.name + " have been saved.";
  },

  handleSaveFailure() {
    get(this, 'toast').errorToast(get(this, 'i18n').t('admin.users.forms.saveErrorMessage'));
  },

  afterTransition() {
    get(this, 'currentApp').set('isInFullScreenView', true);
  },

  actions: {

    triggerFormSubmit(formData) {
      this.submitFormData(formData);
    },

    triggerFormCancel() {
      this.transitionToPrevious('system-user-details');
    },

    willTransition() {
      get(this, 'currentApp').set('isInFullScreenView', false);
    }

  }

});
