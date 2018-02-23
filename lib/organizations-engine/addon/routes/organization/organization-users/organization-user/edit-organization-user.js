import { get } from '@ember/object';
import { hash } from 'rsvp';
import { isPresent } from '@ember/utils';
import PersistOrganizationUser from './../persist-organization-user';

export default PersistOrganizationUser.extend({

  model() {
    var orgUserModel = this.modelFor('organization.organization-users.organization-user');
    return hash({
      currentOrganizations: get(this, 'store').findAll('organization'),
      organizationSelectOptions: null,
      organizationUser: orgUserModel,
      selectedOrganizationIds: orgUserModel.getOrgnizationIds()
    });
  },

  setupController(controller, model) {
    controller.set('currentOrganizations', model.currentOrganizations);
    controller.set('organizationSelectOptions', model.organizationSelectOptions);
    controller.set('currentOrganization', this.getCurrentOrganization());
    controller.set('organizationUser', model.organizationUser);
    controller.set('selectedOrganizationIds', model.selectedOrganizationIds);
  },

  afterModel(model) {
    this.buildOrganizationSelectOptions(model);
  },

  getCurrentOrganization() {
    var currentOrganization = this.modelFor('organization');
    if (isPresent(currentOrganization)) {
      return currentOrganization;
    }
  },

  submitFormData(formData, organizationSlug) {
        get(this, 'repository')
        .updateOrganizationUser(formData, organizationSlug)
        .then(this.handleSuccessfulSave.bind(this));
  },

  handleSuccessfulSave(response) {
    get(this, 'toast').successToast(this.dynamicSaveMessage(response));
    this.modelFor('organization').reload();
    this.transitionTo('organization.organization-users');
  },

  dynamicSaveMessage(response) {
    var userName = response.first_name + " " + response.last_name;
    return userName + " have been updated.";
  },

  handleSaveFailure() {
    get(this, 'toast').errorToast(get(this, 'i18n').t('admin.users.forms.saveErrorMessage'));
  }

});
