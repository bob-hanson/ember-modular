import Mixin from '@ember/object/mixin';
import { get, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { debounce, cancel } from '@ember/runloop';

export default Mixin.create({
  filterList: service(),
  resizeService: service(),
  filteredCollection: null,
  hasFilteredCollection: notEmpty('filteredCollection'),

  currentDebounceCycle: null,

  setFilteredCollection(filterValue) {
    if (filterValue) {
      set(this, 'currentDebounceCycle', debounce(this, this.debouncedFilterCollection, filterValue, 400));
    } else {
      cancel(get(this, 'currentDebounceCycle'));
      set(this, 'filteredCollection', get(this, 'currentCollection'));
    }
  },

  debouncedFilterCollection(filterValue) {
    var newResults = get(this, 'filterList').filterCollection(get(this, 'filterProperties'), get(this, 'currentCollection'), filterValue);
    set(this, 'filteredCollection', newResults);
    this.afterFilterCollectionChange();
  },

  afterFilterCollectionChange() {
    get(this, 'resizeService').resizeApp();
  },

  actions: {

    triggerFilterCollection(filterValue) {
      this.setFilteredCollection(filterValue);
    }
  }

});
