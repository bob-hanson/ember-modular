import BaseAuditBoxFormObject from './base-audit-box-form-object';
import { setProperties, get } from '@ember/object';

export default BaseAuditBoxFormObject.extend({
  setFormValues() {
    setProperties(this, {
      reportedDrg: get(this, 'sourceModel.reportedDrg'),
      suggestedDrg: get(this, 'sourceModel.suggestedDrg'),
      auditedDrg: get(this, 'sourceModel.auditedDrg'),
      patientData: null,
      documentationElements: null,
      procedures: null
    });
  }
});
