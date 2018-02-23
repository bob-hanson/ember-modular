import { observer, get, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-checkbox-group';

export default BaseComponent.extend({
  layout,
  classNames: ['checkbox-group'],
  classNameBindings: ['colSpan'],
  boundCollection: null,
  hasLabel: notEmpty('labelText'),
  checkboxWidth: 100,
  padding: '1,0,1,0',

  initComponent() {
    this.setSelectedCheckboxes();
  },

  observeBoundCollection: observer('boundCollection', function() {
    this.setSelectedCheckboxes();
  }),

  setSelectedCheckboxes() {
    var self = this;
    if (Array.isArray(get(this, 'boundCollection'))) {
      get(this, 'checkboxOptions').forEach(function(checkbox) {
        checkbox.set('isSelected', false);
      });
      get(this, 'boundCollection').forEach(function (optionValue) {
        self.get('checkboxOptions').findBy('optionValue', optionValue).set('isSelected', true);
      });
    }
  },

  buildBoundCollection() {
    var tmpBoundCollection = [];

    get(this, 'checkboxOptions').forEach(function(checkboxOption) {
      if (checkboxOption.get('isSelected')) {
        tmpBoundCollection.pushObject(checkboxOption.optionValue);
      }
    });

    set(this, 'boundCollection', tmpBoundCollection);
  },

  actions: {
    triggerCheckboxClick() {
      this.buildBoundCollection();
      if (this.attrs.selectAction) {
        this.attrs.selectAction();
      }
    }
  }

});
