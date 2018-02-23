import Object, { set } from '@ember/object';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import EyesBodyArea from '../body-areas/eyes';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Eye',
  optionValue: 'eye',

  init() {
    this._super(...arguments);
    this.setExamElementOptions();
    this.setBodyAreas();
  },

  setExamElementOptions() {
    set(this, 'examElementOptions', [
      Object.create({ optionName: 'Details', optionValue: 'details' }),
      Object.create({ optionName: '1-5', optionValue: 'PF' }),
      Object.create({ optionName: '6-8', optionValue: 'EPF' }),
      Object.create({ optionName: '9+', optionValue: 'Det' }),
      Object.create({ optionName: 'All in shaded border +1', optionValue: 'Comp', allInShaded: true })
    ]);
  },

  setBodyAreas() {
    set(this, 'bodyAreas', [
      EyesBodyArea.create({ specialty: 'eye', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'eye', calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
