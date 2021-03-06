// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import NeckBodyArea from '../body-areas/neck';
import RespiratoryBodyArea from '../body-areas/respiratory';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import ChestBodyArea from '../body-areas/chest';
import GastrointestinalBodyArea from '../body-areas/gastrointestinal';
import Genitourinary from '../body-areas/genitourinary';
import LymphaticBodyArea from '../body-areas/lymphatic';
import SkinBodyArea from '../body-areas/skin';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Genitourinary (M)',
  optionValue: 'genitourinary-m',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'genitourinary-m', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeckBodyArea.create({ specialty: 'genitourinary-m', calculate97Exam: this.get('calculate97Exam') }),
      RespiratoryBodyArea.create({ specialty: 'genitourinary-m', calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'genitourinary-m', calculate97Exam: this.get('calculate97Exam') }),
      ChestBodyArea.create({ specialty: 'genitourinary-m', atLeastOne: true, calculate97Exam: this.get('calculate97Exam') }),
      GastrointestinalBodyArea.create({ specialty: 'genitourinary-m', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      Genitourinary.create({ specialty: 'genitourinary-m', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      LymphaticBodyArea.create({ specialty: 'genitourinary-m', calculate97Exam: this.get('calculate97Exam') }),
      SkinBodyArea.create({ specialty: 'genitourinary-m', calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'genitourinary-m', calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
