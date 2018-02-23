import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels("facility-user");
  },

  setupController(controller, currentUsers) {
    this._super(...arguments);
    set(controller, 'currentUsers', currentUsers);
  }

});
