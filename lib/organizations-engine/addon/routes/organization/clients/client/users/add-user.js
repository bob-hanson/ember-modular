import { hash } from 'rsvp';
import BaseRoute from 'hyspa-base-components/routes/base-route';
import { get, set } from '@ember/object';

export default BaseRoute.extend({

  model() {
    return hash({
      currentOrganizations: this.modelFor('application'),
      currentClients: this.modelFor('organization.clients'),
      organizationSelectOptions: null,
      clientSelectOptions: null
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'currentOrganizations', model.currentOrganizations);
    set(controller, 'currentClients', model.currentClients);
    set(controller, 'organizationSelectOptions', model.organizationSelectOptions);
    set(controller, 'clientSelectOptions', model.clientSelectOptions);
  },

  afterModel(model) {
    this.buildOrganizationSelectOptions(model);
    this.buildClientSelectOptions(model);
  },

  buildOrganizationSelectOptions(model) {
    model.organizationSelectOptions = model.currentOrganizations.map(function (organization) {
      return { originalObject: organization, optionName: get(organization, 'name'), optionValue: get(organization, 'name')};
    });
  },

  buildClientSelectOptions(model) {
    model.clientSelectOptions = model.currentClients.map(function (client) {
      return { originalObject: client, optionName: get(client, 'name'), optionValue: get(client, 'name')};
    });
  },

  actions: {

    triggerFormSubmit(formData, organizationSlug, clientSlug) {
      this.submitFormData(formData, organizationSlug, clientSlug);
    },

    triggerFormCancel() {
      this.transitionToPrevious('organizations');
    },

    didTransition() {
      get(this, 'currentApp').set('isInFullScreenView', true);
    },

    willTransition() {
      get(this, 'currentApp').set('isInFullScreenView', false);
    }

  }

});
