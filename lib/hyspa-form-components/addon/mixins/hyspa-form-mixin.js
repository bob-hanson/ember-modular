import Mixin from '@ember/object/mixin';
import { get, setProperties, observer, getWithDefault } from '@ember/object';
import { isPresent } from '@ember/utils';
import { and } from '@ember/object/computed';
import { once } from '@ember/runloop';
import { isEmpty } from '@ember/utils';

export default Mixin.create({
  formControls: null,
  formParts: null,
  isDirty: false,
  isValid: false,
  isInvalid: true,
  isDirtyAndInvalid: and('isDirty', 'isInvalid'),

  observeFormControls: observer('formControls.@each.boundModel', 'formControls.@each.boundCollection', 'formParts.@each.isValid', function () {
    once(this, 'setValidStates');
  }),

  setupDefaults() {
    setProperties(this, {
      formControls: [],
      formParts: []
    });
  },

  setValidStates() {
    var overallValid,
        isValid = true,
        isDirty = false,
        formPartsValid = isEmpty(get(this, 'formParts')) ? true : this.validateFormParts();

    get(this, 'formControls').forEach(function (formControl) {
      if (get(formControl, 'hasValidationRules') && get(formControl, 'inputInvalid')) {
        isValid = false;
      }
      if (get(formControl, 'inputDirty')) {
        isDirty = true;
      }
    });

    // let customValid = this.attrs.customValidation ? this.attrs.customValidation(get(this, 'formControls', get(this, 'formParts'))) : true;

    overallValid = isValid && formPartsValid;

    setProperties(this, {
      isValid: overallValid,
      isInvalid: !overallValid,
      isDirty: isDirty
    });
  },

  validateFormParts() {
    var formPartsValid = true;

    get(this, 'formParts').forEach(function(formPart) {
      if (get(formPart, 'isInvalid')) {
        formPartsValid = false;
      }
    });

    return formPartsValid;
  },

  registerFormControl(formControl) {
    var formControls = get(this, 'formControls'),
        existingFormControl = formControls.findBy('name', get(formControl, 'name'));

    formControls.removeObject(existingFormControl);
    get(this, 'formControls').pushObject(formControl);
  },

  unregisterFormControl(formControl) {
    get(this, 'formControls').removeObject(formControl);
  },

  buildFormJson() {
    var formData = new FormData();
    get(this, 'formControls').forEach(this.formDataIteration.bind(this, formData));
    return formData;
  },

  buildFormData() {
    var formData = new FormData(),
        jsonObject = {},
        formFor = get(this, 'formFor') || get(this, 'parentFormFor')

    if (get(this, 'returnsJson')) {
      get(this, 'formControls').forEach(this.jsonIteration.bind(this, jsonObject));
      formData.append(`${formFor}[]`, jsonObject);
    } else {
      get(this, 'formControls').forEach(this.formDataIteration.bind(this, formData));
    }

    return formData;
  },

  jsonIteration(jsonObject, formControl) {
    jsonObject[get(formControl, 'name')] = get(formControl, 'boundModel') || get(formControl, 'boundCollection')
  },

  formDataIteration(formData, formControl) {
    var formFor = get(this, 'formFor') || get(this, 'parentFormFor');

    if (get(formControl, 'boundCollection') === undefined) {
      formData.append(`${formFor}[${get(formControl, 'name')}]`, getWithDefault(formControl, 'boundModel', null));
    } else {
      if (isPresent(get(formControl, 'boundCollection'))) {
        get(formControl, 'boundCollection').forEach(this.boundCollectionIteration.bind(this, formData, get(formControl, 'name')));
      }
    }
  },

  boundCollectionIteration(formData, formControlName, value) {
    formData.append(`${formControlName}[]`, value);
  },

  debugFormData(fd) {
    var pair;
    for (pair of fd.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  },

  actions: {
    triggerRegisterFormControl(formControl) {
      this.registerFormControl(formControl);
    },

    triggerUnregisterFormControl(formControl) {
      this.unregisterFormControl(formControl)
    }
  }
});
