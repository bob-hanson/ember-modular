// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import HeadFaceBodyArea from '../body-areas/head-face';
import EyesBodyArea from '../body-areas/eyes';
import EntBodyArea from '../body-areas/ent';
import NeckBodyArea from '../body-areas/neck';
import RespiratoryBodyArea from '../body-areas/respiratory';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import GastrointestinalBodyArea from '../body-areas/gastrointestinal';
import LymphaticBodyArea from '../body-areas/lymphatic';
import ExtremitiesBodyArea from '../body-areas/extremities';
import SkinBodyArea from '../body-areas/skin';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Hematologic/Limphatic/Immunologic',
  optionValue: 'hli',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'hematologic', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      HeadFaceBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') }),
      EyesBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') }),
      EntBodyArea.create({ specialty: 'hematologic', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      NeckBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') }),
      RespiratoryBodyArea.create({ specialty: 'hematologic', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'hematologic', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      GastrointestinalBodyArea.create({ specialty: 'hematologic', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      LymphaticBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') }),
      ExtremitiesBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') }),
      SkinBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'hematologic', calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
