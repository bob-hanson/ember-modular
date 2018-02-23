import { computed, get, set } from '@ember/object';
import BaseAuditboxFormObject from '../../base-objects/base-auditbox-form-object';
import MultiSystem from './audit-types/multi-system-audit-type';
import SpecialtySpecific from './audit-types/specialty-specific-audit-type';
import ExamCalculation from '../../../../mixins/exam-calculations-97';

export default BaseAuditboxFormObject.extend(
  ExamCalculation, {
  section: 'examination.pe97',
  selectedExamAuditType: null,
  selectedAuditTypeIndex: computed('selectedExamAuditType', function() {
    return get(this, 'examAuditTypeOptions').findIndex(option => option.optionValue === get(this, 'selectedExamAuditType'));
  }),

  selectedAuditType: computed('selectedAuditTypeIndex', function() {
    const selectedAuditTypeIndex = get(this, 'selectedAuditTypeIndex');
    return get(this, 'examAuditTypeOptions')[selectedAuditTypeIndex];
  }),

  examAuditTypeOptions: null,

  init() {
    this._super(...arguments);
    this.setExamAuditTypeOptions();
  },

  setExamAuditTypeOptions() {
    set(this, 'examAuditTypeOptions', [
      MultiSystem.create({ calculate97Exam: get(this, 'calculate').bind(this) }),
      SpecialtySpecific.create({ calculate97Exam: get(this, 'calculate').bind(this) })
    ]);
  },

  // calculateExam() {
  //   console.log('calculate exam called');
  // }

});
