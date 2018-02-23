import { get } from '@ember/object';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    return get(this, 'repository')
          .fetchOrganization(params.organizationSlug)
          .then(this.handleModelSuccess.bind(this));
  },

  handleModelSuccess(response) {
    var currentOrganization = get(this, 'store').push(response);
    currentOrganization.toggleFetched();
    get(this, 'currentApp').set('currentOrganization', currentOrganization);
    return currentOrganization;
  },

  handleModelError(transition) {
    transition.abort();
    this.transitionToPrevious('organizations');
  },

  setupController(controller, currentOrganization) {
    controller.set('currentOrganization', currentOrganization);
  },

  afterModel(currentOrganization) {
    this.setSelectedModel(currentOrganization);
  },

  setOrganizationSubstate(currentOrganization) {
    currentOrganization.set('currentSubstate', "");
  },

  setSelectedModel(currentOrganization) {
    this.modelFor('application').setEach('isSelected', false);
    currentOrganization.set('isSelected', true);
  }

});
