import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import { not, alias, notEmpty } from '@ember/object/computed';
import layout from '../templates/components/hyspa-switch-component';

export default BaseComponent.extend({
  layout,
  classNames: ['switch-component'],
  classNameBindings: ['colSpan','isActive:is-active', 'isDisabled:is-disabled', 'labelRight'],
  switchLabel: 'Text',
  labelLeft: true,
  labelRight: not('labelLeft'),
  isActive: alias('boundModel'),
  hasHelpLauncher: notEmpty('launchHelp'),

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

  handleClick() {
    if (get(this, 'isEnabled')) {
      this.toggleProperty('boundModel');
    }
  },

  click(event) {
    if (event.target.classList.contains('icon') || event.target.classList.contains('help-icon')) return;
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
