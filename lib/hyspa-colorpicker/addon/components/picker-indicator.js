import Component from '@ember/component';
import { computed, get } from '@ember/object';
import layout from '../templates/components/picker-indicator';

export default Component.extend({
  layout,
  classNames: ['color-picker-indicator'],
  classNameBindings: ['pickerType'],
  attributeBindings: ['draggable'],
  draggable: true,

  pickerType: computed('indicatorType', function () {
    return get(this, 'indicatorType') + '-indicator';
  }),

  dragStart(event) {
    // console.log(event);
    this.attrs.dragSelectorEvent(event);
  },

  drag(event) {
    // console.log(event);
    this.attrs.dragSelectorEvent(event);
  }

});
