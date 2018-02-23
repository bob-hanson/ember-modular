import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/audit-box-section-bottom-bar';

export default BaseComponent.extend({
  layout,
  classNames: ['audit-box-section-bottom-bar', 'section-bottom-bar'],
  classNameBindings: ['colSpan'],
  padding: '2,0,0,0'
});
