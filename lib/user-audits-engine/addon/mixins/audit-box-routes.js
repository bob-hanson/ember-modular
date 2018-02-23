import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';

export default Mixin.create({

  baseRoute: 'user-project.user-audits.user-audit.edit-audit.',

  patientDataRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-patient-data`;
  }),

  auditHistoryRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-audit-history`;
  }),

  auditExaminationRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-audit-examination`;
  }),

  exam95: computed('baseRoute', function () {
    return `${get(this, 'auditExaminationRoute')}.1995-pe`;
  }),

  exam97: computed('baseRoute', function () {
    return `${get(this, 'auditExaminationRoute')}.1997-pe`;
  }),

  medicalDecisionRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-medical-decision-making`;
  }),

  timeBasedCodingRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-time-based-coding`;
  }),

  criticalCareRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-critical-care-services`;
  }),

  proceduresRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-audit-procedures`;
  }),

  documentationServicesRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-audit-documentation-services`;
  }),

  auditCodesRoute: computed('baseRoute', function () {
    return `${get(this, 'baseRoute')}edit-audit-codes`;
  }),

  patientDataNextLink: computed('formObject.isProAudit', function () {
    if (get(this, 'formObject.isProAudit')) {
      return get(this, 'auditHistoryRoute');
    } else {
      return get(this, 'proceduresRoute');
    }
  }),

  patientDataNextText: computed('formObject.isProAudit', function () {
    if (get(this, 'formObject.isProAudit')) {
      return "Next: History";
    } else {
      return "Next: Procedures";
    }
  }),

  documentationServicesNextText: computed('isProAudit', function () {
    if (get(this, 'formObject.isProAudit')) {
      return "Next: ICD/EM/CPT/HCPCS Codes";
    } else {
      return "Next: Diagnosis and Procedure Codes";
    }
  })

});
