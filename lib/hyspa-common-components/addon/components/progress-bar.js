import BaseComponent from 'hyspa-base-components/components/base-component';
// import { computed, get } from '@ember/object';
import layout from '../templates/components/progress-bar';

export default BaseComponent.extend({
  layout,
  classNames: ['progress-bar'],
  classNameBindings: ['colSpan']

});
