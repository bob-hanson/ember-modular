import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/user-details';

export default ContentView.extend({
  layout,
  classNames: ['facility-user'],
  percentageWidth: 60,

  actions: {

    triggerDelete() {

    }

  }
});
