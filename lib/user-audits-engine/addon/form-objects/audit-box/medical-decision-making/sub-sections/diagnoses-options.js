import Object, { setProperties } from '@ember/object';
import { gt } from '@ember/object/computed';
import { sumProperties } from 'hyspa-utilities';
import { ifThenElseWithKeys } from 'ember-macaroni';
import BaseAuditboxFormObject from '../../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  selfLimitedMinorRatings: null,
  estProblemImprovedRatings: null,
  estProblemWorseningRatings: null,
  newProblemWorkupPlannedRatings: null,
  newProblemNoWorkupPlannedRatings: null,

  trackedEstProblemWorseningRating: null,
  trackedNewProblemWorkupPlannedRating: null,

  selfLimitedMinorRating: null,
  estProblemImprovedRating: null,
  estProblemWorseningRating: null,
  newProblemNoWorkupPlannedRating: null,
  newProblemWorkupPlannedRating: null,

  maxRating: 4,

  isNumberDiagnosesManagementOptionsMoreThanFour: gt('unlimitedNumberDiagnosesManagementOptions', 4),
  unlimitedNumberDiagnosesManagementOptions: sumProperties('selfLimitedMinorRating', 'estProblemImprovedRating', 'estProblemWorseningRating', 'newProblemWorkupPlannedRating', 'newProblemNoWorkupPlannedRating'),
  numberDiagnosesManagementOptions: ifThenElseWithKeys('isNumberDiagnosesManagementOptionsMoreThanFour', 'maxRating', 'unlimitedNumberDiagnosesManagementOptions'),

  setFormProperties() {
    setProperties(this, {
      selfLimitedMinorRatings: [
        Object.create({ optionName: 0, optionValue: 0 }),
        Object.create({ optionName: 1, optionValue: 1 }),
        Object.create({ optionName: 2, optionValue: 2 })
      ],
      estProblemImprovedRatings: [
        Object.create({ optionName: 0, optionValue: 0 }),
        Object.create({ optionName: 1, optionValue: 1 }),
        Object.create({ optionName: 2, optionValue: 2 }),
        Object.create({ optionName: 3, optionValue: 3 }),
        Object.create({ optionName: 4, optionValue: 4 })
      ],
      estProblemWorseningRatings: [
        Object.create({ optionName: 0, optionValue: 0, untrackedoptionValue: 0 }),
        Object.create({ optionName: 1, optionValue: 1, untrackedoptionValue: 2 }),
        Object.create({ optionName: 2, optionValue: 2, untrackedoptionValue: 4 }),
        Object.create({ optionName: 3, optionValue: 3, untrackedoptionValue: 4 }),
        Object.create({ optionName: 4, optionValue: 4, untrackedoptionValue: 4 })
      ],
      newProblemNoWorkupPlannedRatings: [
        Object.create({ optionName: 0, optionValue: 0 }),
        Object.create({ optionName: 1, optionValue: 3 })
      ],
      newProblemWorkupPlannedRatings: [
        Object.create({ optionName: 0, optionValue: 0, untrackedoptionValue: 0 }),
        Object.create({ optionName: 1, optionValue: 1, untrackedoptionValue: 4 }),
        Object.create({ optionName: 2, optionValue: 2, untrackedoptionValue: 4 }),
        Object.create({ optionName: 3, optionValue: 3, untrackedoptionValue: 4 }),
        Object.create({ optionName: 4, optionValue: 4, untrackedoptionValue: 4 })
      ]
    });
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        selfLimitedMinorRating: null,
        estProblemImprovedRating: null,
        trackedEstProblemWorseningRating: null,
        newProblemNoWorkupPlannedRating: null,
        trackedNewProblemWorkupPlannedRating: null
      });
    } else {
      let diagnosesOptionsJson = this.get('jsonPayload.medicalDecisionMaking.diagnosesOptions');

      setProperties(this, {
        selfLimitedMinorRating: diagnosesOptionsJson.selfLimitedMinorRating,
        estProblemImprovedRating: diagnosesOptionsJson.estProblemImprovedRating,
        trackedEstProblemWorseningRating: diagnosesOptionsJson.trackedEstProblemWorseningRating,
        newProblemNoWorkupPlannedRating: diagnosesOptionsJson.newProblemNoWorkupPlannedRating,
        trackedNewProblemWorkupPlannedRating: diagnosesOptionsJson.trackedNewProblemWorkupPlannedRating
      });
    }
  }

});
