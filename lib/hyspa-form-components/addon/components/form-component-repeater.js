import EmberObject, { get, set, setProperties, computed } from '@ember/object';
import { alias, notEmpty, empty, not } from '@ember/object/computed';
import { isEqualByKeys } from 'ember-macaroni';
import BaseMixin from 'hyspa-base-components/mixins/base-mixin';
import SortableObjects from 'ember-drag-drop/components/sortable-objects';
import layout from '../templates/components/form-component-repeater';

export default SortableObjects.extend(
  BaseMixin, {
  layout,
  tagName: 'ul',
  classNames: ['form-component-repeater'],
  classNameBindings: ['colSpan', 'enableSort'],
  labelText: null,
  hasLabel: notEmpty('labelText'),
  sortableObjectList: alias('currentList'),
  repeatedComponents: null,
  initialListLength: null,
  emptyCurrentList: empty('currentList'),
  repeatedComponentsLength: computed('repeatedComponents', function() {
    return get(this, 'repeatedComponents').length;
  }),
  shouldNotAutoFocus: isEqualByKeys('initialListLength', 'repeatedComponentsLength'),
  shouldAutoFocus: not('shouldNotAutoFocus'),

  initComponent() {
    this._super(...arguments);
    this.setupDefaults();
    this.setupInitialCollection();
    this.setInitialListLength();
  },

  setupDefaults() {
    setProperties(this, {
      repeatedComponents: []
    })
  },

  setupInitialCollection() {
    if (get(this, 'emptyCurrentList')) {
      if (get(this, 'currentList')) {
        get(this, 'currentList').pushObject(EmberObject.create());
      }
    }
  },

  setInitialListLength() {
    if (get(this, 'currentList')) {
      set(this, 'initialListLength', get(this, 'currentList').length);
    }
  },

  registerRepeatedComponent(component) {
    get(this, 'repeatedComponents').pushObject(component);
  },

  keyPress(event) {
    if (event.keyCode === 13) {
      this.attrs.addAction();
    }
  },

  actions: {
    triggerRegisterRepeatedComponent(component) {
      this.registerRepeatedComponent(component)
    }
  }

});
