import { computed, get } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-checkbox-component';

export default BaseComponent.extend({
  layout,
  classNames: ['checkbox-component'],
  classNameBindings: ['colSpan', 'boundModel:is-selected', 'boundModel:primary-color', 'hasSublabel', 'isDisabled:disabled'],
  attributeBindings: ['disabled'],

  subLabel: null,
  hasLabel: notEmpty('optionName'),
  hasSublabel: notEmpty('subLabel'),
  clickAction: null,
  optionName: null,
  boundModel: false,

  checkedState: computed('boundModel', function () {
    return get(this, 'boundModel') ? 'check_box'
                                  : 'check_box_outline_blank';
  }),

  initComponent() {
    if (this.attrs.initAction) {
      this.attrs.initAction(this);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.attrs.destroyAction) {
      this.attrs.destroyAction(this);
    }
  },

  toggleSelection() {
    this.toggleProperty('boundModel');
  },

  sendClickAction() {
    if (isPresent(get(this, 'clickAction'))) {
      if (isPresent(get(this, 'boundModel'))) {
        this.attrs.clickAction(get(this, 'boundModel'));
      } else if (isPresent(get(this, 'boundModel'))) {
        this.attrs.clickAction(get(this, 'boundModel'));
      } else {
        this.attrs.clickAction();
      }
    }
  },

  click() {
    if (get(this, 'isDisabled')) {
      return;
    }
    this.toggleSelection();
    if (get(this, 'isEnabled')) {
      this.sendClickAction();
    }
  }

});
