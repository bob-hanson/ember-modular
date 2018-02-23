import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/table-layout-cell';

export default BaseComponent.extend({
  layout,
  classNames: ['table-layout-cell'],
  classNameBindings: ['colSpan'],
  noColSpan: true,
  padding: '1,0,1,0'

});
