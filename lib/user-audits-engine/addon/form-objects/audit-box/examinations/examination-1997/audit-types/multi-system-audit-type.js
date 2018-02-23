import Object, { set } from '@ember/object';
import AuditType from '../base-objects/base-97-audit-type';

import ConstitutionalBodyArea from './body-areas/constitutional';
import EyesBodyArea from './body-areas/eyes';
import EntBodyArea from './body-areas/ent';
import NeckBodyArea from './body-areas/neck';
import RespiratoryBodyArea from './body-areas/respiratory';
import CardiovascularBodyArea from './body-areas/cardiovascular';
import ChestBodyArea from './body-areas/chest';
import GastrointestinalBodyArea from './body-areas/gastrointestinal';
import GenitourinaryBodyArea from './body-areas/genitourinary';
import MusculoskeletalBodyArea from './body-areas/musculoskeletal';
import LymphaticBodyArea from './body-areas/lymphatic';
import SkinBodyArea from './body-areas/skin';
import NeurologicBodyArea from './body-areas/neurologic';
import PsychiatricBodyArea from './body-areas/psychiatric';

export default AuditType.extend({
  optionName: 'Multi System Exam Audit',
  optionValue: 'multi-system',
  selectedExamElement: null,
  examElementOptions: null,
  bodyAreas: null,

  init() {
    this._super(...arguments);
    this.setExamElementOptions();
    this.setBodyAreas();
  },

  setExamElementOptions() {
    set(this, 'examElementOptions', [
      Object.create({ optionName: 'Details', optionValue: 'details' }),
      Object.create({ optionName: '1-5', optionValue: 'PF' }),
      Object.create({ optionName: '6-11', optionValue: 'EPF' }),
      Object.create({ optionName: '2 in 6 or 12 in 2+', optionValue: 'Det' }),
      Object.create({ optionName: '2 in 9 areas', optionValue: 'Comp' })
    ]);
  },

  setBodyAreas() {
    set(this, 'bodyAreas', [
      ConstitutionalBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      EyesBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      EntBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      NeckBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      RespiratoryBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      CardiovascularBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      ChestBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      GastrointestinalBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      GenitourinaryBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      MusculoskeletalBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      LymphaticBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      SkinBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      NeurologicBodyArea.create({ tabText: 'Neurologic', specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') }),
      PsychiatricBodyArea.create({ specialty: 'multiSystem', calculate97Exam: this.get('calculate97Exam') })
    ]);
  }

});
