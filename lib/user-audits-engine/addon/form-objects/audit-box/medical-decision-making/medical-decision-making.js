import { computed, get } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

import DiagnosesOptions from './sub-sections/diagnoses-options';
import DataReviewed from './sub-sections/data-reviewed';
import Risk from './sub-sections/risk';

export default BaseAuditboxFormObject.extend({
  section: 'medicalDecisionMaking',
  isMdmRequired: false,

  diagnosesOptions: DiagnosesOptions.create(),
  dataReviewed: DataReviewed.create(),
  risk: Risk.create(),

  mdmCalculation: computed('dataReviewed.complexityTotal', 'diagnosesOptions.numberDiagnosesManagementOptions', 'risk.selectedRiskNumber', function() {
    return this.calculateMdm();
  }),

  calculateMdm() {
    var mdmSectionResults = [get(this, 'dataReviewed.complexityTotal') || 0, get(this, 'diagnosesOptions.numberDiagnosesManagementOptions') || 0, get(this, 'risk.selectedRiskNumber') || 0].sort().reverse(),
        numberToTest = mdmSectionResults[1];

    if (numberToTest === 1) {
      return 'SF';
    } else if (numberToTest === 2) {
      return 'Low';
    } else if (numberToTest === 3) {
      return 'Mod';
    } else if (numberToTest > 3) {
      return 'High';
    } else {
      return null;
    }
  },

  setFormValues(clear) {
    if (clear) {
      this.setProperties({
        isMdmRequired: false
      });
    } else {
      let mdmJson = get(this, 'jsonPayload.medicalDecisionMaking');

      this.setProperties({
        isMdmRequired: mdmJson.isMdmRequired
      });
    }
  },

  resetChildrenObjects() {
    get(this, 'diagnosesOptions').resetObject();
    get(this, 'dataReviewed').resetObject();
    get(this, 'risk').resetObject();
  },

  clearChildrenObject() {
    get(this, 'diagnosesOptions').clearObject();
    get(this, 'dataReviewed').clearObject();
    get(this, 'risk').clearObject();
  }

});
