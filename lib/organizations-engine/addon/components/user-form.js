import { computed, observer, get, set } from '@ember/object';
import { alias, notEmpty, equal, not } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import FormView from 'hyspa-form-components/components/form-view';
import UserForm from '../mixins/user-form';
import layout from '../templates/components/user-form';

export default FormView.extend(
  UserForm, {
  layout,
  store: service(),
  staticCollections: service(),

  currentOrganizations: null,
  currentClients: null,
  organizationSelectOptions: null,
  clientSelectOptions: null,

  isAddingSingleUser: true,
  validFileTypeDisplay: 'csv',
  validFileExtensions: null,
  bulkUploadFiles: null,
  employmentTypes: alias('staticCollections.employmentTypes'),
  backgroundCheckTypes: alias('staticCollections.backgroundCheckTypes'),
  hasClients: notEmpty('clientSelectOptions'),
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
    this.updateTouchables(false);
  },

  setDefaults() {
    this.setProperties({
      'validFileExtensions': ['csv', 'xlsx'],
      'filteredClientSelectOptions': [],
      'bulkUploadFiles': []
    });
    this.updateTouchables(false);
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

  updateOrganizationValue(selectedOrganization) {
    scheduleOnce('afterRender', this, this.setOrganization.bind(this, selectedOrganization));
  },

  setOrganization(selectedOrganization) {
    set(this, 'selectedOrganization', selectedOrganization.optionValue);
    this.filterOrganizationClients(selectedOrganization);
  },

  filterOrganizationClients() {
    // TODO: Filter the selectedClientOptions by originalObject based on selectedOrganization clients
    // set filteredClientSelectOptions collection.
  },

  updateClientValue(selectedClient) {
    scheduleOnce('afterRender', this, this.setClient.bind(this, selectedClient));
  },

  setClient(selectedClient) {
    set(this, 'selectedClient', selectedClient.optionValue);
  },

  updateEmploymentStatus(employmentStatus) {
    scheduleOnce('afterRender', this, this.setEmploymentStatus.bind(this, employmentStatus));
  },

  setEmploymentStatus(employmentStatus) {
    set(this, 'employmentStatus', employmentStatus.optionValue );
  },

  updateBackgroundStatus(backgroundStatus) {
    scheduleOnce('afterRender', this, this.setBackgroundStatus.bind(this, backgroundStatus));
  },

  setBackgroundStatus(backgroundStatus) {
    set(this, 'backgroundStatus', backgroundStatus.optionValue);
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
      this.setProperties(touchableProperties);
    }
  },

  buildFormData() {
    var fd = new FormData();

    this.buildUser(fd);
    this.buildRoles(fd);
    this.buildModules(fd);

    // this.attrs.formSubmit(fd);
  },

  buildUser(fd) {
    fd.append('user[first_name]', get(this, 'firstName'));
    fd.append('user[last_name]', get(this, 'lastName'));
    fd.append('user[email]', get(this, 'userEmail'));
    fd.append('user[organization_id]', get(this, 'selectedOrganization.originalObject.id'));
    fd.append('user[client_id]', get(this, 'selectedClient.originalObject.id'));
    fd.append('user[city]', get(this, 'city'));
    fd.append('user[address1]', get(this, 'address1'));
    fd.append('user[address2]', get(this, 'address2'));
    fd.append('user[zip]', get(this, 'zip'));
    fd.append('user[state]', get(this, 'state'));
    fd.append('user[is_account_enabled]', get(this, 'isAccountEnabled'));
  },

  buildRoles(fd) {
    fd.append('user_role[client_administrator]', get(this, 'isClientAdministrator'));
    fd.append('user_role[document_control_manager]', get(this, 'isDocumentControlManager'));
    fd.append('user_role[compliance_officer]', get(this, 'isComplianceOfficer'));
    fd.append('user_role[compliance_manager]', get(this, 'isComplianceManager'));
    fd.append('user_role[legal_manger]', get(this, 'isLegalManager'));
    fd.append('user_role[audit_monitor_manager]', get(this, 'isAuditMonitoringManager'));
    fd.append('user_role[employee_manager]', get(this, 'isEmployeeManager'));
    fd.append('user_role[training_education_manager]', get(this, 'isTrainingEducationManager'));
    fd.append('user_role[limited_user]', get(this, 'isLimitedUser'));
    fd.append('user_role[incindent_report_manager]', get(this, 'isIncidentReportManager'));
    fd.append('user_role[device_manager]', get(this, 'isDeviceManager'));
    fd.append('user_role[attestation_manager]', get(this, 'isAttestationManager'));
    fd.append('user_role[business_associated_manager]', get(this, 'isBusinessAssociateManager'));
    fd.append('user_role[risk_assesment_manager]', get(this, 'isRiskAssesmentManager'));
    fd.append('user_role[admin_user]', get(this, 'isAdminUser'));
    fd.append('user_role[auditor]', get(this, 'isAuditor'));
    fd.append('user_role[education]', get(this, 'isEducation'));
    fd.append('user_role[no_access]', get(this, 'isNoAccess'));
    fd.append('user_role[qa]', get(this, 'isQA'));
    fd.append('user_role[super_user]', get(this, 'isSuperUser'));
  },

  buildModules(fd) {
    fd.append('module[compliance]', get(this, 'wantsComplianceManager'));
    fd.append('module[audit]', get(this, 'wantsAuditManager'));
    fd.append('module[analytics]', get(this, 'wantsProviderAnalytics'));
  },

  switchSingleBulk() {
    this.toggleProperty('isAddingSingleUser');
  },

  actions: {

    triggerSelectProduct() {

    },

    triggerFormSubmit() {
      this.buildFormData();
    },

    triggerSingleBulkSwap() {
      this.switchSingleBulk();
    },

    triggerOrganizationSelected(selectedOrganization) {
      this.updateOrganizationValue(selectedOrganization);
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
