import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Cardiovascular',
  componentName: 'exam-elements-cardiovascular',

  examinationOfElements: null,
  selectedExaminationOfElements: null,

  beforeHandleSpecialty() {
    this.setAdditionalProperties();
  },

  setAdditionalProperties() {
    setProperties(this, {
      selectedExaminationOfElements: [],
      examinationOfElements: [
        Object.create({ optionName: 'Carotid arteries', subLabel: 'e.g. pulse amplitude, bruits', optionValue: 'carotidArteries' }),
        Object.create({ optionName: 'Abdominal aorta', subLabel: 'e.g. size, bruits', optionValue: 'abnominalAorta' }),
        Object.create({ optionName: 'Femoral arteries', subLabel: 'e.g. pulse amplitude, bruits', optionValue: 'femoralArteries' }),
        Object.create({ optionName: 'Pedal pulses', subLabel: 'e.g. pulse amplitude', optionValue: 'pedalPulses' }),
        Object.create({ optionName: 'Extremities for edema and/or varicosities', optionValue: 'extremitiesEdema' })
      ]
    });
  },

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Palpatation of heart', subLabel: 'e.g. location, size thrills', optionValue: 'heartPalpatation' }),
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' })
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Palpatation of heart', subLabel: 'e.g. location, size thrills', optionValue: 'heartPalpatation' }),
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Measurement of blood pressure in two or more extremites when indicated', subLabel: 'e.g. aortic dissection, coarctation', optionValue: 'bloodPressure' })
    ]);
  },

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleGenitourinaryM() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleGenitourinaryF() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleMusculoskeletal() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleNeurological() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of carotid arteries', subLabel: 'e.g. pulse amplitude, bruits', optionValue: 'examinationCaratidArteries' }),
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleRespiratory() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Auscultation of heart with notation abnormal sounds and murmurs', optionValue: 'heartAuscultation' }),
      Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  handleSkin() {
    set(this, 'examElements', [
        Object.create({ optionName: 'Examination of peripheral vascular system by observation and palpatation', subLabel: 'e.g swelling, varicosities - pulses, temperature, edema, tenderness', optionValue: 'peripheralVascularSystem' })
    ]);
  },

  calculateElements() {
    set(this, 'elementsCount', get(this, 'selectedExamElements').length + get(this, 'selectedExaminationOfElements').length);
  },

  setCompleteBodyArea() {
    switch(get(this, 'specialty')) {
      case 'cardiovascular':
        this.setCompleteBodyAreaCardiovascular();
        break;
      default:
        this.setCompleteBodyAreaDefault();
        break;
    }
  },

  setCompleteBodyAreaCardiovascular() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        allExaminationOfElements = get(this, 'examinationOfElements').length === get(this, 'selectedExaminationOfElements').length;

    set(this, 'completeBodyArea', allExamElements && allExaminationOfElements);

  },

  setCompleteBodyAreaDefault() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;

    set(this, 'completeBodyArea', allExamElements);
  }

});
