import Component from '@ember/component';
import layout from '../templates/components/loading-element';

export default Component.extend({
  layout,
  classNames: ['loading-element'],
  classNameBindings: ['loaderSize'],
  loaderSize: 'regular'

});
