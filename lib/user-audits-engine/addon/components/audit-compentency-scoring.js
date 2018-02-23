import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/audit-compentency-scoring';

export default ContentView.extend({
  layout,
  classNames: ['audit-compentency-scoring'],
  classNameBindings: ['colSpan']
});
