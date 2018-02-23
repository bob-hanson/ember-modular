import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingGuideLine', true);
  },

  model(params) {
    return get(this, 'store').findRecord('facility-guideline', params.guidelineSlug);
  },

  setupController(controller, currentGuideline) {
    this._super(...arguments);
    controller.set('currentGuideline', currentGuideline);
    controller.set('currentGuidelines', this.modelFor('audit-settings.audit-guidelines'));
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingGuideLine', false);
  }

});
