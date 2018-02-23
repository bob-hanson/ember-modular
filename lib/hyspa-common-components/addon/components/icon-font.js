import { computed, get } from '@ember/object';
import { not, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/icon-font';

export default BaseComponent.extend({
  layout,
  tagName: 'i',
  classNames: ['material-icons', 'icon'],
  classNameBindings: ['computedFontSize', 'hasClickAction:pointer', 'isHidden:is-hidden', 'isInactive:is-inactive', 'isActivePath:primary-color', 'usePrimaryColor:primary-color', 'usePrimaryHover:primary-color-hover'],
  attributeBindings: ['iconTitle:title'],
  fontType: '',
  iconTitle: '',
  fontSize: 'regular',
  noHover: false,
  usePrimaryColor: false,
  usePrimaryHover: not('noHover'),

  computedFontSize: computed('fontSize', function() {
    switch (get(this, 'fontSize')) {
      case 'x-small':
        return 'md-16';
      case 'small':
        return 'md-18';
      case 'regular':
        return 'md-24';
      case 'large':
        return 'md-36';
      case 'xlarge':
        return 'md-48';
      default:
        return 'md-24';
    }
  }),

  clickAction: null,
  hasClickAction: notEmpty('clickAction'),

  click() {
    this.triggerAction(this.attrs.clickAction, get(this, 'actionModel'));
  },

  triggerAction(actionType, actionModel) {
    if (actionType) {
      if (actionModel) {
        actionType(actionModel);
      } else {
        actionType();
      }
    }
  }

});
