import { get, setProperties } from '@ember/object';
import { gt } from '@ember/object/computed';
import BaseAuditboxFormObject from '../../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  categoryKey: null,

  minimalElements: null,
  lowElements: null,
  moderateElements: null,
  highElements: null,

  selectedMinimalElements: null,
  selectedLowElements: null,
  selectedModerateElements: null,
  selectedHighElements: null,

  hasHigh: gt('selectedHighElements.length', 0),
  hasModerate: gt('selectedModerateElements.length', 0),
  hasLow: gt('selectedLowElements.length', 0),
  hasMinimal: gt('selectedMinimalElements.length', 0),

  init() {
    this._super(...arguments);
    this.setupDefaults();
    this.setFormValues();
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        selectedMinimalElements: [],
        selectedLowElements: [],
        selectedModerateElements: [],
        selectedHighElements: []
      });
    } else {
      let riskCategoryJson = get(this, 'jsonPayload.medicalDecisionMaking.risk')[get(this, 'categoryKey')];

      setProperties(this, {
        selectedMinimalElements: riskCategoryJson.selectedMinimalElements || [],
        selectedLowElements: riskCategoryJson.selectedLowElements || [],
        selectedModerateElements: riskCategoryJson.selectedModerateElements || [],
        selectedHighElements: riskCategoryJson.selectedHighElements || []
      });
    }
  }

});
