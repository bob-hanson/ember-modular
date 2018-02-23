import Mixin from '@ember/object/mixin';
import { get, set } from '@ember/object';
import { equal, not, gt, and } from '@ember/object/computed';

export default Mixin.create({
  hasNotBeenFocused: true,
  hasRemovalButton: true,
  autoFocusEnabled: false,
  isZeroIndex: equal('itemIndex', 0),
  isNotZeroIndex: not('isZeroIndex'),
  focussableInputs: null,
  atLeastOneInput: gt('focussableInputs.length', 0),
  shouldFocus: and('isNotZeroIndex', 'atLeastOneInput', 'hasNotBeenFocused', 'autoFocusEnabled'),

  didInsertElement() {
    this._super(...arguments);
    this.setupFocusableInputs();
    if (this.get('shouldFocus')) {
      this.focusOnFirstUserInput();
    }
  },

  setupFocusableInputs() {
    var currentElement = document.getElementById(this.elementId),
        currrentFocussableInputs = currentElement.querySelectorAll('input,textarea,select');

    set(this, 'focussableInputs', currrentFocussableInputs);
  },

  focusOnFirstUserInput() {
    get(this, 'focussableInputs')[0].focus();
  },

  actions: {
    triggerRemoveRepeatedItem(currentRepeatedItem) {
      this.attrs.removeAction(currentRepeatedItem);
    }
  }

});
