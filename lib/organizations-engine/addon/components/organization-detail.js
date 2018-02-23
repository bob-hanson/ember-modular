import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/organization-detail';

export default ContentView.extend({
  layout,
  classNames: ['organization-detail'],
  classNameBindings: ['colSpan'],
  percentageWidth: 80
});
