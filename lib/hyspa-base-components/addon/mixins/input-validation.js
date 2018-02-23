import Mixin from '@ember/object/mixin';
import { get, set, setProperties, observer } from '@ember/object';
import { not, and, or } from '@ember/object/computed';
import { isPresent } from '@ember/utils';

export default Mixin.create({
  inputValid: false,
  inputInvalid: not('inputValid'),
  inputTouched: false,
  inputDirty: false,
  validationQueue: null,

  isDirtyAndInvalid: and('inputDirty', 'inputInvalid'),
  isTouchedAndInvalid: and('inputTouched', 'inputInvalid'),

  hasValidationRules: or('customValidation', 'mustMatch', 'isRequired'),

  observeBoundModelValidation: observer('boundModel', 'boundCollection', function() {
    this.runValidation(isPresent(get(this, 'boundCollection')));
  }),

  init() {
    this._super(...arguments);
    this.setupDefaults();
    this.setupValidationQueue();
    this.runValidation(isPresent(get(this, 'boundCollection')));
  },

  setupDefaults() {
    setProperties(this, {
      validationQueue: []
    });
  },

  setupValidationQueue() {
    this.addIsRequired();
    this.addMustMatch();
    this.addCustom();
  },

  addIsRequired() {
    if (get(this, 'isRequired')) {
      get(this, 'validationQueue').pushObject(get(this, 'checkIsRequired'));
    }
  },

  addMustMatch() {
    if (isPresent(get(this, 'mustMatch'))) {
      get(this, 'validationQueue').pushObject(get(this, 'checkMustMatch'));
    }
  },

  addCustom() {
    if (isPresent(get(this, 'customValidation'))) {
      get(this, 'validationQueue').pushObject(get(this, 'customValidation'));
    }
  },

  checkIsRequired(boundModel) {
    return isPresent(boundModel);
  },

  checkMustMatch(boundModel, formControls) {
    var matchField = formControls.findBy('name', get(this, 'mustMatch'));
    return boundModel === get(matchField, 'boundModel');
  },

  runValidation(isBoundCollection) {
    var isValid = true,
        self = this;

    get(this, 'validationQueue').forEach(function(validationFunction) {
      if (isBoundCollection) {
        isValid = validationFunction.call(self, get(self, 'boundCollection'), get(self, 'formControls'));
      } else {
        isValid = validationFunction.call(self, get(self, 'boundModel'), get(self, 'formControls'));
      }

    });

    set(this, 'inputValid', isValid);
  }

  // runValidation() {
  //   var isValid = true,
  //       self = this;
  //
  //   get(this, 'validationQueue').forEach(function(validationFunction) {
  //     isValid = validationFunction(get(self, 'boundModel'), get(self, 'formControls'));
  //   });
  //
  //   set(this, 'inputValid', isValid);
  // }



});
