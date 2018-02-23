import BaseAuditboxFormObject from '../../base-objects/base-auditbox-form-object';
import ExamCalculation from '../../../../mixins/exam-calculations-95';

import CmsAuditType from './audit-types/cms-audit-type';
import NoridianAuditType from './audit-types/noridian-audit-type';
import NovitasAuditType from './audit-types/novitas-audit-type';
import MarshfieldAuditType from './audit-types/marshfield-audit-type';
import NgsAuditType from './audit-types/ngs-audit-type';

export default BaseAuditboxFormObject.extend(
  ExamCalculation, {
  section: 'examination.pe95',
  selectedExamAuditType: null,
  examAuditTypeOptions: null,

  afterSetDefaults() {
    this.set('examAuditTypeOptions', [
      CmsAuditType.create(),
      NoridianAuditType.create(),
      NovitasAuditType.create(),
      MarshfieldAuditType.create(),
      NgsAuditType.create()
    ]);
  }

});
