import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/facility-audit-nav';

export default BaseComponent.extend({
  layout,
  classNames: ['vertical-nav secondary-background'],
  classNameBindings: ['colSpan']
});
