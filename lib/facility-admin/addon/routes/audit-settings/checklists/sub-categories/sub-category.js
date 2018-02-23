import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  model(params) {
    return get(this, 'store').findRecord('facility-checklist-sub-category', params.subcategorySlug);
  },

  setupController(controller, currentSubcategory) {
    this._super(...arguments);
    controller.set('currentSubcategory', currentSubcategory);
  },

  activate() {
    get(this, 'facilityAudit').set('isViewingChecklistSubcategory', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingChecklistSubcategory', false);
  }

});
