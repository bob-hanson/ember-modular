import { get } from '@ember/object';
import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityEncountersBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository')
          .fetchAllFacilityAudits()
          .then(this.pushStoreData.bind(this));
  },


  setupController(controller, currentProjects) {
    this._super(...arguments);
    controller.set('currentProjects', currentProjects);
  },

  pushStoreData(response) {
    get(this, 'store').pushPayload(response);
    return get(this, 'store').peekAll("facility-audit");
  }

});
