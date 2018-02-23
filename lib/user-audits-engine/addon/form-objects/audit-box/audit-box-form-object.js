import { computed, get } from '@ember/object';
import { equal, not } from '@ember/object/computed';
import BaseAuditboxFormObject from './base-objects/base-auditbox-form-object';

import PatientData from 'user-audits-engine/form-objects/audit-box/patient-data/patient-data';
import History from './history/history';
import Examination from './examinations/examination';
import MedicalDecisionMaking from './medical-decision-making/medical-decision-making';
import TimeBasedCoding from './time-based-coding/time-based-coding';
import CriticalCareServices from './critical-care-services/critical-care-services';
import DocumentationElements from './documentation-elements/documentation-elements';
import Procedures from './procedures/procedures';
import AuditCodes from './audit-codes/audit-codes';

export default BaseAuditboxFormObject.extend({
  patientData: PatientData.create(),
  history: History.create(),
  examination: Examination.create(),
  medicalDecisionMaking: MedicalDecisionMaking.create(),
  timeBasedCoding: TimeBasedCoding.create(),
  criticalCareServices: CriticalCareServices.create(),
  documentationElements: DocumentationElements.create(),
  procedures: Procedures.create(),
  auditCodes: AuditCodes.create(),
  auditType: 'pro',
  isFacilityAudit: equal('auditType', 'facility'),
  isProAudit: not('isFacilityAudit'),

  auditNavigation: computed('isProAudit', function () {
    return get(this, 'isProAudit') ? 'pro-navigation' : 'facility-navigation';
  }),

  patientDataFormComponent: computed('isProAudit', function () {
    return get(this, 'isProAudit') ? 'patient-data-form' : `patient-facility-data-form`;
  })

});
