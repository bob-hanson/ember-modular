import { isEmpty } from '@ember/utils';
import { computed, get, set } from '@ember/object';
import { and, not, notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import InputValidation from 'hyspa-base-components/mixins/input-validation';
import BaseComponent from './base-component';

export default BaseComponent.extend(
  InputValidation, {
  classNameBindings: ['colSpan', 'isDisabled:is-disabled', 'isInvalid:is-invalid', 'isFocused:is-focused', 'hasValue:has-value', 'isHovered:is-hovered', 'isDirtyAndInvalid:is-invalid'],
  attributeBindings: ['disabledAttr:isDisabled'],
  padding: '1,0,1,0',
  labelText: null,
  validationMessage: 'Validation Message',

  isRequired: false,
  isFocused: false,
  isBlurred: not('isFocused'),
  isHovered: false,
  isTouched: false,
  isNotTouched: not('isTouched'),
  initialValue: null,
  boundModel: null,

  isValid: true,
  isInvalid: not('isValid'),
  isInvalidAndTouched: and('isInvalid', 'isTouched'),
  isEnabledAndIsNotTouched: and('isEnabled', 'isNotTouched'),

  hasValue: notEmpty('boundModel'),
  hasLabel: notEmpty('labelText'),
  isEmpty: not('hasValue'),
  boundModelHasNotChanged: computed('boundModel', function() {
    if (isEmpty(get(this, 'boundModel')) && isEmpty(get(this, 'initialValue'))) {
      return true;
    } else {
      return get(this, 'boundModel') === get(this, 'initialValue');
    }
  }),
  boundModelHasChanged: not('boundModelHasNotChanged'),

  tabindex: computed('isDisabled', function() {
    return get(this, 'isDisabled') ? '-1' : '0';
  }),

  inputElementId: computed('elementId', function() {
    return `input-${get(this, 'elementId')}`;
  }),

  init() {
    this._super(...arguments);
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

  setFocusIn() {
    if (get(this, 'isEnabled')) {
      set(this, 'isFocused', true);
    }
  },

  setInitalValue() {
    set(this, 'initialValue', get(this, 'boundModel') || '');
  },

  setIsTouched() {
    if (get(this, 'isEnabledAndIsNotTouched')) {
      set(this, 'isTouched', true);
    }
  },

  focusIn() {
    this.setTouched(); ///new method call
    this.setFocusIn();
    this.setInitalValue();
    this.callFocusOutAction();
  },

  focusOut() {
    this.setFocusStateOnBlur();
    this.setTouchedStateOnBlur();
    if (get(this, 'boundModelHasNotChanged')) {
      set(this, 'initialValue', null);
      return;
    }
    if (this.attrs.onBoundModelChange && get(this, 'boundModelHasChanged')) {
      this.attrs.onBoundModelChange(get(this, 'boundModel'));
      set(this, 'initialValue', null);
    }
    this.callFocusOutAction();
  },

  keyUp() {
    this.setDirty();
  },

  setDirty() {
    set(this, 'inputDirty', true);
  },

  setTouched() {
    set(this, 'inputTouched', true);
  },

  setFocusStateOnBlur() {
    if (isEmpty(get(this, 'boundModel'))) {
      set(this, 'isFocused', false);
    }
  },

  setTouchedStateOnBlur() {
    if (get(this, 'isNotTouched')) {
      set(this, 'isTouched', true);
    }
  },

  callFocusInAction() {
    if (isPresent(this.attrs.focusInAction)) {
      this.attrs.focusInAction();
    }
  },

  callFocusOutAction() {
    if (isPresent(this.attrs.focusOutAction)) {
      this.attrs.focusOutAction();
    }
  },

  mouseEnter() {
    set(this, 'isHovered', true);
  },

  mouseLeave(e) {
    set(this, 'isHovered', false);
    this._super(e);
  },

  click() {
    if (this.attrs.clickAction) {
      this.attrs.clickAction();
    }
  }

});
