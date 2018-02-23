import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/coder-report-options';

export default ListColumn.extend({
  layout,
  classNames: ['coder-report-options'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
