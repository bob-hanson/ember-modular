import { computed, get, set } from '@ember/object';
import AuditType from '../base-objects/base-97-audit-type';

import CardiovascularSpecialty from './specialties/cardiovascular-specialty';
import MusculoskeletalSpecialty from './specialties/musculoskeletal-specialty';
import EntSpecialty from './specialties/ent-specialty';
import NeurologicalSpecialty from './specialties/neurological-specialty';
import EyeSpecialty from './specialties/eye-specialty';
import PsychiatricSpecialty from './specialties/psychiatric-specialty';
import GenitourinaryMSpecialty from './specialties/genitourinary-m-specialty';
import RespiratorySpecialty from './specialties/respiratory-specialty';
import GenitourinaryFSpecialty from './specialties/genitourinary-f-specialty';
import SkinSpecialty from './specialties/skin-specialty';
import HematologicSpecialty from './specialties/hematologic-specialty';

export default AuditType.extend({
  optionName: 'Specialty Specific Exam Audit',
  optionValue: 'specialty-specific',
  selectedExamSpecialty: null,

  selectedSpecialtyIndex: computed('selectedExamSpecialty', function() {
    return get(this, 'specialtyOptions').findIndex(option => option.optionValue === get(this, 'selectedExamSpecialty'));
  }),

  selectedSpecialty: computed('selectedSpecialtyIndex', function() {
    const selectedSpecialtyIndex = get(this, 'selectedSpecialtyIndex');
    return get(this, 'specialtyOptions')[selectedSpecialtyIndex];
  }),

  init() {
    this._super();
    this.setupSpecialtyOptions();
  },

  setupSpecialtyOptions() {
    set(this, 'specialtyOptions', [
      CardiovascularSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      MusculoskeletalSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      EntSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      NeurologicalSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      EyeSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      PsychiatricSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      GenitourinaryMSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      RespiratorySpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      GenitourinaryFSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      SkinSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') }),
      HematologicSpecialty.create({ calculate97Exam: get(this, 'calculate97Exam') })
    ]);
  }

});
