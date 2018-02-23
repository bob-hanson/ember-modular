import { set } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  activate() {
    set(this, 'facilityAudit.isViewingProject', true);
  },

  deactivate() {
    set(this, 'facilityAudit.isViewingProject', false);
  }
});
