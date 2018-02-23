import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  model(params) {
    return get(this, 'store').findRecord('facility-checklist-category', params.categorySlug);
  },

  setupController(controller, currentCategory) {
    this._super(...arguments);
    controller.set('currentCategory', currentCategory);
  },

  activate() {
    get(this, 'facilityAudit').set('isViewingChecklistCategory', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingChecklistCategory', false);
  }

});
