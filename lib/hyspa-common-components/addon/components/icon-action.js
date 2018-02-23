import { get } from '@ember/object';
import { not, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/icon-action';

export default BaseComponent.extend({
  layout,
  tagName: 'li',
  classNames: ['icon-link', 'icon-action'],
  actionObject: null,
  iconLeft: true,
  iconRight: not('iconLeft'),

  hasLabelText: notEmpty('labelText'),

  clickAction: null,
  hasClickAction: notEmpty('clickAction'),

  click() {
    this.triggerAction(this.attrs.clickAction, get(this, 'actionObject'));
  },

  triggerAction(clickAction, actionObject) {
    if (clickAction) {
      if (actionObject) {
        clickAction(actionObject);
      } else {
        clickAction();
      }
    }
  }

});
