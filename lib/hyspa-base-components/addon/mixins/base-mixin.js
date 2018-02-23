import Mixin from '@ember/object/mixin';
import { computed, get, set } from '@ember/object';
import { not } from '@ember/object/computed';
import { isPresent } from '@ember/utils';

export default Mixin.create({
  classNameBindings: ['computedPadding'],
  // attributeBindings: alias('dynamicAttrBindings'),
  percentageWidth: 100,
  padding: null,
  isActive: true,
  isSelected: false,
  isEnabled: true,
  isVisible: true,
  isNotSelected: not('isSelected'),
  isDisabled: not('isEnabled'),
  isHidden: not('isVisible'),
  isInactive: not('isActive'),
  componentOptions: null,
  noColSpan: false,
  childComponents: null,
  bubbles: false,
  testName: 'base',

  init() {
    this._super(...arguments);
    this.setDefaults();
    // this.registerComponent();
    this.initComponent();
  },

  setDefaults() {
    set(this, 'childComponents', []);
  },

  initComponent() { }, // Override in implementation components if needed.

  dataTestAttribute: computed('testName', function () {
    return `data-test-${get(this, 'testName')}`;
  }),

  registerComponent() {
    if (this.attrs.registerChildComponent) {
      this.attrs.registerChildComponent(this); // Override in implementation components if needed.
    }
  },

  colSpan: computed('percentageWidth', function () {
    if (get(this, 'noColSpan')) {
      return '';
    } else {
      return 'column-' + get(this, 'percentageWidth');
    }
  }),

  computedPadding: computed('padding', function() {
    var paddingString = get(this, 'padding');

    if (isPresent(get(this, 'padding'))) {
      if (paddingString.match(/^[0-4](,[0-4])*$/g)) {
        let p = paddingString.split(',');
        return `padding-top-${p[0]} padding-right-${p[1]} padding-bottom-${p[2]} padding-left-${p[3]}`;
      } else {
        return 'padding-top-0 padding-right-0 padding-bottom-0 padding-left-0';
      }
    }
  })

});
