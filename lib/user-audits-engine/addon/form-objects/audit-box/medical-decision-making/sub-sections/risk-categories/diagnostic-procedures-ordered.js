import Object, { setProperties } from '@ember/object';
import BaseRiskCategory from '../../base-objects/base-risk-category';

export default BaseRiskCategory.extend({
  categoryKey: "diagnosticProceduresOrdered",

  setupDefaults() {
    setProperties(this, {
      minimalElements: [
        Object.create({ optionName: 'Laboratory rests requiring venipuncture', optionValue: 'venipunctureLabTest' }),
        Object.create({ optionName: 'Chest x-rays', optionValue: 'chestXRays' }),
        Object.create({ optionName: 'EKG/EEG', optionValue: 'ekgEEG' }),
        Object.create({ optionName: 'Urinalysis', optionValue: 'urinalysis' }),
        Object.create({ optionName: 'Ultrasound', subLabel: 'e.g. echo', optionValue: 'ultrasound' }),
        Object.create({ optionName: 'KOH prep', optionValue: 'kohPrep' })
      ],
      lowElements: [
        Object.create({ optionName: 'Physiologic tests not under stress', subLabel: 'e.g. pulmonary function tests', optionValue: 'physiologicTestsNotUnderStress' }),
        Object.create({ optionName: 'Non-cardiovascular imaging studies with contrast', subLabel: 'e.g. barium enema', optionValue: 'nonCardiovascularImaging' }),
        Object.create({ optionName: 'Superficial needle biopsies', optionValue: 'superficialNeedle' }),
        Object.create({ optionName: 'Clinical laboratory tests requiring arterial puncture', optionValue: 'labTestsArterialPuncture' }),
        Object.create({ optionName: 'Skin biopsies', optionValue: 'skinBiopsies' })
      ],
      moderateElements: [
        Object.create({ optionName: 'Physiologic tests under stress', subLabel: 'e.g. cardiac stress test, fetal contraction stress test', optionValue: 'physiologicTests' }),
        Object.create({ optionName: 'Diagnostic endoscopies with no identified risk factors', optionValue: 'diagnosticEndoscopies' }),
        Object.create({ optionName: 'Deep needle or incisional biopsy', optionValue: 'deepNeedle' }),
        Object.create({ optionName: 'Cardiovascular imaging studies with contrast and no identified risk factors', subLabel: 'e.g. arteriogram cardiac cath', optionValue: 'cardiovascularImaging' }),
        Object.create({ optionName: 'Obtain fluid from body cavity', subLabel: 'e.g. lumbar puncture, thoracentesis, culdocentesis', optionValue: 'obtainFluid' })
      ],
      highElements: [
        Object.create({ optionName: 'Cardiovascular imaging studies wtih contrast with identified risk factors', optionValue: 'cardiovascularImaging' }),
        Object.create({ optionName: 'Cardiac electrophysiological tests', optionValue: 'cardiacElectrophysiological' }),
        Object.create({ optionName: 'Diagnostic endoscopies with identified risk factors', optionValue: 'diagnosticEndoscopies' }),
        Object.create({ optionName: 'Discography', optionValue: 'Discography' })
      ]
    });
  }

});
