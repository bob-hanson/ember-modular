import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/component-container';

export default BaseComponent.extend({
  layout,
  classNameBindings: ['colSpan'],
  isLoaded: true
});
