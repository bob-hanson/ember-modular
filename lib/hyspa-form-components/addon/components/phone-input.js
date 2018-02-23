import { computed } from '@ember/object';
import NumericInput from './numeric-input';

export default NumericInput.extend({

  customRegex: computed('', function () {
    switch (this.get('countryCode')) {
      case "US":
        return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      case "INT":
        return /^\+(?:[0-9] ?){6,14}[0-9]$/;
    }
  }),
  countryCode: 'US',
  allowedChars: null,
  charMin: 7,
  charMax: 15,

  initComponent() {
    this.setDefaults();
  },

  setDefaults() {
    this.allowedChars = ['-', '.', '(', ')'];
  },

  formatValue(inputValue, regex) {
    this.set('boundModel', inputValue.replace(regex, "($1) $2-$3"));
  }

});
