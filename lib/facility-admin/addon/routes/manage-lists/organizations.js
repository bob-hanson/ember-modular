import { get } from '@ember/object';
import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityEncountersBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels("facility-organization");
  },

  setupController(controller, currentOrganizations) {
    this._super(...arguments);
    controller.set('currentOrganizations', currentOrganizations);
  }

});
