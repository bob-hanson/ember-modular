import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import { not, alias } from '@ember/object/computed';
import layout from '../templates/components/switch-component';

export default BaseComponent.extend({
  layout,
  classNames: ['switch-component'],
  classNameBindings: ['colSpan','isActive:is-active', 'isDisabled:is-disabled', 'labelRight'],
  switchLabel: 'Text',
  isActive: false,
  labelLeft: true,
  labelRight: not('labelLeft'),
  boundModel: alias('isActive'),

  handleClick() {
    if (get(this, 'isEnabled')) {
      this.toggleProperty('isActive');
    }
  },

  click() {
    this.handleClick();
    if (this.attrs.clickAction) {
      this.attrs.clickAction();
    }
  },

  actions: {

    triggerClick() {
      this.handleClick();
    }

  }

});
