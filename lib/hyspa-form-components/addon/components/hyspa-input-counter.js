import { get, set } from '@ember/object';
import { not } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-input-counter';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-input-counter'],
  classNameBindings: ['isUp', 'isDown', 'isActive'],
  padding: '0,1,0,1',
  isUp: false,
  isDown: not('isUp'),

  initComponent() {
    this.setPadding();
  },

  setPadding() {
    if (get(this, 'isUp')) {
      set(this, 'padding', '1,1,0,1');
    } else {
      set(this, 'padding', '0,1,1,1');
    }
  },

  mouseDown() {
    this.attrs.onMousedown();
  },

  mouseUp() {
    this.attrs.onMouseup();
  }

});
