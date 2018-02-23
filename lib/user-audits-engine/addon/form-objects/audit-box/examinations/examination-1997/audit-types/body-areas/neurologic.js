import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Neurologic/Psychiatric',
  componentName: 'exam-elements-neurologic',

  selectedCommonExamElements: null,
  commonExamElements: null,

  selectedCranialSystemElements: null,
  cranialSystemElements: null,

  beforeHandleSpecialty() {
    setProperties(this, {
      selectedCommonExamElements: [],
      commonExamElements: [
        Object.create({ optionName: 'Orientation to time, place, and person', optionValue: 'orientation'}),
        Object.create({ optionName: 'Mood and affect', subLabel: 'e.g. depression, anxiety, agitation', optionValue: 'mood'})
      ]
    });
  },

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Test cranial nerves with notation of any deficits', optionValue: 'cranialNerves'}),
      Object.create({ optionName: 'Examination of deep tendon reflexes with notation of pathological reflexes', subLabel: 'e.g Babinski', optionValue: 'deepTendonReflexes'}),
      Object.create({ optionName: 'Examination of sensation', subLabel: 'by touch, pin, vibration, proprioception', optionValue: 'sensation'})
    ]);
  },

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Test cranial nerves with notation of any deficits', optionValue: 'cranialNerves'})
    ]);
  },

  handleMusculoskeletal() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Test coordination', subLabel: 'e.g. finger/nose, heel/knee/shin, rapid alternating movements in upper and lower extremities, evaluation of fine motor coordination in young children', optionValue: 'coordination'}),
      Object.create({ optionName: 'Examination of deep tendon reflexes with notation of pathological reflexes', subLabel: 'e.g Babinski', optionValue: 'deepTendonReflexes'}),
      Object.create({ optionName: 'Examination of sensation', subLabel: 'by touch, pin, vibration, proprioception', optionValue: 'sensation'})
    ]);
  },

  handleNeurological() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Orientation to time, place, and person', optionValue: 'orientation'}),
        Object.create({ optionName: 'Recent and remote memory', optionValue: 'memory'}),
        Object.create({ optionName: 'Attention span and concentration', optionValue: 'concentration'}),
        Object.create({ optionName: 'Language', optionValue: 'language', subLabel: 'e.g. naming objects, repeating phrases, spontaneous speech' }),
        Object.create({ optionName: 'Fund of knowledge', optionValue: 'knowledge', subLabel: 'e.g. awareness of current events, past history, vocabulary' })
      ],
      selectedCranialSystemElements: [],
      cranialSystemElements: [
        Object.create({ optionName: '2nd cranial nerve', optionValue: 'cranialNerve2', subLabel: 'test' }),
        Object.create({ optionName: '3rd, 4th, and 6th cranial nerves', optionValue: 'cranialNerve3_4_6', subLabel: 'e.g. pupils, eye movements'}),
        Object.create({ optionName: '5th cranial nerve', optionValue: 'cranialNerve5', subLabel: 'e.g. facial sensation, corneal reflexes'}),
        Object.create({ optionName: '7th cranial nerve', optionValue: 'cranialNerve7', subLabel: 'e.g. facial symmetry, strength'}),
        Object.create({ optionName: '8th cranial nerve', optionValue: 'cranialNerve8', subLabel: 'e.g. hearing with tuning fork, whispered voice and/or finger rub'}),
        Object.create({ optionName: '9th cranial nerve', optionValue: 'cranialNerve9', subLabel: 'e.g. spontaneous or reflex palate movement'}),
        Object.create({ optionName: '11th cranial nerve', optionValue: 'cranialNerve11', subLabel: 'e.g. shoulder shrug strength'}),
        Object.create({ optionName: '12th cranial nerve', optionValue: 'cranialNerve12', subLabel: 'e.g. tongue protrusion'}),
        Object.create({ optionName: 'Examination of sensation', subLabel: 'by touch, pin, vibration, proprioception', optionValue: 'sensation'}),
        Object.create({ optionName: 'Examination of deep tendon reflexes with notation of pathological reflexes', subLabel: 'e.g Babinski', optionValue: 'deepTendonReflexes'}),
        Object.create({ optionName: 'Test coordination', subLabel: 'e.g. finger/nose, heel/knee/shin, rapid alternating movements in upper and lower extremities, evaluation of fine motor coordination in young children', optionValue: 'coordination'})
      ]
    });
  },

  calculateElements() {
    var examElementsCount = get(this, 'selectedExamElements') ? get(this, 'selectedExamElements').length : 0,
        commonElementsCount = get(this, 'selectedCommonExamElements') ? get(this, 'selectedCommonExamElements').length : 0,
        cranialElementsCount = get(this, 'selectedCranialSystemElements') ? get(this, 'selectedCranialSystemElements').length : 0;

    set(this, 'elementsCount', examElementsCount + commonElementsCount + cranialElementsCount);
  },

  setCompleteBodyArea() {
    switch(get(this, 'specialty')) {
      case 'musculoskeletal':
        this.setCompleteBodyAreaMusculoskeletal();
        break;
      case 'neurological':
        this.setCompleteBodyAreaNeurological();
        break;
      default:
        this.setCompleteBodyAreaDefault();
        break;
    }
  },

  setCompleteBodyAreaMusculoskeletal() {
    var allCommonElements = get(this, 'selectedCommonExamElements').length === get(this, 'commonExamElements').length,
        allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;

    set(this, 'completeBodyArea', allCommonElements && allExamElements);
  },

  setCompleteBodyAreaNeurological() {
    var allCranialElements = get(this, 'selectedCranialSystemElements').length === get(this, 'cranialSystemElements').length,
        allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;

    set(this, 'completeBodyArea', allCranialElements && allExamElements);
  },

  setCompleteBodyAreaDefault() {
    var allCommonElements = get(this, 'selectedCommonExamElements').length === get(this, 'commonExamElements').length;

    set(this, 'completeBodyArea', allCommonElements);
  },

  setAtLeastOne() {
    set(this, 'atLeastOne', get(this, 'selectedExamElements').length > 0 || get(this, 'selectedCommonExamElements').length > 0);
  }

});
