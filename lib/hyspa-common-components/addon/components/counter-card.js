import { computed, get } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/counter-card';

export default BaseComponent.extend({
  layout,
  classNames: ['counter-card'],
  classNameBindings: ['labelColor'],


  labelColor: computed('cardStatus', function () {
    switch(get(this, 'cardStatus')) {
      case 'status':
        return 'status';
      case 'alert':
        return 'alert';
      case 'error':
        return 'error';
      case 'update':
        return 'update';
      case 'non-urgent':
        return 'non-urgent';
      case 'secondary-status':
        return 'secondary-status';
      case 'secondary-alert':
        return 'secondary-alert';
      case 'secondary-error':
        return 'secondary-error';
      case 'secondary-update':
        return 'secondary-update';
      case 'secondary-non-urgent':
        return 'secondary-non-urgent';
    }
  })





});
