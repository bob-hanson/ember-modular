import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Genitourinary',
  componentName: 'exam-elements-genitourinary',

  selectedMaleExamElements: null,
  selectedFemaleExamElements: null,
  maleExamElements: null,
  femaleExamElements: null,

  selectedRectalExamElements: null,
  rectalExamElements: null,

  handleMultiSystem() {
    setProperties(this, {
      selectedMaleExamElements: [],
      selectedFemaleExamElements: [],
      maleExamElements: [
        Object.create({ optionName: 'Examination of external scrotal contents', optionValue: 'scrotalContents', subLabel: 'e.g. hydrocele, spermatocele, tenderness of cord, testicular mass' }),
        Object.create({ optionName: 'Examination of penis', optionValue: 'penis'}),
        Object.create({ optionName: 'Digital rectal examinatino of prostate gland', optionValue: 'conjuctivaeLids', subLabel: "e.g. size, symmetry, nodularity, and tenderness" })
      ],
      femaleExamElements: [
        Object.create({ optionName: 'Examination of external Genitalia and vagina', optionValue: 'externalGenitalia', subLabel: "e.g. general appearance, hair distribution, lesions, estrogen effect, discharge, pelvic support, cystocele, rectocele" }),
        Object.create({ optionName: 'Examination of urethra', optionValue: 'urethra', subLabel: "e.g. masses, tenderness, scarring" }),
        Object.create({ optionName: 'Examination of bladder', optionValue: 'bladder', subLabel: "e.g. fullness, masses, tenderness" }),
        Object.create({ optionName: 'Cervix', optionValue: 'cervix', subLabel: "e.g. general appearance, lesions, discharge" }),
        Object.create({ optionName: 'Uterus', optionValue: 'uterus', subLabel: "e.g. size, contour, position, mobility, tenderness, consistency, descent, or support" }),
        Object.create({ optionName: 'Adnexa/parametria', optionValue: 'conjuctivaeLids', subLabel: "e.g. masses, tenderness, organomegaly, nodularity" })
      ]
    });
  },

  handleGenitourinaryM() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Inspection of anus and perineum', optionValue: 'anusPerineum'})
      ],
      selectedMaleExamElements: [],
      maleExamElements: [
        Object.create({ optionName: 'Scrotum', optionValue: 'scrotum', subLabel: 'e.g. lesions, cysts, rashes'}),
        Object.create({ optionName: 'Epididymides', optionValue: 'epididymides', subLabel: 'e.g. size, symmetry, masses'}),
        Object.create({ optionName: 'Testes', optionValue: 'testes', subLabel: 'e.g. size symmetry, masses'}),
        Object.create({ optionName: 'Urethral meatus', optionValue: 'urethralMeatus', subLabel: 'e.g. size, location, lesions, discharge'}),
        Object.create({ optionName: 'Penis', optionValue: 'penis', subLabel: 'e.g. lesions, presence or absence of foreskin, foreskin retractability, plaque, masses, scarring, deformities'})
      ],
      selectedRectalExamElements: [],
      rectalExamElements: [
        Object.create({ optionName: 'Prostate gland', optionValue: 'prostateGland', subLabel: 'e.g. size, symmetry, nodularity, tenderness'}),
        Object.create({ optionName: 'Seminal vesicles', optionValue: 'seminalVesicles', subLabel: 'e.g. symmetry, tenderness, masses, enlargement'}),
        Object.create({ optionName: 'Sphincter tone', optionValue: 'sphincterTone'})
      ]
    })
  },

  handleGenitourinaryF() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Inspection and palpation of breasts', optionValue: 'breastsPalpation', subLabel: 'e.g. masses or lumps, tenderness, symmetry, nipple discharge'}),
        Object.create({ optionName: 'Digital rectal examination, including sphincter tone, presence of hemorrhoids, rectal masses', optionValue: 'digitalRectalExamination'})
      ],
      selectedFemaleExamElements: [],
      femaleExamElements: [
        Object.create({ optionName: 'External Genitalia', subLabel: 'e.g. general appearance, hair distribution, lesions', optionValue: 'externalGenitalia'}),
        Object.create({ optionName: 'Urethral meatus', subLabel: 'e.g. size, location, lesions, prolapse', optionValue: 'urethralMeatus'}),
        Object.create({ optionName: 'Urethra', optionValue: 'urethra', subLabel: 'e.g. masses, tenderness, scarring'}),
        Object.create({ optionName: 'Bladder', optionValue: 'bladder', subLabel: 'e.g. fullness, masses, tenderness'}),
        Object.create({ optionName: 'Vagina', optionValue: 'vagina', subLabel: 'e.g. general appearance, estrogen efffect, discharge, lesions, pelvic support, cystocele, rectocele'}),
        Object.create({ optionName: 'Cervix', optionValue: 'cervix', subLabel: 'e.g. general appearance, lesiions, discharge'}),
        Object.create({ optionName: 'Uterus', optionValue: 'uterus', subLabel: 'e.g. size, contour, position, mobility, tenderness, consistency, descent, or support'}),
        Object.create({ optionName: 'Adnexia/parametria', optionValue: 'adnexiaParametria', subLabel: 'e.g. masses, tenderness, organomegaly, nodularity'}),
        Object.create({ optionName: 'Anus and perineum', optionValue: 'anusPerineum'})
      ]
    });
  },

  calculateElements() {
    var examElementsCount = get(this, 'selectedExamElements') ? get(this, 'selectedExamElements').length : 0,
        maleElementsCount = get(this, 'selectedMaleExamElements') ? get(this, 'selectedMaleExamElements').length : 0,
        femaleElementsCount = get(this, 'selectedFemaleExamElements') ? get(this, 'selectedFemaleExamElements').length : 0,
        rectalElementsCount = get(this, 'selectedRectalExamElements') ? get(this, 'selectedRectalExamElements').length : 0;

    set(this, 'elementsCount', examElementsCount + maleElementsCount + femaleElementsCount + rectalElementsCount);
  },

  setCompleteBodyArea() {
    switch(get(this, 'specialty')) {
      case 'genitourinary-m':
        this.setCompleteBodyAreaGenitourinaryM();
        break;
      case 'genitourinary-f':
        this.setCompleteBodyAreaGenitourinaryF()
    }
  },

  setCompleteBodyAreaGenitourinaryM() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        maleExamElements = get(this, 'maleExamElements').length === get(this, 'selectedMaleExamElements').length,
        rectalExamElements = get(this, 'rectalExamElements').length === get(this, 'selectedRectalExamElements').length;

    set(this, 'completeBodyArea', allExamElements && maleExamElements && rectalExamElements);
  },

  setCompleteBodyAreaGenitourinaryF() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        femaleExamElements = get(this, 'femaleExamElements').length === get(this, 'selectedFemaleExamElements').length;

    set(this, 'completeBodyArea', allExamElements && femaleExamElements);
  }

});
