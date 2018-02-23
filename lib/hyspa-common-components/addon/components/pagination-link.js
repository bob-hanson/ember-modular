import { computed, get } from '@ember/object';
import { not } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/pagination-link';

export default BaseComponent.extend({
  layout,
  classNames: ['pagination-link'],
  classNameBindings: ['paginationDirection'],

  isDirectionLeft: computed('direction', function() {
    return get(this, 'direction') === 'left';
  }),
  isDirectionRight: not('isDirectionLeft'),

  paginationDirection: computed('isDirectionLeft', function() {
    return get(this, 'isDirectionLeft') ? 'left' : 'right';
  })

});
