import Object, { computed, get, set } from '@ember/object';
import { copy } from '@ember/object/internals';
import { alias, gt } from '@ember/object/computed';

export default Object.extend({
  section: null,
  customFieldValues: null,
  jsonPayload: alias('defaults.jsonPayload.auditEncounterJson'),
  dynamicFormContent: alias('defaults.jsonPayload.auditBoxDynamicFormData'),

  customFieldDefinitions: computed('dynamicFormContent', function() {
    var section = get(this, 'section'),
        dynamicFormContent = get(this, 'dynamicFormContent');
    return get(dynamicFormContent, section + '.customFormElements.fields') || [];
  }),

  hasCustomFields: gt('customFieldDefinitions.length', 0),

  init() {
    this._super(...arguments);
    this.beforeSetDefaults();
    this.setFormProperties();
    this.setFormValues();
    this.setCustomFieldValues();
    this.afterSetDefaults();
  },

  setFormProperties() {},
  setFormValues() {},
  beforeSetDefaults() {},
  afterSetDefaults() {},

  resetObject() {
    this.setFormValues();
    this.setCustomFieldValues();
    this.resetChildrenObjects();
  },

  clearObject() {
    this.setFormValues(true);
    this.setCustomFieldValues(true);
    this.clearChildrenObject();
  },

  resetChildrenObjects() {

  },

  clearChildrenObject() {

  },

  setCustomFieldValues(clear) {
    var section = get(this, 'section'),
        jsonPayload = get(this, 'jsonPayload'),
        customFieldValues = get(jsonPayload, section + '.customFormValues.fields') || [];

    if (clear) {
      set(this, 'customFieldValues', []);
    } else {
      set(this, 'customFieldValues', copy(customFieldValues, true));
    }
  }

});
