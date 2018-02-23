import Object, { setProperties } from '@ember/object';
import AuditType from '../base-objects/base-95-audit-type';

export default AuditType.extend({
  optionName: 'Novitas',
  optionValue: 'novitas',
  radioTitle: '4x4 & 2-7, 1 w/detail + complete',
  examElementOptions: null,
  organOptions: null,
  bodyOptions: null,
  multipleAreasOptions: null,

  isCompleteExamination: false,

  init() {
    this._super(...arguments);
    this.setCollections();
  },

  setCollections() {
    setProperties(this, {
      examElementOptions: [
        Object.create({ optionName: 'Details', optionValue: 'details', untrackedoptionValue: 'details'  }),
        Object.create({ optionName: '1', optionValue: '1', untrackedoptionValue: 'PF'  }),
        Object.create({ optionName: '2-7', optionValue: '2-7', untrackedoptionValue: 'EPF'  }),
        Object.create({ optionName: '2-7 (Det)', optionValue: '2-7 (Det)', untrackedoptionValue: 'Det'  }),
        Object.create({ optionName: '4x4', optionValue: '4x4', untrackedoptionValue: 'Det'  }),
        Object.create({ optionName: '8+', optionValue: '8+', untrackedoptionValue: 'Comp'  }),
        Object.create({ optionName: 'Comp Single OS', optionValue: 'comp single os', untrackedoptionValue: 'Comp'  })
      ],
      organOptions: [
        Object.create({ optionName: 'Constitution (for instance vitals, general appearance)', optionValue: 'constitution' }),
        Object.create({ optionName: 'Eyes', optionValue: 'eyes' }),
        Object.create({ optionName: 'Ear, Nose, Mouth, Throat', optionValue: 'ent' }),
        Object.create({ optionName: 'Cardiovascular', optionValue: 'cardiovascular' }),
        Object.create({ optionName: 'Respiratory', optionValue: 'respiratory' }),
        Object.create({ optionName: 'Gastrointestinal', optionValue: 'gastrointestinal' }),
        Object.create({ optionName: 'Genitourinary', optionValue: 'genitourinary' }),
        Object.create({ optionName: 'Musculoskeletal', optionValue: 'musculoskeletal' }),
        Object.create({ optionName: 'Skin', optionValue: 'skin' }),
        Object.create({ optionName: 'Neurologic', optionValue: 'neurologic' }),
        Object.create({ optionName: 'Psychiatric', optionValue: 'psychiatric' }),
        Object.create({ optionName: 'Hematologic, Lymphatic, Immunologic', optionValue: 'hematologic' })
      ],
      bodyOptions: [
        Object.create({ optionName: 'Head including face', optionValue: 'head' }),
        Object.create({ optionName: 'Neck', optionValue: 'neck' }),
        Object.create({ optionName: 'Chest including axillae and breast', optionValue: 'chest' }),
        Object.create({ optionName: 'Back including spine', optionValue: 'back' }),
        Object.create({ optionName: 'Abdomen', optionValue: 'abdomen' }),
        Object.create({ optionName: 'Genitalia, groin, buttocks', optionValue: 'genitalia' }),
        Object.create({ optionName: 'Extremity (Arm right)', optionValue: 'armRight' }),
        Object.create({ optionName: 'Extremity (Arm left)', optionValue: 'armLeft' }),
        Object.create({ optionName: 'Extremity (Leg left)', optionValue: 'legLeft' }),
        Object.create({ optionName: 'Extremity (Leg right)', optionValue: 'legRight' })
      ],
      multipleAreasOptions: [
        Object.create({ optionName: '4 or more elements are examined from at least 4 Body Areas or Organ Systems', optionValue: '4+ elements' }),
        Object.create({ optionName: 'One or more areas and/or organ systems is documented in detail', optionValue: '1+ organs' })
      ]
    });
  }

});
