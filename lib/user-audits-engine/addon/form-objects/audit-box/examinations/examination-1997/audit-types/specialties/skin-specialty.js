// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import EyesBodyArea from '../body-areas/eyes';
import EntBodyArea from '../body-areas/ent';
import NeckBodyArea from '../body-areas/neck';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import GastrointestinalBodyArea from '../body-areas/gastrointestinal';
import LymphaticBodyArea from '../body-areas/lymphatic';
import ExtremitiesBodyArea from '../body-areas/extremities';
import SkinBodyArea from '../body-areas/skin';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Skin/Integumentary',
  optionValue: 'skin-integumentary',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'skin', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      EyesBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') }),
      EntBodyArea.create({ specialty: 'skin', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeckBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') }),
      GastrointestinalBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') }),
      LymphaticBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') }),
      ExtremitiesBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') }),
      SkinBodyArea.create({ specialty: 'skin', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'skin', calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
