import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/component-row';

export default BaseComponent.extend({
  layout,
  classNames: ['component-container', 'component-row'],
  classNameBindings: ['colSpan']
});
