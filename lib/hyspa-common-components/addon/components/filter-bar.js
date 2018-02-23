import { observer, get, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { debounce } from '@ember/runloop';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/filter-bar';

export default BaseComponent.extend({
  layout,
  classNames: ['search-bar'],
  classNameBindings: ['colSpan'],
  padding: '1,1,1,4',
  filterValue: null,
  defaultValue: null,
  hasFilterValue: notEmpty('filterValue'),

  init() {
    this._super();
    this.resetFilterValue();
  },

  handleFilterInputChange: observer('filterValue', function () {
    debounce(this, this.debouncedFilter, 150);
  }),

  debouncedFilter() {
    this.attrs.triggerFilter(get(this, 'filterValue'));
  },

  resetFilterValue() {
    var defaultValue = get(this, 'defaultValue');
    defaultValue ? set(this, 'filterValue', defaultValue)
                 : set(this, 'filterValue', null);
  },

  actions: {

    triggerFilterFieldChange() {
      this.handleFilterInputChange();
    },

    triggerClearFilter() {
      this.resetFilterValue();
    }

  }

});
