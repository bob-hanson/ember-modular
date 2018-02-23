import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/organization-client-detail';

export default ContentView.extend({
  layout,
  classNames:['organization-client-detail'],
  classNameBindings:['colSpan'],
  percentageWidth: 60,
});
