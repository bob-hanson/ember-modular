import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/column-filter';

export default BaseComponent.extend({
  layout,
  classNames: ['column-filter'],
  classNameBindings: ['colSpan'],
  padding: '2,2,2,2'
});
