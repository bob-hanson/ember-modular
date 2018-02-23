import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({
  model(params) {
    return get(this, 'store').findRecord('facility-key-finding-sub-category', params.subcategorySlug);
  },

  setupController(controller, currentCategory) {
    this._super(...arguments);
    controller.set('currentCategory', currentCategory);
  },

  activate() {
    get(this, 'facilityAudit').set('isViewingFindingsRecommendationSubcategory', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFindingsRecommendationSubcategory', false);
  }

});