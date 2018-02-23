import Object, { get, setProperties } from '@ember/object';
import { equal } from '@ember/object/computed';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  section: 'auditHistory',

  isHistoryUnobtainable: false,
  chiefComplaintDocumented: null,
  additionalInfo: null,
  historyPresentIllnesses: null,
  hpiStatus: null,
  reviewOfSystems: null,
  pastMedicalConditions: null,
  familyConditions: null,
  socialConditions: null,

  selectedQuickClickHPI: null,
  selectedQuickClickROS: null,
  selectedQuickClickPFSH: null,

  hpiIsDetails: equal('selectedQuickClickHPI', 'details'),
  rosIsDetails: equal('selectedQuickClickROS', 'details'),
  pfshIsDetails: equal('selectedQuickClickPFSH', 'details'),

  setFormProperties() {
    setProperties(this, {
      chiefComplaintOptions: [
        Object.create({ optionName: 'Documented', optionValue: true }),
        Object.create({ optionName: 'Not documented / Not decipherable', optionValue: false })
      ],
      quickClickHPIOptions: [
        Object.create({ optionName: 'Details', optionValue: 'details' }),
        Object.create({ optionName: 'Brief', optionValue: 'brief' }),
        Object.create({ optionName: 'Extended', optionValue: 'extended' })
      ],
      historyPresentIllnesses: [],
      historyPresentIllnessesOptions: [
        Object.create({ optionName: 'Location', optionValue: 'location' }),
        Object.create({ optionName: 'Severity', optionValue: 'severity' }),
        Object.create({ optionName: 'Timing', optionValue: 'timing' }),
        Object.create({ optionName: 'Modifying factors', optionValue: 'modifyingFactors' }),
        Object.create({ optionName: 'Quality', optionValue: 'quality' }),
        Object.create({ optionName: 'Duration', optionValue: 'duration' }),
        Object.create({ optionName: 'Context', optionValue: 'context' }),
        Object.create({ optionName: 'Associated signs & Symptoms', optionValue: 'associatedSigns' })
      ],
      hpiStatusOptions: [
        Object.create({ optionName: 'Status of 1-2 chronic conditions', optionValue: '1-2' }),
        Object.create({ optionName: 'Status of 3 or more chronic conditions', optionValue: '3 or more' })
      ],
      quickClickROSOptions: [
        Object.create({ optionName: 'Details', optionValue: 'details' }),
        Object.create({ optionName: '1', optionValue: '1' }),
        Object.create({ optionName: '2-9', optionValue: '2-9' }),
        Object.create({ optionName: '10+', optionValue: '10+' })
      ],
      reviewOfSystems: [],
      reviewOfSystemsOptions: [
        Object.create({ optionName: 'Const', optionValue: 'const'  }),
        Object.create({ optionName: 'Resp', optionValue: 'resp'  }),
        Object.create({ optionName: 'Integ', optionValue: 'integ'  }),
        Object.create({ optionName: 'Hema/Lymph', optionValue: 'hema/lymph'  }),
        Object.create({ optionName: 'Eyes', optionValue: 'eyes'  }),
        Object.create({ optionName: 'GI', optionValue: 'gi'  }),
        Object.create({ optionName: 'Neuro', optionValue: 'neuro'  }),
        Object.create({ optionName: 'All/Immuno', optionValue: 'all/immuno'  }),
        Object.create({ optionName: 'ENMT', optionValue: 'enmt'  }),
        Object.create({ optionName: 'GU', optionValue: 'gu'  }),
        Object.create({ optionName: 'Psych', optionValue: 'psych'  }),
        Object.create({ optionName: 'Card/Vasc', optionValue: 'card/vasc'  }),
        Object.create({ optionName: 'Musculo', optionValue: 'musculo'  }),
        Object.create({ optionName: 'Endo', optionValue: 'endo'  })
      ],
      quickClickPFSHOptions: [
        Object.create({ optionName: 'Details', optionValue: 'details' }),
        Object.create({ optionName: '1', optionValue: '1' }),
        Object.create({ optionName: '2-9', optionValue: '2-9' }),
        Object.create({ optionName: '10+', optionValue: '10+' })
      ],
      pastMedicalConditionsOptions: [
        Object.create({ optionName: 'Allergies', optionValue: 'allergies'  }),
        Object.create({ optionName: 'Age-appropriate', optionValue: 'age-appropriate'  }),
        Object.create({ optionName: 'Current med.', optionValue: 'current med.'  }),
        Object.create({ optionName: 'Dietary status', optionValue: 'dietary status'  }),
        Object.create({ optionName: 'Operations and hospitalizations', optionValue: 'operations and hospitalizations'  }),
        Object.create({ optionName: 'Prior illnesses/injuries', optionValue: 'prior illnesses/injuries'  })
      ],
      pastMedicalConditions: [],
      familyConditionsOptions: [
        Object.create({ optionName: 'Diseases related to CC, HPI, or ROS', optionValue: 'related to cc, hpi, or ros' }),
        Object.create({ optionName: 'Health status or cause of death of parents, siblings, and children', optionValue: 'health status or cause of death of family' }),
        Object.create({ optionName: 'Hereditary or high risk diseases', optionValue: 'hereditary or high risk' }),
      ],
      familyConditions: [],
      socialConditionsOptions: [
        Object.create({ optionName: 'Current emp.', optionValue: 'current emp' }),
        Object.create({ optionName: 'Extend of education', optionValue: 'extend of education' }),
        Object.create({ optionName: 'Living arrangements', optionValue: 'living arrangements' }),
        Object.create({ optionName: 'Marital status', optionValue: 'marital status' }),
        Object.create({ optionName: 'Occupational hist.', optionValue: 'occupational history' }),
        Object.create({ optionName: 'Sexual history', optionValue: 'sexual history' }),
        Object.create({ optionName: 'Use of drugs, alcohol, or tobacco', optionValue: 'use of drugs, alcohol, or tobacco' }),
        Object.create({ optionName: 'Other', optionValue: 'other' })
      ],
      socialConditions: []
    });
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        isHistoryUnobtainable: false,
        chiefComplaintDocumented: null,
        additionalInfo: null,
        historyPresentIllnesses: [],
        historyPresentIllnessChronicConditions: [],
        reviewOfSystems: [],
        pastMedicalConditions: [],
        familyConditions: [],
        socialConditions: [],
        selectedQuickClickHPI: null,
        selectedQuickClickROS: null,
        selectedQuickClickPFSH: null
      });
    } else {

      let historyJson = get(this, 'jsonPayload.auditHistory');

      setProperties(this, {
        isHistoryUnobtainable: historyJson.historyUnobtainable,
        chiefComplaintDocumented: historyJson.chiefComplaintDocumented,
        additionalInfo: historyJson.chiefComplaintAdditionalInfo,
        historyPresentIllnesses: historyJson.presentIllness.detailsSelections,
        hpiStatus: historyJson.presentIllness.presentIllnessStatus,
        reviewOfSystems: historyJson.reviewOfSystem.detailsSelections,
        pastMedicalConditions: historyJson.medicalHistory.detailsSelections.past,
        familyConditions: historyJson.medicalHistory.detailsSelections.family,
        socialConditions: historyJson.medicalHistory.detailsSelections.social,
        selectedQuickClickHPI: historyJson.presentIllness.quickClickValue,
        selectedQuickClickROS: historyJson.reviewOfSystem.quickClickValue,
        selectedQuickClickPFSH: historyJson.medicalHistory.quickClickValue
      });

    }
  }

});
