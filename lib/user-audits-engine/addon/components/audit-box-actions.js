import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/audit-box-actions';

export default BaseComponent.extend({
  layout,
  tagName: 'li',
  classNames: ['audit-box-actions'],
  classNameBindings: ['colSpan']
});
