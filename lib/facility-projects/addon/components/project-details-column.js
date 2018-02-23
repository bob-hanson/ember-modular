import ComponentColumn from 'hyspa-common-components/components/component-column';
import layout from '../templates/components/project-details-column';

export default ComponentColumn.extend({
  layout,
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
