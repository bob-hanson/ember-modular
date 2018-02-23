import ContentView from 'hyspa-common-components/components/content-view';
import { get } from '@ember/object';
import layout from '../templates/components/provider-detail-container';

export default ContentView.extend({
  layout,
  classNames: ['provider-detail-container'],
  percentageWidth: 60,

  deleteProvider(currentProvider) {
    get(this, 'toast').warningToast(`Are you sure you want to delete ${currentProvider.get('providerName')}? `);
  },

  handleSuccessfulDelete() {

  },

  actions: {
    triggerDelete(currentProvider) {
      this.deleteProvider(currentProvider);
    }
  }
});

