import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingFacility', true);
  },

  model() {
    return this.modelFor(get(this, 'facilityAudit.facilityPath'));
  },

  setupController(controller, currentFacility) {
    this._super(...arguments);
    controller.set('currentFacility', currentFacility);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFacility', false);
  }

});
