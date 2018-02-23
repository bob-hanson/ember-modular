import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/import-claims-assign-audit';

export default ContentView.extend({
  layout,
  classNames: ['import-claims-assign-audit'],
  classNameBindings: ['colSpan']
});
