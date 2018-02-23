import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/secondary-nav';

export default BaseComponent.extend({
  layout,
  classNames: ['vertical-nav secondary-background'],
  classNameBindings: ['colSpan']
});
