import Mixin from '@ember/object/mixin';
import { get, set } from '@ember/object';
import { not, or } from '@ember/object/computed';

export default Mixin.create({
  // isSuperOrganizationUser: false,
  isNotSuperOrganizationUser: not('isSuperOrganizationUser'),
  // isOrganizationUser: false,
  isNotOrganizationUser: not('isOrganizationUser'),
  canAccessAdmin: or('isSuperOrganizationUser', 'isOrganizationUser'),
  cannotAccessAdmin: not('canAccessAdmin'),

  hasComplianceProduct: false,
  hasAuditProduct: false,
  hasFacilityProduct: false,

  isAuditSuperUser: false,
  isNotAuditSuperUser: not('isAuditSuperUser'),
  isAuditAdminUser: false,
  isNotAuditAdminUser: not('isAuditAdminUser'),
  isAuditConsultingUser: false,
  isNotAuditConsultingUser: not('isAuditConsultingUser'),
  isAuditUser: false,
  isNotAuditUser: not('isAuditUser'),
  isAuditEducationUser: false,
  isNotAuditEducationUser: not('isAuditEducationUser'),
  isComplianceClientAdmin: false,
  isNotComplianceClientAdmin: not('isComplianceClientAdmin'),
  isComplianceOfficer: false,
  isNotComplianceOfficer: not('isComplianceOfficer'),
  isComplianceAuditManager: false,
  isNotComplianceAuditManager: not('isComplianceAuditManager'),
  isComplianceTrainingManager: false,
  isNotComplianceTrainingManager: not('isComplianceTrainingManager'),
  isComplianceIncidentManager: false,
  isNotComplianceIncidentManager: not('isComplianceIncidentManager'),
  isComplianceAtttestationManager: false,
  isNotComplianceAtttestationManager: not('isComplianceAtttestationManager'),
  isComplianceDocumentManager: false,
  isNotComplianceDocumentManager: not('isComplianceDocumentManager'),
  isComplianceEmployeeManager: false,
  isNotComplianceEmployeeManager: not('isComplianceEmployeeManager'),
  isComplianceLimited: false,
  isNotComplianceLimited: not('isComplianceLimited'),

  setUserRoles(userRoles) {
    userRoles.forEach(this.addUserRole.bind(this));
  },

  checkForAdminAccess() {
    if (get(this, 'doesNotHaveAdminProduct')) {
      get(this, 'products').then(this.checkforCurrentAdminProduct.bind(this));
    }
  },

  checkforCurrentAdminProduct(currentProducts) {
    var self = this;
    currentProducts.forEach(function (currentProduct) {
      if (currentProduct.get('isAdmin')) {
        self.set('hasAdminProduct', true);
      }
    });
  },

  addUserRole(userRole) {
    switch(userRole.get('name')) {
      case 'Audit Super User':
        set(this, 'isAuditSuperUser', true);
        break;
      case 'Audit Admin User':
        set(this, 'isAuditAdminUser', true);
        break;
      case 'Audit User':
        set(this, 'isAuditUser', true);
        break;
      case 'Audit Education User':
        set(this, 'isAuditEducationUser', true);
        break;
      case 'Compliance Client Admin':
        set(this, 'isComplianceClientAdmin', true);
        break;
      case 'Compliance Officer':
        set(this, 'isComplianceOfficer', true);
        break;
      case 'Compliance Audit Manager':
        set(this, 'isComplianceAuditManager', true);
        break;
      case 'Compliance Training Manager':
        set(this, 'isComplianceTrainingManager', true);
        break;
      case 'Compliance Incident Manager':
        set(this, 'isComplianceIncidentManager', true);
        break;
      case 'Compliance Atttestation Manager':
        set(this, 'isComplianceAtttestationManager', true);
        break;
      case 'Compliance Document Manager':
        set(this, 'isComplianceDocumentManager', true);
        break;
      case 'Compliance Employee Manager':
        set(this, 'isComplianceEmployeeManager', true);
        break;
      case 'Compliance Limited User':
        set(this, 'isComplianceLimited User', true);
        break;
    }
  }

});
