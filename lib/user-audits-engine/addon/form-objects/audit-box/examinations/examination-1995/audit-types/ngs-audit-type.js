import Object, { setProperties } from '@ember/object';
import AuditType from '../base-objects/base-95-audit-type';

export default AuditType.extend({
  optionName: 'NGS',
  optionValue: 'ngs',
  examElementOptions: null,
  organOptions: null,
  bodyOptions: null,

  isExpandedDocumentation: false,

  init() {
    this._super(...arguments);
    this.setCollections();
  },

  setCollections() {
    setProperties(this, {
      examElementOptions: [
        Object.create({ optionName: 'Details', optionValue: 'details', untrackedoptionValue: 'details' }),
        Object.create({ optionName: '1', optionValue: '1', untrackedoptionValue: 'PF' }),
        Object.create({ optionName: '2-5', optionValue: '2-5', untrackedoptionValue: 'EPF' }),
        Object.create({ optionName: '6-7', optionValue: '6-7', untrackedoptionValue: 'EPF' }),
        Object.create({ optionName: '6-7 w/detail', optionValue: '6-7 w/detail', untrackedoptionValue: 'Det' }),
        Object.create({ optionName: '8+', optionValue: '8+', untrackedoptionValue: 'Comp' })
      ],
      organOptions: [
        Object.create({ optionName: 'Constitution (for instance vitals, general appearance)', optionValue: 'constitution' }),
        Object.create({ optionName: 'Eyes', optionValue: 'eyes' }),
        Object.create({ optionName: 'Ear, Nose, Mouth, Throat', optionValue: 'ent' }),
        Object.create({ optionName: 'Cardiovascular', optionValue: 'cardiovascular' }),
        Object.create({ optionName: 'Respiratory', optionValue: 'respiratory' }),
        Object.create({ optionName: 'Gastrointestinal', optionValue: 'gastrointestinal' }),
        Object.create({ optionName: 'Genitourinary', optionValue: 'genitourinary' }),
        Object.create({ optionName: 'Musculoskeletal', optionValue: 'musculoskeletal'}),
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
      ]
    });
  }

});
