import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels("facility-payer");
  },

  setupController(controller, currentPayers) {
    this._super(...arguments);
    controller.set('currentPayers', currentPayers);
  }

});
