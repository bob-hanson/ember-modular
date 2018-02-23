import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/finding-recommendations-nav';

export default ListColumn.extend({
  layout,
  classNames: ['finding-recomendations-nav'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20
});

