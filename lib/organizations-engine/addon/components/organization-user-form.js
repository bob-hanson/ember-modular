import { computed, observer, get, set, setProperties } from '@ember/object';
import { equal, not } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import FormView from 'hyspa-form-components/components/form-view';
import OrganizationUserForm from './../mixins/organization-user-form';
import GeneralValidations from 'hyspa-form-components/mixins/general-validations';
import layout from '../templates/components/organization-user-form';

export default FormView.extend(
  OrganizationUserForm,
  GeneralValidations, {
  layout,
  store: service(),

  currentOrganizations: null,
  organizationSelectOptions: null,
  selectedOrganizations: null,
  defaultOrganizationSelectOption: null,

  isAddingSingleUser: true,
  validFileTypeDisplay: 'csv',
  validFileExtensions: null,
  bulkUploadFiles: null,
  selectedOrganizationIds: null,
  formType: null,
  isEditForm: equal('formType', 'edit'),
  isCreateForm: not('isEditForm'),

  moduleTip: computed("", function () {
    return get(this, 'i18n').t('admin.users.forms.moduleTip');
  }),

  bubbleTipMessage: computed("", function () {
    return get(this, 'i18n').t('admin.users.forms.bubbleTipMessage');
  }),

  initComponent() {
    this.setDefaults();
    this.updateTouchables(false);
    this.setSelectedOrganizations();
    this.buildFormProperties();
  },

  setDefaults() {
    setProperties(this, {
      'validFileExtensions': ['csv', 'xlsx'],
      'selectedOrganizations': [],
      'bulkUploadFiles': [],
      'selectedOrganizationIds': []
    });
  },

  buildFormProperties() {
    if (isPresent(get(this, 'organizationUser'))) {
      this.setFormProperties();
      this.bindFormProperties(get(this, 'formProperties'));
    }
  },

  setFormProperties() {
    set(this, 'formProperties', Object.assign(
      this.buildOrganizationUserProperties()
    ));
  },

  buildOrganizationUserProperties() {
    var organizationUser = get(this, 'organizationUser');
    return {
      firstName: get(organizationUser, 'firstName'),
      lastName: get(organizationUser, 'lastName'),
      userEmail: get(organizationUser, 'email')
    };
  },

  setFormObject: observer('formProperties', function () {
    var formProperties = get(this, 'formProperties');
    if (isPresent(formProperties)) {
      this.bindFormProperties(formProperties);
    }
  }),

  bindFormProperties(formProperties) {
    Object.keys(formProperties)
          .forEach(this.setFormPropertyKey.bind(this, formProperties));
  },

  setFormPropertyKey(formProperties, key) {
    set(this, key, formProperties[key]);
  },

  setSelectedOrganizations() {
    if (isPresent(get(this, 'organizationUser'))) {
      get(this, 'organizationUser.organizations')
          .then(this.setUserSelectedOrganizations.bind(this));
    } else {
      this.setUserSelectedOrganizations([get(this, 'currentOrganization')])
    }
  },

  setUserSelectedOrganizations(userOrganizations) {
    var self = this;
    get(self, 'organizationSelectOptions').forEach(function (currentOrganization) {
      userOrganizations.forEach(function (userOrganization) {
        if (get(userOrganization, 'id') === currentOrganization.optionValue) {
          get(self, 'selectedOrganizationIds').pushObject(currentOrganization.optionValue);
        }
      });
    });
  },

  updateTouchables(bool) {
    scheduleOnce('afterRender', this, this.setTouchableAttributes.bind(this, bool));
  },

  setTouchableAttributes(bool) {
    var attrs = get(this, 'touchables');
    if (isPresent(attrs)) {
      let touchableProperties = {};
      attrs.forEach(function(attr) {
        touchableProperties[attr] = bool;
      });
      setProperties(this, touchableProperties);
    }
  },

  buildFormData() {
    var fd = new FormData(),
        userId = get(this, 'organizationUser.userSlug');

    this.buildUser(fd, userId);
    this.attrs.formSubmit(fd, userId);
  },

  buildUser(fd, userId) {
    if (isPresent(userId)) {
      fd.append('user[id]', userId);
    }
    fd.append('user[first_name]', get(this, 'firstName'));
    fd.append('user[last_name]', get(this, 'lastName'));
    fd.append('user[email]', get(this, 'userEmail'));
    fd.append('organization_ids[]', get(this, 'selectedOrganizationIds'));
  },

  switchSingleBulk() {
    this.toggleProperty('isAddingSingleUser');
  },

  actions: {

    triggerFormSubmit() {
      this.buildFormData();
    },

    triggerSingleBulkSwap() {
      this.switchSingleBulk();
    },

    triggerClientSelected(selectedClient) {
      this.updateClientValue(selectedClient);
    },

    triggerShowInvalidFields() {
      this.updateTouchables(true);
    },

    triggerBackgroundStatusChanged(backgroundStatus) {
      this.updateBackgroundStatus(backgroundStatus);
    },

    triggerEmploymentTypeChanged(employmentStatus) {
      this.updateEmploymentStatus(employmentStatus);
    }

  }

});
