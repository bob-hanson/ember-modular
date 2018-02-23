import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/facility-audit-box-details';

export default BaseComponent.extend({
  layout,
  classNames: ['facility-audit-box-details audit-details'],
  classNameBindings: ['colSpan']
});
