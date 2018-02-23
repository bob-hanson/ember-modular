import { get } from '@ember/object';
import { hash } from 'rsvp';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model() {
    return hash({
      currentOrganizations: get(this, 'repository').fetchAllOrganizations(),
      currentClients: get(this, 'repository').fetchOrganizationClients(),
      organizationSelectOptions: null,
      clientSelectOptions: null
    });
  },

  setupController(controller, model) {
    controller.set('currentOrganizations', model.currentOrganizations);
    controller.set('currentClients', model.currentClients);
    controller.set('organizationSelectOptions', model.organizationSelectOptions);
    controller.set('clientSelectOptions', model.clientSelectOptions);
  },

  afterModel(model) {
    model.currentClients = get(this, 'store').push(model.currentClients);
    this.buildOrganizationSelectOptions(model);
    this.buildClientSelectOptions(model);
  },

  buildOrganizationSelectOptions(model) {
    model.organizationSelectOptions = model.currentOrganizations.map(function (organization) {
      return { originalObject: organization, optionName: organization.get('name'), optionValue: organization.get('id')};
    });
  },

  buildClientSelectOptions(model) {
    model.clientSelectOptions = model.currentClients.map(function (client) {
      return { originalObject: client, optionName: client.get('name'), optionValue: client.get('name')};
    });
  },

  actions: {

    triggerFormSubmit(formData, organizationSlug, clientSlug) {
      this.submitFormData(formData, organizationSlug, clientSlug);
    },

    triggerFormCancel() {
      this.transitionToPrevious('organizations');
    }

  }

});
