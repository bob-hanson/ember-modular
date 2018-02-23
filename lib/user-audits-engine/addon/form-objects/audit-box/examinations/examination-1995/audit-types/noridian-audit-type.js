import Object, { setProperties } from '@ember/object';
import AuditType from '../base-objects/base-95-audit-type';

export default AuditType.extend({
  optionName: 'Noridian',
  optionValue: 'noridian',
  radioTitle: '1, 2-4, 5-7 + complete',
  examElementOptions: null,
  organOptions: null,
  bodyOptions: null,

  isCompleteExamination: false,

  init() {
    this._super(...arguments);
    this.setCollections();
  },

  setCollections() {
    setProperties(this, {
      examElementOptions: [
        Object.create({ optionName: 'Details', optionValue: 'details', untrackedoptionValue: 'details' }),
        Object.create({ optionName: '1', optionValue: '1', untrackedoptionValue: 'PF' }),
        Object.create({ optionName: '2-4', optionValue: '2-4', untrackedoptionValue: 'EPF' }),
        Object.create({ optionName: '5-7', optionValue: '5-7', untrackedoptionValue: 'Det' }),
        Object.create({ optionName: '8+', optionValue: '8+', untrackedoptionValue: 'Comp' }),
        Object.create({ optionName: 'Comp Single OS', optionValue: 'Comp Single OS', untrackedoptionValue: 'Comp' })
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
        Object.create({ optionName: 'Extremity (Arm Left)', optionValue: 'armLeft' }),
        Object.create({ optionName: 'Extremity (Leg left)', optionValue: 'legLeft' }),
        Object.create({ optionName: 'Extremity (Leg Right)', optionValue: 'legRight' })
      ]
    });
  }

});
