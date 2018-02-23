import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({
  activate() {
    get(this, 'facilityAudit').set('isViewingChecklistCategory', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingChecklistCategory', false);
  }

});
