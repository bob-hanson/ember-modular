import Component from '@ember/component';
import { get } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/chip-component';

export default Component.extend({
  layout,
  ripple: service(),
  classNames: ['chip'],
  classNameBindings: ['hasChipAction'],

  currentUser: null,
  chipValue: 'chip value',

  chipAction: null,
  chipActionValue: null,

  chipActionIcon: 'cancel',
  chipActionSize: 'small',

  hasChipAction: notEmpty('chipAction'),
  hasCurrentUser: notEmpty('currentUser'),

  actions: {

    triggerChipAction() {
      this.handleChipAction();
    }

  },

  handleChipAction() {
    if (get(this, 'hasChipAction')) {
      this.attrs.chipAction(get(this, 'chipActionValue'));
    }
  },

  click(event) {
    get(this, 'ripple').initRipple(event, this);
    this.handleChipAction();
    event.preventDefault();
    return false;
  }

});
