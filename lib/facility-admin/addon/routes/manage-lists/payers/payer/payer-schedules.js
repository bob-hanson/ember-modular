import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingPayer', true);
  },

  model() {
    return this.modelFor('manage-lists.payers.payer');
  },

  setupController(controller, currentPayer) {
    this._super(...arguments);
    controller.set('currentPayer', currentPayer);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingPayer', false);
  }

});
