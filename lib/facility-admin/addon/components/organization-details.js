import ContentView from 'hyspa-common-components/components/content-view';
import { get } from '@ember/object';
import layout from '../templates/components/organization-details';

export default ContentView.extend({
  layout,
  classNames: ['organization-details'],
  percentageWidth: 60,

  deleteFacility(currentFacility) {
    get(this, 'toast').warningToast(`Are you sure you want to delete ${currentFacility.get('facilityName')}? `);
    // get(this, 'facilityAuditRepository').deleteFacility(currentFacility).then(this.handleSuccessfulDelete.bind(this));
  },

  handleSuccessfulDelete() {

  },

  actions: {
    triggerDelete(currentFacility) {
      this.deleteFacility(currentFacility);
    }
  }
});
