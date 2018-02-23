import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({
  activate() {
    get(this, 'facilityAudit').set('isViewingFindingsRecommendationSubcategory', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFindingsRecommendationSubcategory', false);
  }

});