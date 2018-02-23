import ComponentColumn from 'hyspa-common-components/components/component-column';
import layout from '../templates/components/component-column-with-list';

export default ComponentColumn.extend({
  layout,
  classNameBindings: ['colSpan'],

  showFilter: true,
  emptyCollectionMessage: 'No records found'
});
