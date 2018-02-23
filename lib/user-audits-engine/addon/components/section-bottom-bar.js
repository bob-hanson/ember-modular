import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/section-bottom-bar';

export default BaseComponent.extend({
  layout,
  classNames: ['section-bottom-bar'],
  classNameBindings: ['colSpan']
});
