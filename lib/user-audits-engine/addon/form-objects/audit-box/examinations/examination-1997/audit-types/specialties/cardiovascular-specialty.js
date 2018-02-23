// import Ember from 'ember';
import ExamSpecialty from '../../base-objects/base-exam-specialty';

import ConstitutionalBodyArea from '../body-areas/constitutional';
import EyesBodyArea from '../body-areas/eyes';
import EntBodyArea from '../body-areas/ent';
import NeckBodyArea from '../body-areas/neck';
import RespiratoryBodyArea from '../body-areas/respiratory';
import CardiovascularBodyArea from '../body-areas/cardiovascular';
import GastrointestinalBodyArea from '../body-areas/gastrointestinal';
import MusculoskeletalBodyArea from '../body-areas/musculoskeletal';
import ExtremitiesBodyArea from '../body-areas/extremities';
import SkinBodyArea from '../body-areas/skin';
import NeurologicBodyArea from '../body-areas/neurologic';

export default ExamSpecialty.extend({
  optionName: 'Cardiovascular',
  optionValue: 'cardiovascular',

  init() {
    this._super(...arguments);
    this.setBodyAreas();
  },

  setBodyAreas() {
    this.set('bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'cardiovascular', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      EyesBodyArea.create({ specialty: 'cardiovascular', calculate97Exam: this.get('calculate97Exam') }),
      EntBodyArea.create({ specialty: 'cardiovascular', calculate97Exam: this.get('calculate97Exam') }),
      NeckBodyArea.create({ specialty: 'cardiovascular', calculate97Exam: this.get('calculate97Exam') }),
      RespiratoryBodyArea.create({ specialty: 'cardiovascular', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'cardiovascular', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      GastrointestinalBodyArea.create({ specialty: 'cardiovascular', isShaded: true, calculate97Exam: this.get('calculate97Exam') }),
      MusculoskeletalBodyArea.create({ specialty: 'cardiovascular', calculate97Exam: this.get('calculate97Exam') }),
      ExtremitiesBodyArea.create({ specialty: 'cardiovascular', calculate97Exam: this.get('calculate97Exam') }),
      SkinBodyArea.create({ specialty: 'cardiovascular', calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ specialty: 'cardiovascular', isShaded: true, calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
