import { get } from '@ember/object';
import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityEncountersBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels("facility-provider");
  },

  setupController(controller, currentProviders) {
    this._super(...arguments);
    controller.set('currentProviders', currentProviders);
  }

});
