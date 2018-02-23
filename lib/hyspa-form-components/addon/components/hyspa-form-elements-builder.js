import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-form-elements-builder';
import FieldEnum from 'hyspa-form-components/config/form-fields-enum';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-form-elements-builder'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),
  formName: 'placeholder',
  fieldDefinitions: null,
  boundFieldValues: null,
  fieldsGraph: null,

  initComponent() {
    this.registerForm()
    this.initFieldsGraph();
    this.buildFieldsGraph();
  },

  reInit() {
    this.initFieldsGraph();
    this.buildFieldsGraph();
  },

  registerForm() {
    var formName = get(this, 'formName');
    get(this, 'dynamicFormRegistry').register(formName, this);
  },

  initFieldsGraph() {
    set(this, 'fieldsGraph', {});
  },

  buildFieldsGraph() {
    get(this, 'fieldDefinitions').forEach(this.fieldDefinitionIterator.bind(this));
  },

  fieldDefinitionIterator(fieldDefinition) {
    var fieldValueObject = get(this, 'boundFieldValues').findBy('fieldId', fieldDefinition.fieldId);
    if (isEmpty(fieldValueObject)) {
      fieldValueObject = this.createFieldValueObject(fieldDefinition);
      get(this, 'boundFieldValues').pushObject(fieldValueObject);
    }
    this.setFieldGraphProperty(fieldDefinition, fieldValueObject);
  },

  createFieldValueObject(fieldDefinition) {
    return {
      value: null,
      fieldId: fieldDefinition.fieldId
    };
  },

  setFieldGraphProperty(fieldDefinition, fieldValueObject) {
    var fieldsGraph = get(this, 'fieldsGraph');
    set(fieldsGraph, fieldDefinition.fieldId.toString(), {
      componentName: FieldEnum[fieldDefinition.fieldType.toString()],
      label: fieldDefinition.label,
      value: get(fieldValueObject, 'value'),
      fieldId: fieldDefinition.fieldId
    });
  },

  updateBoundFieldValue(fieldDefinition) {
    var fieldObject = get(this, 'boundFieldValues').findBy('fieldId', fieldDefinition.fieldId);
    set(fieldObject, 'value', fieldDefinition.value);
  },

  actions: {
    triggerBoundModelChange(fieldDefinition) {
      this.updateBoundFieldValue(fieldDefinition);
    }
  }
});

// "custom_form_values": {  boundFieldValues
//   "fields": [
//     {
//       "field_id": 1,
//       "value": "bar"
//     }
//   ]
// }


// "custom_form_elements": { fieldDefinitions
//   "fields": [
//     {
//       "field_id": 1,
//       "field_type": 1,
//       "label": "foo"
//     }
//   ]
// }
