import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/facility-codes';

export default ContentView.extend({
  layout,
  classNames: ['facility-codes'],
  classNameBindings: ['colSpan']
});
