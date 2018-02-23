import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({
  model(params) {
    return get(this, 'store').findRecord('facility-key-finding-template', params.templateSlug);
  },

  setupController(controller, currentTemplate) {
    this._super(...arguments);
    controller.set('currentTemplate', currentTemplate);
  },

  activate() {
    get(this, 'facilityAudit').set('isViewingFindingsRecommendationTemplate', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFindingsRecommendationTemplate', false);
  }

});
