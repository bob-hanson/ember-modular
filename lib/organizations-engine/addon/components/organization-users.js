import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/organization-users';

export default ListColumn.extend({
  layout,
  classNames: ['users'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
