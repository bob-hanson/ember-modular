import Object, { computed, get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Constitutional',
  componentName: 'exam-elements-constitutional',
  isVitals: false,
  vitalsOptions: null,
  selectedVitals: null,

  isVitalsNumber: computed('isVitals', function() {
    return get(this, 'isVitals') ? 1 : 0;
  }),

  beforeHandleSpecialty() {
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      selectedExamElements: [],
      examElements: [
        Object.create({ optionName: 'General appearance of patient', subLabel: 'e.g. development, nutrition, body habitus, deformities, attention to grooming', optionValue: 'generalAppearance' })
      ],
      vitalsOptions: [
        Object.create({ optionName: 'Sitting or standing blood pressure', optionValue: 'sittingBloodPressure' }),
        Object.create({ optionName: 'Supine blood pressure', optionValue: 'supineBloodPressure' }),
        Object.create({ optionName: 'Pulse rate and regularity', optionValue: 'pulseAndRegularity' }),
        Object.create({ optionName: 'Respiration', optionValue: 'respiration' }),
        Object.create({ optionName: 'Temperature', optionValue: 'temperature' }),
        Object.create({ optionName: 'Height', optionValue: 'height' }),
        Object.create({ optionName: 'Weight', optionValue: 'weight' })
      ],
      selectedVitals: []
    });
  },

  handleEnt() {
    get(this, 'examElements').pushObject(Object.create({ optionName: 'Assessment of ability to communicate and quality of voice', subLabel: 'e.g. use of sign language or other communication aids', optionValue: 'abilityToCommunicate' }));
  },

  calculateElements() {
    set(this, 'elementsCount', get(this, 'selectedExamElements').length + get(this, 'isVitalsNumber'));
  },

  setCompleteBodyArea() {
    var isComplete = get(this, 'isVitals') && (get(this, 'selectedExamElements').length === get(this, 'examElements').length);
    set(this, 'completeBodyArea', isComplete);
  }

});
