import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/checklist-nav';

export default ListColumn.extend({
  layout,
  classNames: ['checklist-nav'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
