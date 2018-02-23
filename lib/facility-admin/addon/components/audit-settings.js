import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/audit-settings';

export default ListColumn.extend({
  layout,
  classNames: ['audit-settings'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
