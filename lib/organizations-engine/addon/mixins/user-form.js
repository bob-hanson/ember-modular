import Mixin from '@ember/object/mixin';
import { notEmpty, not, and, or } from '@ember/object/computed';

export default Mixin.create({
  selectedOrganization: null,
  selectedClient: null,
  firstName: null,
  lastName: null,
  userDob: null,
  userSsn: null,
  userEmail: null,
  emergencyContact: null,
  emergencyContactPhone: null,
  userPhone: null,
  employeeName: null,
  backgroundStatus: null,
  dateOfHire: null,
  dateOfBgCheck: null,
  positionTitle: null,
  immediateSupervisor: null,
  employmentStatus: null,

  wantsComplianceManager: false,
  wantsAuditManager: false,
  wantsProviderAnalytics: false,

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
  isSuperUser: false,

  formProperties: null,

  touchables: [
    'organizationIsTouched',
    'clientIsTouched',
    'firstNameIsTouched',
    'lasttNameIsTouched',
    'userEmailIsTouched'
  ],

  hasOrganization: notEmpty('selectedOrganization'),
  blankOrganization: not('hasOrganization'),
  hasClient: notEmpty('selectedClient'),
  blankClient: not('hasClient'),
  hasFirstName: notEmpty('firstName'),
  blankFirstName: not('hasFirstName'),
  hasLastName: notEmpty('lastName'),
  blankLastName: not('hasLastName'),
  hasUserEmail: notEmpty('userEmail'),
  blankUserEmail: not('hasUserEmail'),

  organizationIsInvalid: and('blankOrganization', 'organizationIsTouched'),
  organizationIsValid: not('organizationIsInvalid'),
  clientIsInvalid: and('blankClient', 'clientIsTouched'),
  clientIsValid: not('clientIsInvalid'),
  firstNameIsInvalid: and('blankFirstName', 'firstNameIsTouched'),
  firstNameIsValid: not('firstNameIsInvalid'),
  lastNameIsInvalid: and('blankFirstName', 'firstNameIsTouched'),
  lastNameIsValid: not('lastNameIsInvalid'),
  userEmailIsInvalid: and('blankUserEmail', 'userEmailIsTouched'),
  userEmailIsValid: not('userEmailIsInvalid'),

  hasProductSelected: or('wantsComplianceManager', 'wantsAuditManager', 'wantsProviderAnalytics'),
  productsAreEmpty: not('hasProductSelected'),
  productIsInvalid: and('productsAreEmpty', 'productGroupHasBeenTouched'),
  productIsValid: not('productIsInvalid'),

  allRequiredFieldsAreMet: and(
    'hasOrganization',
    'hasClient',
    'hasFirstName',
    'hasLastName',
    'hasUserEmail',
    'hasProductSelected')

});
