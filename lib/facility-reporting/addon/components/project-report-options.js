import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/project-report-options';

export default ListColumn.extend({
  layout,
  classNames: ['project-report-options'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});
