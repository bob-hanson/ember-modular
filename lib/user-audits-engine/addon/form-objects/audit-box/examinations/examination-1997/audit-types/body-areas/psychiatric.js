import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Psychiatric',
  componentName: 'exam-elements-psychiatric',

  selectedMentalStatusElements: null,
  mentalStatusElements: null,

  handleMultiSystem() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Description of patient\'s judgment and insight', optionValue: 'judgment'})
      ],
      selectedMentalStatusElements: [],
      mentalStatusElements: [
        Object.create({ optionName: 'Orientation to time, place, and person', optionValue: 'orientation'}),
        Object.create({ optionName: 'Recent and remote memory', optionValue: 'memory'}),
        Object.create({ optionName: 'Mood and affect', subLabel: 'e.g. depression, anxiety, agitation', optionValue: 'mood'})
      ]
    });
  },

  handlePsychiatric() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Description of speech including rate, volume, articulation, coherence, and spontaneity with notation of abnormalities', optionValue: 'speech', subLabel: 'e.g. perseveration, paucity of language'}),
        Object.create({ optionName: 'Description of though process, including rate of thoughts, content of thoughts, abstract reasoning, and computation', optionValue: 'thought', subLabel: 'e.g. logical vs illogical, tangential'}),
        Object.create({ optionName: 'Description of associations', optionValue: 'associations', subLabel: 'e.g. loose, tangential, circumstantial, intact'}),
        Object.create({ optionName: 'Description of abnormal or psychotic thoughts, including hallucinations, delusions, preoccupation with violence, homicidal or suicidal ideation, and obsessions', optionValue: 'psychotic'}),
        Object.create({ optionName: 'Description of the patient\'s judgment and insight', optionValue: 'judgment', subLabel: 'e.g. concerning everyday activities and social situations - concerning psychiatric condition'})
      ],
      selectedMentalStatusElements: [],
      mentalStatusElements: [
        Object.create({ optionName: 'Orientation to time, place, and person', optionValue: 'orientation'}),
        Object.create({ optionName: 'Recent and remote memory', optionValue: 'memory'}),
        Object.create({ optionName: 'Attention span and concentration', optionValue: 'concentration'}),
        Object.create({ optionName: 'Language', optionValue: 'language', subLabel: 'e.g. naming objects, repeating phrases'}),
        Object.create({ optionName: 'Fund of knowledge', optionValue: 'e.g. awareness of current events, past history, vocabulary', subLabel: 'knowledge'}),
        Object.create({ optionName: 'Mood and affect', subLabel: 'e.g. depression, anxiety, agitation, hypomania, liability', optionValue: 'mood'})
      ]
    });
  },

  calculateElements() {
    var examElementsCount = get(this, 'selectedExamElements') ? get(this, 'selectedExamElements').length : 0,
        mentalStatusElementsCount = get(this, 'selectedMentalStatusElements') ? get(this, 'selectedMentalStatusElements').length : 0;

    set(this, 'elementsCount', examElementsCount + mentalStatusElementsCount);
  }

});
