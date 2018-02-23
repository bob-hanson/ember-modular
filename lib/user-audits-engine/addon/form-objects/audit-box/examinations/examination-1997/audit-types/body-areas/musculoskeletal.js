import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Musculoskeletal',
  componentName: 'exam-elements-musculoskeletal',

  selectedNeckExamElements: null,
  selectedSpineExamElements: null,
  selectedRightUpperExamElements: null,
  selectedLeftUpperExamElements: null,
  selectedRightLowerExamElements: null,
  selectedLeftLowerExamElements: null,

  neckExamElements: null,
  spineExamElements: null,
  rightUpperExamElements: null,
  leftUpperExamElements: null,
  rightLowerExamElements: null,
  leftLowerExamElements: null,

  selectedMotorElements: null,
  motorElements: null,

  beforeHandleSpecialty() {
    setProperties(this, {
      selectedNeckExamElements: [],
      selectedSpineExamElements: [],
      selectedRightUpperExamElements: [],
      selectedLeftUpperExamElements: [],
      selectedRightLowerExamElements: [],
      selectedLeftLowerExamElements: [],

      neckExamElements: this.buildAreaExaminationArray(),
      spineExamElements: this.buildAreaExaminationArray(),
      rightUpperExamElements: this.buildAreaExaminationArray(),
      leftUpperExamElements: this.buildAreaExaminationArray(),
      rightLowerExamElements: this.buildAreaExaminationArray(),
      leftLowerExamElements: this.buildAreaExaminationArray()
    })
  },

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of gait and station', optionValue: 'gaitStation'}),
      Object.create({ optionName: 'Inspection and/or palpation of digits and nails', subLabel: 'e.g. clubbing, cyanosis, inflammatory conditions, petechiae, ischemia, infections, nodes', optionValue: 'digitsNails'})
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of the back with notation of kyphosis or scoliosis', optionValue: 'back'}),
      Object.create({ optionName: 'Examination of gait with notation of ability to undergo exercise testing and/or participation in exercise programs', optionValue: 'gait'}),
      Object.create({ optionName: 'Assessment of muscle strength and tone with notation of any atrophy or abnormal movements', subLabel: 'e.g flaccid, cog wheel, spastic', optionValue: 'muscleStrength'})
    ]);
  },

  handleMusculoskeletal() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of gait and station', optionValue: 'gaitStation'})
    ]);
  },

  handleNeurological() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Examination of gait and station', optionValue: 'gaitStation'})
      ],
      selectedMotorElements: [],
      motorElements: [
        Object.create({ optionName: 'Muscle strengths in upper and lower extremities', optionValue: 'muscleStrengths'}),
        Object.create({ optionName: 'Muscle tone in upper and lower extremites with notation of any atrophy or abnormal movements', subLabel: 'e.g. flaccid, cog wheel, spastic - e.g. fasciculation, tardive dyskinesia', optionValue: 'muscleTone'})
      ]
    });
  },

  handlePsychiatric() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Assessment of muscle strength and tone with notation of any atrophy or abnormal movements', subLabel: 'e.g flaccid, cog wheel, spastic', optionValue: 'muscleStrength'}),
      Object.create({ optionName: 'Examination of gait and station', optionValue: 'gaitStation'})
    ]);
  },

  handleRespiratory() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Assessment of muscle strength and tone with notation of any atrophy or abnormal movements', subLabel: 'e.g flaccid, cog wheel, spastic', optionValue: 'muscleStrength'}),
      Object.create({ optionName: 'Examination of gait and station', optionValue: 'gaitStation'})
    ]);
  },


  buildAreaExaminationArray() {
    return [
      Object.create({ optionName: 'Inspection and/or palpation with notation of prsence of any misalignment, asymmetry, creptation, defects, tenderness, masses, effusions', optionValue: 'inspection'}),
      Object.create({ optionName: 'Assessment of range of motion with notation of any pain, crepitation, or contracture', optionValue: 'rangeOfMotion'}),
      Object.create({ optionName: 'Assessment of stability with notation of any dislocation (luxation), subluxation, or laxity', optionValue: 'stability'}),
      Object.create({ optionName: 'Assessment of muscle strength and tone with notation of any atrophy or abnormal movements', subLabel: 'e.g flaccid, cog wheel, spastic', optionValue: 'muscleStrength'})
    ]
  },

  calculateElements() {
    var examElementsCount = get(this, 'selectedExamElements').length,
        neckCount = get(this, 'selectedNeckExamElements').length,
        spineCount = get(this, 'selectedSpineExamElements').length,
        rightUpperCount = get(this, 'selectedRightUpperExamElements').length,
        leftUpperCount = get(this, 'selectedLeftUpperExamElements').length,
        rightLowerCount = get(this, 'selectedRightLowerExamElements').length,
        leftLowerCount = get(this, 'selectedLeftLowerExamElements').length,
        motorCount = get(this, 'selectedMotorElements') ? get(this, 'selectedMotorElements').length : 0;

    set(this, 'elementsCount', examElementsCount + neckCount + spineCount + rightUpperCount + leftUpperCount + rightLowerCount + leftLowerCount + motorCount);
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
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        completedSubAreasCount = 0;

    if (get(this, 'selectedNeckExamElements').length === get(this, 'neckExamElements').length) {
      completedSubAreasCount++;
    }

    if (get(this, 'selectedSpineExamElements').length === get(this, 'spineExamElements').length) {
      completedSubAreasCount++;
    }

    if (get(this, 'selectedRightUpperExamElements').length === get(this, 'rightUpperExamElements').length) {
      completedSubAreasCount++;
    }

    if (get(this, 'selectedLeftUpperExamElements').length === get(this, 'leftUpperExamElements').length) {
      completedSubAreasCount++;
    }

    if (get(this, 'selectedRightLowerExamElements').length === get(this, 'rightLowerExamElements').length) {
      completedSubAreasCount++;
    }

    if (get(this, 'selectedLeftLowerExamElements').length === get(this, 'leftLowerExamElements').length) {
      completedSubAreasCount++;
    }

    set(this, 'completeBodyArea', allExamElements && (completedSubAreasCount > 3));
  },

  setCompleteBodyAreaNeurological() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        allMotorElements = get(this, 'selectedMotorElements').length === get(this, 'motorElements').length;

    set(this, 'completeBodyArea', allExamElements && allMotorElements);
  },

  setCompleteBodyAreaDefault() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;

    set(this, 'completeBodyArea', allExamElements);
  }

});
