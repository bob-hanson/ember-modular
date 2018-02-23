// import Ember from 'ember';
import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/facility-lists';

export default ListColumn.extend({
  layout,
  classNames: ['facility-lists'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20,
});
