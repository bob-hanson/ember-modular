import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/organization-clients';

export default ListColumn.extend({
  layout,
  classNames: ['clients'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
