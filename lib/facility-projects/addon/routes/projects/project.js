import { set, get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  model(params) {
    return get(this, 'store').findRecord('facility-project', params.projectSlug);
  },

  activate() {
    set(this, 'facilityAudit.isViewingProject', true);
  },

  deactivate() {
    set(this, 'facilityAudit.isViewingProject', false);
  }

});
