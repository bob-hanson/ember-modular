import { computed, get } from '@ember/object';
import { not } from '@ember/object/computed';
import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  isActive: true,
  isSelected: false,
  isNotSelected: not('isSelected'),
  currentSubstate: "",
  isFetched: false,
  isFullyLoaded: attr('boolean'),

  linkObject: computed('isFetched', function () {
    return get(this, 'isFetched') ? this
                                  : get(this, 'id');
  }),

  toggleFetched() {
    this.toggleProperty('isFetched');
  }
});
