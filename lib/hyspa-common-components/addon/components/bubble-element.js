import { computed, get } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/bubble-element';

export default BaseComponent.extend({
  layout,
  classNameBindings: ['arrowPosition'],
  arrowPosition: 'top',

  arrowFont: computed('arrowPosition', function () {
    switch (get(this, 'arrowPosition')) {
    case 'top':
      return 'arrow_drop_up';
    case 'bottom':
      return 'arrow_drop_down';
    }
  }),

  mouseLeave() {
    this.triggerAction(this.attrs.mouseLeaveAction, get(this, 'actionModel'));
  },

  triggerAction(actionType, actionModel) {
    if (actionType) {
      actionModel ? actionType(actionModel) : actionType();
    }
  }
});
