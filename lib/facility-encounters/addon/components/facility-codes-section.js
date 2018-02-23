import BaseComponent from 'hyspa-base-components/components/base-component';
import { setProperties, get, computed } from '@ember/object';
import { not, lt } from '@ember/object/computed';
import layout from '../templates/components/facility-codes-section';

export default BaseComponent.extend({
  layout,
  classNames: ['facility-codes-section'],
  classNameBindings: ['colSpan'],
  isPatientData: false,
  isInpatient: true,
  isOutpatient: not('isInpatient'),
  showIcd10: true,
  secDxCodes: null,
  otherIcd10Codes: null,
  otherCptCodes: null,
  canAddSecDxCode: lt('secDxCodes.length', 25),

  icd10Codes: computed(function() {
    return get(this, 'store').peekAll('audit-icd10-code');
  }),

  initComponent() {
    this.setupDefaults();
  },

  setupDefaults() {
    setProperties(this, {
      secDxCodes: [
        {
          code: null
        }
      ],
      otherIcd10Codes: [
        {
          pcs: null,
          dos: null
        }
      ],
      otherCptCodes: [
        {
          cpt: null,
          dos: null
        }
      ]
    })
  },

  addSecDXCode() {
    if (get(this, 'canAddSecDxCode')) {
      get(this, 'secDxCodes').pushObject({
        code: null
      });
    }
  },

  removeSecDxCode(secDxCode) {
    get(this, 'secDxCodes').removeObject(secDxCode);
  },

  addIcd10Code() {
    get(this, 'otherIcd10Codes').pushObject({
      pcs: null,
      dos: null
    })
  },

  removeIcd10Code(icd10Code) {
    get(this, 'otherIcd10Codes').removeObject(icd10Code);
  },

  addCptCode() {
    get(this, 'otherCptCodes').pushObject({
      cpt: null,
      dos: null
    });
  },

  removeCptCode(cptCode) {
    get(this, 'otherCptCodes').removeObject(cptCode);
  },

  actions: {
    triggerAddSecDXCode() {
      this.addSecDXCode();
    },
    triggerRemoveSecDXCode(secDxCode) {
      this.removeSecDxCode(secDxCode)
    },
    triggerAddIcd10Code() {
      this.addIcd10Code();
    },
    triggerRemoveIcd10Code(icd10Code) {
      this.removeIcd10Code(icd10Code);
    },
    triggerAddCptCode() {
      this.addCptCode();
    },
    triggerRemoveCptCode(cptCode) {
      this.removeCptCode(cptCode);
    }
  }

});
