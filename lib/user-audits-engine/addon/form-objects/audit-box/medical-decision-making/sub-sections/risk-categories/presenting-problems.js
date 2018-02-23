import Object, { setProperties } from '@ember/object';
import BaseRiskCategory from '../../base-objects/base-risk-category';

export default BaseRiskCategory.extend({
  categoryKey: "presentingProblems",

  setupDefaults() {
    setProperties(this, {
      minimalElements: [
        Object.create({ optionName: 'One self-limited or minor problem', subLabel: 'e.g. cold, insect bite, tinea corporis', optionValue: 'oneMinorProblem' })
      ],
      lowElements: [
        Object.create({ optionName: 'Two or more self-limited or minor problems', optionValue: 'twoOrMoreLimitedProblems' }),
        Object.create({ optionName: 'One stable chronic illness', subLabel: 'e.g. well controlled hypertension or non-insulin dependent diabetes, cataract, BPH', optionValue: 'oneStableChronicIllness' }),
        Object.create({ optionName: 'Acute uncomplicated illness or injury', subLabel: 'e.g. cystitis, allergic rhinitis, simple sprain', optionValue: 'acuteUncomplicatedIllness' })
      ],
      moderateElements: [
        Object.create({ optionName: 'One or more chronic illnesses with mild exacerbation, progression, or side effects of treatment', optionValue: 'oneOrMoreChronicIllnesses' }),
        Object.create({ optionName: 'Two or more stable chronic illnesses', optionValue: 'twoChronicIllnesses' }),
        Object.create({ optionName: 'Undiagnosed new problem with uncertain progrnoses', subLabel: 'e.g. lump in breast', optionValue: 'undiagnosedProblem' }),
        Object.create({ optionName: 'Acute illness with systemic symptoms', subLabel: 'e.g. pyelonephritis, pneumonitis, colitis', optionValue: 'acuteIllness' }),
        Object.create({ optionName: 'Acute complicated injury', subLabel: 'e.g. head injury with brief loss of consciousness', optionValue: 'accuteInjury' })
      ],
      highElements: [
        Object.create({ optionName: 'One or more chronic illnesses with severe exacerbation, progression, or side effects of treatment', optionValue: 'oneOrMoreChronicIllnesses' }),
        Object.create({ optionName: 'Acute or chronic illnesses or injuries that may pose a threat to life or bodily function', subLabel: 'e.g. multiple trauma, acute MI, pulmonary embolus, severe respiratory distress, progressive sever rheumatoid arthritis, psychiatric illness with potential threat to self or others, peritonitis, acute renal failure', optionValue: 'acuteIllness' }),
        Object.create({ optionName: 'An abrupt change in neurologic status', subLabel: 'e.g. seizure, TIA, weakness or sensory loss', optionValue: 'abruptChangeNeurologic' })
      ]
    });
  }

});
