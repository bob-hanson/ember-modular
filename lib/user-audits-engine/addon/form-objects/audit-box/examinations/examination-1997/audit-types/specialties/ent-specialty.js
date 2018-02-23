// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import HeadFaceBodyArea from '../body-areas/head-face';
import EyesBodyArea from '../body-areas/eyes';
import EntBodyArea from '../body-areas/ent';
import NeckBodyArea from '../body-areas/neck';
import RespiratoryBodyArea from '../body-areas/respiratory';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import LymphaticBodyArea from '../body-areas/lymphatic';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Ear, Nose, and Throat',
  optionValue: 'ent',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'ent', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      HeadFaceBodyArea.create({ specialty: 'ent', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      EyesBodyArea.create({ specialty: 'ent', calculate97Exam: this.get('calculate97Exam') }),
      EntBodyArea.create({ specialty: 'ent', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeckBodyArea.create({ specialty: 'ent', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      RespiratoryBodyArea.create({ specialty: 'ent', calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'ent', calculate97Exam: this.get('calculate97Exam') }),
      LymphaticBodyArea.create({ specialty: 'ent', calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'ent', calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
