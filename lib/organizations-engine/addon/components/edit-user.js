import { computed, get, set } from '@ember/object';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/edit-user';

export default BaseComponent.extend({
  layout,
  formType: 'edit',
  primaryButtonText: computed("", function () {
    return get(this, 'i18n').t('admin.users.forms.primaryButtonText.edit');
  }),

  currentUser: null,
  currentOrganizations: null,
  currentClients: null,
  organizationSelectOptions: null,
  clientSelectOptions: null,

  formProperties: null,

  initComponent() {
    this.buildFormProperties();
    this.formProperties = {};
  },

  buildFormProperties() {
    get(this, 'currentUser')
        .getAllRelationships()
        .then(this.setFormProperties.bind(this));
  },

  setFormProperties(relationships) {
    set(this, 'formProperties', Object.assign(
      this.buildUserProperties(),
      this.buildModuleProperties(relationships.modules),
      this.buildUserRoleProperties(relationships.modules)
    ));
  },

  buildUserProperties() {
    var currentUser = get(this, 'currentUser');
    return {
      // TODO: Setup these by filter
      selectedOrganization: currentUser.get('organization.name'),
      selectedClient: currentUser.get('client.name'),
      firstName: currentUser.get('firstName'),
      lastName: currentUser.get('lastName'),
      userDob: currentUser.get('userDob'),
      userSsn: currentUser.get('userSsn'),
      userEmail: currentUser.get('email'),
      emergencyContact: currentUser.get('emergencyContact'),
      emergencyContactPhone: currentUser.get('emergencyContactPhone'),
      userPhone: currentUser.get('phone'),
      employeeName: currentUser.get('employeeName'),
      backgroundStatus: currentUser.get('backgroundStatus'),
      dateOfHire: currentUser.get('dateOfHire'),
      dateOfBgCheck: currentUser.get('dateOfBgCheck'),
      positionTitle: currentUser.get('positionTitle'),
      immediateSupervisor: currentUser.get('immediateSupervisor'),
      employmentStatus: currentUser.get('employmentStatus')
    };
  },

  buildModuleProperties(modules) {
    if (isPresent(modules)) {
      return {
        wantsComplianceManager: modules.findBy('name', 'Compliance Manager') ? true : false,
        wantsAuditManager: modules.findBy('name', 'Audit Manager') ? true : false,
        wantsProviderAnalytics: modules.findBy('name', 'Analytics Manager') ? true : false
      };
    }
  },

  buildUserRoleProperties() {
    return {
      isClientAdministrator: false,
      isDocumentControlManager: false,
      isComplianceOfficer: false,
      isComplianceManager: false,
      isLegalManager: false,
      isAuditMonitoringManager: false,
      isEmployeeManager: false,
      isTrainingEducationManager: false,
      isLimitedUser: false,
      isIncidentReportManager: false,
      isDeviceManager: false,
      isAttestationManager: false,
      isBusinessAssociateManager: false,
      isRiskAssesmentManager: false,
      isAdminUser: false,
      isAuditor: false,
      isEducation: false,
      isNoAccess: false,
      isQA: false,
      isSuperUser: false
    };
  },

  actions: {

    triggerFormSubmitWithId(formData) {
      this.attrs.formSubmit(get(this, 'currentOrganization.id'), formData);
    }

  }
});
