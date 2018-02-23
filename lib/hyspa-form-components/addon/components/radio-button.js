import { computed, get, set } from '@ember/object';
import { alias, and, not } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/radio-button';

export default BaseComponent.extend({
  layout,
  classNames: ['radio-button'],
  classNameBindings: ['isSelected:is-selected', 'colorClass'],
  attributeBindings: ['radioTitle:title'],
  radioTitle: null,
  buttonGroupOption: false,

  isSelected: alias('radioOption.isSelected'),
  isNotSelected: not('isSelected'),
  radioButtonLabel: alias('radioOption.optionName'),
  isTraditionalRadio: not('isButtonGroupOption'),
  isSelectedAndIsButton: and('isButtonGroupOption', 'isSelected'),
  isSelectedAndIsRadio: and('isTraditionalRadio', 'isSelected'),

  colorClass: computed('isSelected', function() {
    if (get(this, 'isSelectedAndIsButton')) {
      return 'secondary-background-color';
    } else if (get(this, 'isSelectedAndIsRadio')) {
      return 'secondary-color';
    }
  }),

  selectedState: computed('isSelected', function () {
    return get(this, 'isSelected') ? 'radio_button_checked'
                                  : 'radio_button_unchecked';
  }),

  initComponent() {
    this.setPaddingForButtons();
  },

  setPaddingForButtons() {
    if (get(this, 'isButtonGroupOption')) {
      set(this, 'padding', '1,2,1,2');
    }
  },

  toggleSelection() {
    if (get(this, 'isNotSelected')) {
      this.toggleProperty('isSelected');
      this.attrs.selectAction(get(this, 'radioOption.optionValue'), get(this, 'radioOption.untrackedoptionValue'));
    }
  },

  click() {
    if (get(this, 'isEnabled')) {
      this.toggleSelection();
    }
  }

});
