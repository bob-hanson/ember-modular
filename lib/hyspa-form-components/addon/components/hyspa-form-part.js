import BaseComponent from 'hyspa-base-components/components/base-component';
import HyspaFormMixin from 'hyspa-form-components/mixins/hyspa-form-mixin';
import { get, set } from '@ember/object';
import { not, and, alias } from '@ember/object/computed';
import { once } from '@ember/runloop';
import layout from '../templates/components/hyspa-form-part';

export default BaseComponent.extend(
  HyspaFormMixin, {
  layout,
  classNames: ['hyspa-form-part'],
  classNameBindings: ['colSpan', 'isTab', 'isActive'],
  parentFormFor: null,
  hasNavigatedAway: false,
  paginationTextNext: null,
  pagitationTextPrevious: null,
  navigateToNext: null,
  navigateToPrevious: null,
  isFirstFormPart: null,
  isLastFormPart: null,

  formFor: alias('nestedFormFor'),
  isNotLastFormPart: not('isLastFormPart'),
  isNotFirstFormPart: not('isFirstFormPart'),

  hasNavigatedAwayAndIsInvalid: and('hasNavigatedAway', 'isInvalid'),

  initComponent() {
    this.setInitialActiveState();
    if (this.attrs.initAction) {
      this.attrs.initAction(this);
    }
    this.setupDefaults();
    once(this, 'setValidStates');
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.attrs.destroyAction) {
      this.attrs.destroyAction(this);
    }
  },

  setInitialActiveState() {
    if (get(this, 'isTab')) {
      set(this, 'isActive', false);
    }
  },

  navigateFromTop() {
    this.navigateTo(get(this, 'isLastFormPart'));
  },

  navigateTo(previous) {
    if (this.attrs.navigate) {
      let formPart = (previous) ? get(this, 'navigateToPrevious') : get(this, 'navigateToNext');
      this.attrs.navigate(formPart);
    } 
  },

  actions: {
    triggerNavigateBottom(previous) {
      this.navigateTo(previous);
    },
    triggerNavigateTop() {
      this.navigateFromTop();
    }
  }

});
