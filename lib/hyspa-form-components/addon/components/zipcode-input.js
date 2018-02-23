import { computed, get } from '@ember/object';
import NumericInput from './numeric-input';

export default NumericInput.extend({

  customRegex: computed('', function () {
    switch (get(this, 'countryCode')) {
      case "US":
        return '^[0-9]{5}(?:-[0-9]{4})?$';
      case "CA":
        return '/^([A-Z][0-9][A-Z])s*([0-9][A-Z][0-9])$/';
      default:
        return '/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/';
    }
  }),
  countryCode: 'US',
  allowedChars: null,
  charMin: 5,
  charMax: 9,

  initComponent() {
    this.setDefaults();
  },

  setDefaults() {
    this.allowedChars = ['-'];
  },

});
