import Object, { setProperties } from '@ember/object';
import BaseRiskCategory from '../../base-objects/base-risk-category';

export default BaseRiskCategory.extend({
  categoryKey: "managementOptionsSelected",

  setupDefaults() {
    setProperties(this, {
      minimalElements: [
        Object.create({ optionName: 'Rest', optionValue: 'rest' }),
        Object.create({ optionName: 'Gargles', optionValue: 'gargles' }),
        Object.create({ optionName: 'Elastic bandages', optionValue: 'elasticBandages' }),
        Object.create({ optionName: 'Superficial dressings', optionValue: 'superficialDressings' })
      ],
      lowElements: [
        Object.create({ optionName: 'Over-the-counter drugs', optionValue: 'otcDrugs' }),
        Object.create({ optionName: 'Minor surgery with no identified risk factors', optionValue: 'minorSurgeryNoRiskFactors' }),
        Object.create({ optionName: 'Physical Therapy', optionValue: 'physicalTherapy' }),
        Object.create({ optionName: 'Occupational Therapy', optionValue: 'occupationalTherapy' }),
        Object.create({ optionName: 'IV fluids without additives', optionValue: 'ivFluids' })
      ],
      moderateElements: [
        Object.create({ optionName: 'Minor surgery with identified risk factors', optionValue: 'minorSurgery' }),
        Object.create({ optionName: 'Elective major surgery with no identified risk factors', subLabel: 'open, percutaneous or endoscopic', optionValue: 'electiveMajorSurgery' }),
        Object.create({ optionName: 'Prescription drug management', optionValue: 'prescriptionDrugManagement' }),
        Object.create({ optionName: 'Therapeutic nuclear medicine', optionValue: 'nuclearMedicine' }),
        Object.create({ optionName: 'IV fluids with additives', optionValue: 'ivFluids' }),
        Object.create({ optionName: 'Closed treatment of fracture or dislocation without manipulation', optionValue: 'closedFractureTreatment' })
      ],
      highElements: [
        Object.create({ optionName: 'Elective major surgery', subLabel: 'open, percutaneous or endoscopic with identified risk factors', optionValue: 'electiveMajorSurgery' }),
        Object.create({ optionName: 'Emergency major surgery', subLabel: 'open, percutaneous or endoscopic', optionValue: 'emergencyMajorSurgery' }),
        Object.create({ optionName: 'Parenteral controlled substances', optionValue: 'parenteralControlledSubstances' }),
        Object.create({ optionName: 'Drug therapy requiring intensive monitoring for toxicity', optionValue: 'drugTherapy' }),
        Object.create({ optionName: 'Decision not to resuscitate or to de-escalate care because of poor prognosis', optionValue: 'decisionNotToResuscitate' })
      ]
    });
  }

});
