// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import LymphaticBodyArea from '../body-areas/lymphatic';
import MusculoskeletalBodyArea from '../body-areas/musculoskeletal';
import ExtremitiesBodyArea from '../body-areas/extremities';
import SkinBodyArea from '../body-areas/skin';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Musculoskeletal',
  optionValue: 'musculoskeletal',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'musculoskeletal', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'musculoskeletal', calculate97Exam: this.get('calculate97Exam') }),
      LymphaticBodyArea.create({ specialty: 'musculoskeletal', calculate97Exam: this.get('calculate97Exam') }),
      MusculoskeletalBodyArea.create({ specialty: 'musculoskeletal', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      ExtremitiesBodyArea.create({ specialty: 'musculoskeletal', atLeastOne: true, calculate97Exam: this.get('calculate97Exam') }),
      SkinBodyArea.create({ specialty: 'musculoskeletal', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'musculoskeletal', isShaded: true, calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
