import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

import Pe95Examination from './examination-1995/pe95-examination';
import Pe97Examination from './examination-1997/pe97-examination';

export default BaseAuditboxFormObject.extend({
  pe95: Pe95Examination.create(),
  pe97: Pe97Examination.create(),

  selectedExamKey: 'pe95',
  selectedExam: computed('selectedExamKey', function() {
    var selectedExamKey = get(this, 'selectedExamKey');
    if (selectedExamKey) {
      return get(this, selectedExamKey);
    }
  }),

  examCalculation: alias('selectedExam.examCalculation')

  // examCalculation: computed('selectedExam', function() {
  //   var selectedExam = this.get('selectedExam');
  //   if (selectedExam) {
  //     return this.get(selectedExam).get('examCalculation');
  //   }
  // })

})
