import { get, set } from '@ember/object';
import { isPresent, isEmpty } from '@ember/utils';
import HyspaInputComponent from 'hyspa-form-components/components/hyspa-input-component';
import layout from 'hyspa-form-components/templates/components/hyspa-input-component';

export default HyspaInputComponent.extend({
  layout,
  classNames: ['input-component', 'numeric-input', 'form-control'],
  customValidateAction: null,
  customRegex: null,
  allowedChars: null,
  charMin: 0,
  charMax: 5000,

  initComponent() {
    this.setDefaults();
  },

  setDefaults() {
    if (isEmpty(get(this, 'allowedChars'))) {
      set(this, 'allowedChars', []);
    }
  },

  willValidate(event) {
    this.validateInput(event);
  },

  didValidate() {
    this.callCustomAction();
  },

  checkInputLength(event) {
    this.checkMaxLength(event);
    this.checkMinLength(event);
  },

  checkMaxLength(event) {
    if (isPresent(get(this, 'boundModel')) && get(this, 'boundModel').length > get(this, 'charMax')) {
      event.preventDefault();
    }
  },

  checkMinLength(event) {
    if (isPresent(get(this, 'boundModel')) && get(this, 'boundModel').length < get(this, 'charMin')) {
      event.preventDefault();
    }
  },

  validateFormat() {
    var customRegex = get(this, 'customRegex');

    if (isPresent(customRegex)) {
      let regex = new RegExp(customRegex);
      if (this.formatValue) {
        this.formatValue(get(this, 'boundModel'), regex);
      } else {
        set(this, 'isValid', regex.test(get(this, 'boundModel')));
      }
    }
  },

  validateInput(event) {
    var selectedKey = event.key,
        parsedKey = parseFloat(selectedKey);
    if (get(this, 'allowedChars').includes(selectedKey) || !Number.isNaN(parsedKey) && Number.isFinite(parsedKey)) {
      this.checkMaxLength(event);
    } else {
      event.preventDefault();
    }
  },

  callCustomAction() {
    if (get(this, 'customValidateAction')) {
      this.attrs.customValidateAction(get(this, 'boundModel'));
    }
  },

  focusOut() {
    this._super();
    this.validateFormat();
  },

  keyPress(event) {
    this.willValidate(event);
  },

  change(event) {
    this.checkInputLength(event);
  }

});
