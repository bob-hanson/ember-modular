import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  section: 'criticalCareServices',
  
  criticalTime: null,

  setFormValues(clear) {
    if (clear) {
      this.setProperties({
        criticalTime: null
      });
    } else {
        let criticalCareServicesJson = this.get('jsonPayload.criticalCareServices');

        this.setProperties({
          criticalTime: criticalCareServicesJson.totalTime
        });
    }
  }
});
