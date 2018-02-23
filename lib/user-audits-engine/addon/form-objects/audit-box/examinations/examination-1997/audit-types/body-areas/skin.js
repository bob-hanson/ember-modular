import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Skin',
  componentName: 'exam-elements-skin',

  selectedAreaElements: null,
  selectedEccrineElements: null,
  areaElements: null,
  eccrineElements: null,

  beforeHandleSpecialty() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection and/or palpation of skin and subcutaneous tissue', subLabel: 'e.g. stasis dermatitis, ulcers, scars, xanthomas', optionValue: 'skinInspectionPalpation' })
    ]);
  },

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of skin and subcutaneous tissue', subLabel: 'e.g. rashes, lesions, ulcers', optionValue: 'skinInpsection' }),
      Object.create({ optionName: 'Palpation of skin and subcutaneous tissue', subLabel: 'e.g.. induration, subcutaneous nodules, tightening', optionValue: 'skinPalpation' })
    ]);
  },

  handleMusculoskeletal() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Head and neck', optionValue: 'headNeck' }),
      Object.create({ optionName: 'Trunk', optionValue: 'trunk' }),
      Object.create({ optionName: 'Right upper extremity', optionValue: 'rightUpperExtremity' }),
      Object.create({ optionName: 'Left upper extremity', optionValue: 'leftUpperExtremity' }),
      Object.create({ optionName: 'Right lower extremity', optionValue: 'rightLowerExtremity' }),
      Object.create({ optionName: 'Left lower extremity', optionValue: 'leftLowerExtremity' })
    ]);
  },

  handleSkin() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Palpation of scalp and inspection of hair of scalp, eyebrows, face, chest, pubic area (when indicated), and extremities', optionValue: 'scalpPalpation' })
      ],
      selectedAreaElements: [],
      areaElements: [
        Object.create({ optionName: 'Head, including the face', optionValue: 'headFace' }),
        Object.create({ optionName: 'Neck', optionValue: 'neck' }),
        Object.create({ optionName: 'Chest, including breasts and axillae', optionValue: 'chest' }),
        Object.create({ optionName: 'Abdomen', optionValue: 'abdomen' }),
        Object.create({ optionName: 'Genitalia, groin, buttocks', optionValue: 'genitalia' }),
        Object.create({ optionName: 'Back', optionValue: 'back' }),
        Object.create({ optionName: 'Right upper extremity', optionValue: 'rightUpperExtremity' }),
        Object.create({ optionName: 'Left upper extremity', optionValue: 'leftUpperExtremity' }),
        Object.create({ optionName: 'Right lower extremity', optionValue: 'rightLowerExtremity' }),
        Object.create({ optionName: 'Left lower extremity', optionValue: 'leftLowerExtremity' })
      ],
      selectedEccrineElements: [],
      eccrineElements: [
        Object.create({ optionName: 'Inspection of eccrine and apocrine glands of skin and subcutaneous tissue with identification and location of any hyperhidrosis, chromhidrosis, or bromhidrosis', optionValue: 'eccrine' })
      ]
    });
  },

  calculateElements() {
    var examElementsCount = get(this, 'selectedExamElements') ? get(this, 'selectedExamElements').length : 0,
        areaElementsCount = get(this, 'selectedAreaElements') ? get(this, 'selectedAreaElements').length : 0,
        eccrineElementsCount = get(this, 'selectedEccrineElements') ? get(this, 'selectedEccrineElements').length : 0;

    set(this, 'elementsCount', examElementsCount + areaElementsCount + eccrineElementsCount);
  },

  setCompleteBodyArea() {
    switch(get(this, 'specialty')) {
      case 'musculoskeletal':
        this.setCompleteBodyAreaMusculoskeletal();
        break;
      case 'skin':
        this.setCompleteBodyAreaSkin();
        break;
      default:
        this.setCompleteBodyAreaDefault();
        break;
    }
  },

  setCompleteBodyAreaMusculoskeletal() {
    set(this, 'completeBodyArea', get(this, 'selectedExamElements').length > 3);
  },

  setCompleteBodyAreaSkin() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        allEccrineElements = get(this, 'eccrineElements').length === get(this, 'selectedEccrineElements').length,
        eightAreaElements = get(this, 'selectedAreaElements').length > 7;

    set(this, 'completeBodyArea', allExamElements && allEccrineElements && eightAreaElements);
  },

  setCompleteBodyAreaDefault() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;

    set(this, 'completeBodyArea', allExamElements);
  }

});
