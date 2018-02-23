import ContentView from 'hyspa-common-components/components/content-view';
import { get } from '@ember/object';
import layout from '../templates/components/coder-detail-container';

export default ContentView.extend({
  layout,
  classNames: ['coder-detail-container'],
  percentageWidth: 60,

  deleteFacility(currentCoder) {
    get(this, 'toast').warningToast(`Are you sure you want to delete ${currentCoder.get('coderName')}? `);
    // get(this, 'facilityAuditRepository').deleteFacility(currentFacility).then(this.handleSuccessfulDelete.bind(this));
  },

  handleSuccessfulDelete() {

  },

  actions: {
    triggerDelete(currentCoder) {
      this.deleteFacility(currentCoder);
    }
  }
});
