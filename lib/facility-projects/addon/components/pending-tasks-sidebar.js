import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/pending-tasks-sidebar';


export default ListColumn.extend({
  layout,
  classNames: ['pending-tasks-sidebar'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
