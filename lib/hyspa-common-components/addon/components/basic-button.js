import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/basic-button';

export default BaseComponent.extend({
  layout,
  tagName: 'button',
  classNames: ['basic-button'],
  classNameBindings: ['isDisabled:is-disabled', 'colSpan', 'noMargin'],
  // If you set this the Hover event will not fire.
  // So we are faking the disabledness
  // attributeBindings: ['isDisabled:disabled'],
  buttonText: 'Button',
  action: null,
  actionModel: null,

  click() {
    if (this.get('isEnabled')) {
      this.get('actionModel') ? this.attrs.clickAction(this.get('actionModel'))
                              : this.attrs.clickAction();
    }
  },

  mouseEnter() {
    if (this.attrs.mouseEnterAction) {
      this.attrs.mouseEnterAction();
    }
  },

  mouseLeave() {
    if (this.attrs.mouseLeaveAction) {
      this.attrs.mouseLeaveAction();
    }
  }


});
