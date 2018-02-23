import { computed, get } from '@ember/object';
import DS from 'ember-data';

const { Model } = DS;

export default Model.extend({
  isActive: true,
  isSelected: false,
  currentSubstate: "",
  isFetched: false,

  linkObject: computed('isFetched', function () {
    return get(this, 'isFetched') ? this
                                  : get(this, 'id');
  }),

  toggleFetched() {
    this.toggleProperty('isFetched');
  }
});
