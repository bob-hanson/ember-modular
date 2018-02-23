import Object, { get, set, setProperties } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Eyes',
  componentName: 'exam-elements-eyes',

  selectedOphthalmoscopicExamElements: null,
  ophthalmoscopicExamElements: null,

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of conjunctivae and lids', optionValue: 'conjuctivaeLids'}),
      Object.create({ optionName: 'Examination of pupils and irises', subLabel: 'e.g. reaction to light and accommodation, size, and symmetry', optionValue: 'pupilsIrises'}),
      Object.create({ optionName: 'Ophthalmoscopic examination of optic discs and posterior segments', subLabel: 'e.g. size, C/D ration, appearance - e.g. vessel changes, exudes, hemorrhages', optionValue: 'opticDisks' })
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of conjunctivae and lids', subLabel: 'e.g. xanthelasma', optionValue: 'conjunctivaeLids'})
    ]);
  },

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Test of ocular motility, including primary gaze alignment', optionValue: 'ocularMotility'})
    ]);
  },

  handleEye() {
    setProperties(this, {
      examElements: [
        Object.create({ optionName: 'Test of Visual Acuity', subLabel: 'Does not include determination of refractive error', optionValue: 'visualAcuity'}),
        Object.create({ optionName: 'Gross visual field testing by confrontation', optionValue: 'grossVisualField'}),
        Object.create({ optionName: 'Test of ocular motility, including primary gaze alignment', optionValue: 'ocularMotility'}),
        Object.create({ optionName: 'Inspection of bulbar and palpebral conjunctivae', optionValue: 'bulbarInspection'}),
        Object.create({ optionName: 'Examination of ocular adnexae, including lids, lacrimal glands, lacrimal drainage, orbits, and preauricular lymph nodes', subLabel: 'e.g. ptosis or lagophthalmos', optionValue: 'ocularAdnexae'}),
        Object.create({ optionName: 'Examination of pupils and irises, including shape, direct and consensual reaction (afferent pupil), size, and morphology', subLabel: 'e.g. anisocoria', optionValue: 'pupilsIrises'}),
        Object.create({ optionName: 'Slit lamp examination of the corneas, including epithelium, stroma, endothelium, and ter film', optionValue: 'slitLAmpCorneas'}),
        Object.create({ optionName: 'Slit lamp examination of the anterior chambers, including depth, cells, and flare', optionValue: 'slitLampAnteriorChambers'}),
        Object.create({ optionName: 'Slit lamp examination of the lenses, including clarity, anterior and posterior capsule, cortex, and nucleus', optionValue: 'slitLampLenses'}),
        Object.create({ optionName: 'Measurement of intraocular pressures', subLabel: 'except in children and patients with trauma or infectious disease', optionValue: 'intraocularPressures'})
      ],
      ophthalmoscopicExamElements: [
        Object.create({ optionName: 'Optic discs, including size, C/D ratio, appearance and nerve fiber layer', subLabel: 'e.g. atrophy, cupping tumor elevation', optionValue: 'opticDiscs'}),
        Object.create({ optionName: 'Posterior segments, including retinal and vessels', subLabel: 'e.g. exudiates and hemorrhages', optionValue: 'posteriorSegments'})
      ],
      selectedOphthalmoscopicExamElements: []
    });
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of conjunctivae and lids', optionValue: 'conjunctivaeLids'})
    ]);
  },

  handleNeurological() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Ophthalmoscopic examination of optic discs and posterior segments', subLabel: 'e.g. size, C/D ration, appearance - e.g. vessel changes, exudes, hemorrhages', optionValue: 'opticDisks'})
    ]);
  },

  handleSkin() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of conjunctivae and lids', optionValue: 'conjunctivaeLids'})
    ]);
  },

  calculateElements() {
    var examElementsCount = get(this, 'selectedExamElements') ? get(this, 'selectedExamElements').length : 0,
        ophthalmoscopicExamElementsCount = get(this, 'selectedOphthalmoscopicExamElements') ? get(this, 'selectedOphthalmoscopicExamElements').length : 0;

    set(this, 'elementsCount', examElementsCount + ophthalmoscopicExamElementsCount);
  },

  setCompleteBodyArea() {
    switch(get(this, 'specialty')) {
      case 'eye':
        this.setCompleteBodyAreaEye();
        break;
      default:
        this.setCompleteBodyAreaDefault();
        break;
    }
  },

  setCompleteBodyAreaEye() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length,
        allOphthalmoscopicExamElements = get(this, 'selectedOphthalmoscopicExamElements').length === get(this, 'ophthalmoscopicExamElements').length;
    set(this, 'completeBodyArea', allExamElements && allOphthalmoscopicExamElements);
  },

  setCompleteBodyAreaDefault() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;

    set(this, 'completeBodyArea', allExamElements);
  }

});
