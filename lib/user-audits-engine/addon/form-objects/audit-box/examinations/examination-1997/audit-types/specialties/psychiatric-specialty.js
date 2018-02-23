import Object, { set } from '@ember/object';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import MusculoskeletalBodyArea from '../body-areas/musculoskeletal';
import PsychiatricBodyArea from '../body-areas/psychiatric';

export default ExamSpecialty.extend({
  optionName: 'Psychiatric',
  optionValue: 'psychiatric',

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
      ConstitutionalBodyArea.create({ specialty: 'psychiatric', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      MusculoskeletalBodyArea.create({ specialty: 'psychiatric', calculate97Exam: this.get('calculate97Exam') }),
      PsychiatricBodyArea.create({ specialty: 'psychiatric', isShaded: true, calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
