import ContentView from 'hyspa-common-components/components/content-view';
import { get } from '@ember/object';
import layout from '../templates/components/payer-detail-container';

export default ContentView.extend({
  layout,
  classNames: ['payer-detail-container'],
  percentageWidth: 60,

  deletePayer(currentPayer) {
    get(this, 'toast').warningToast(`Are you sure you want to delete ${currentPayer.get('payerName')}? `);
  },

  handleSuccessfulDelete() {

  },

  actions: {
    triggerDelete(currentPayer) {
      this.deletePayer(currentPayer);
    }
  }
});
