import { isPresent } from '@ember/utils';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import PersistOrganizationUser from './persist-organization-user';

export default PersistOrganizationUser.extend({

  validateRouteAccess() {
    if (get(this, 'isNotSuperOrganizationUser')) {
      this.transitionToPrevious('organization-users');
      get(this, 'toast').errorToast('Unauthorized');
    }
  },

  model() {
    return hash({
      currentOrganizations: get(this, 'repository').fetchAllOrganizations(),
      organizationSelectOptions: null
    });
  },

  setupController(controller, model) {
    controller.set('currentOrganizations', model.currentOrganizations);
    controller.set('organizationSelectOptions', model.organizationSelectOptions);
    controller.set('currentOrganization', this.getCurrentOrgnaization());
  },

  afterModel(model) {
    model.currentOrganizations = get(this, 'store').push(model.currentOrganizations);
    this.buildOrganizationSelectOptions(model);
  },

  getCurrentOrgnaization() {
    var currentOrganization = this.modelFor('organization');
    if (isPresent(currentOrganization)) {
      return currentOrganization;
    }
  },

  submitFormData(formData, organizationSlug) {
    get(this, 'repository')
    .createOrganizationUser(formData, organizationSlug)
    .then(this.handleSuccessfulSave.bind(this));
  },

  handleSuccessfulSave(response) {
    // this.addNewUserToOrganizationUsers(response);
    get(this, 'toast').successToast(this.dynamicSaveMessage(response));
    this.modelFor('organization').reload();
    this.transitionTo('organization.organization-users');
  },

  // addNewUserToOrganizationUsers(response) {
  //   this.get('store').pushPayload(response);
  //   this.modelFor('organization')
  //       .get('organizationUsers')
  //       .pushObject(this.get('store').peekRecord('user', response.data.id));
  // },

  dynamicSaveMessage(response) {
    var userName = response.first_name + " " + response.last_name;
    return userName + " have been created.";
  },

  handleSaveFailure() {
    get(this, 'toast').errorToast(get(this, 'i18n').t('admin.users.forms.saveErrorMessage'));
  }

});
