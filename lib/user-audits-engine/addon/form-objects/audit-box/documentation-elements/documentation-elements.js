import Object, { get, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  section: 'documentationElements',

  noIssues: false,
  elements: null,
  other: null,

  elementOptions: null,

  setFormProperties() {
    setProperties(this, {
      elements: [],
      elementOptions: []
    });
    this.buildElementOptions();
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        noIssues: false,
        elements: [],
        other: null
      });
    } else {
      let patientDataJson = get(this, 'jsonPayload.documentationElements');

      setProperties(this, {
        noIssues: patientDataJson.noIssues,
        elements: patientDataJson.elements,
        other: patientDataJson.other
      });
    }
  },

  buildElementOptions() {
    get(this, 'dynamicFormContent.documentationElements.elements').forEach(this.buildElementOption.bind(this));
  },

  buildElementOption(documentationElement) {
    get(this, 'elementOptions').pushObject(Object.create({ optionName: documentationElement, optionValue: documentationElement }))
  }

});
