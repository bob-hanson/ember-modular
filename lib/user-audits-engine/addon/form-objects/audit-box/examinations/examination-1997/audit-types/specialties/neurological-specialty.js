// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import EyesBodyArea from '../body-areas/eyes';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import MusculoskeletalBodyArea from '../body-areas/musculoskeletal';
import ExtremitiesBodyArea from '../body-areas/extremities';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Neurological',
  optionValue: 'neurological',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'neurological', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      EyesBodyArea.create({ specialty: 'neurological', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'neurological', calculate97Exam: this.get('calculate97Exam') }),
      MusculoskeletalBodyArea.create({ specialty: 'neurological', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      ExtremitiesBodyArea.create({ specialty: 'neurological', atLeastOne: true, calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ tabText: 'Neurologic', specialty: 'neurological', isShaded: true, calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
