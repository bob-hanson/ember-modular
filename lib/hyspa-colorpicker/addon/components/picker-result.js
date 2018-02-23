import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { htmlSafe } from '@ember/string';
import layout from '../templates/components/picker-result';

export default Component.extend({
  layout,
  classNames: ['picker-result'],

  currentChipValue: computed('pickerValue', function () {
    if (get(this, 'pickerValue')) {
      return get(this, 'pickerValue').hex;
    } else {
      return get(this, 'currentHex');
    }
  }),

  currentChipStyle: computed('currentChipValue', function() {
    return htmlSafe('background-color: ' + get(this, 'currentChipValue'));
  })

});
