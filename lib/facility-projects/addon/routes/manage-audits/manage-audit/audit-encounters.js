import { get, set } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  model() {
    var coderProject = this.modelFor('manage-audits.manage-audit');
    if (get(coderProject, 'encountersLoaded')) {
      return this.getEncountersFromStore(coderProject);
    } else {
      return get(this, 'facilityAuditRepository')
                 .fetchFacilityEncounters(get(coderProject, 'facilityProjectId'))
                 .then(this.storePush.bind(this, coderProject));
    }

  },

  setupController(controller, currentEncounters) {
    this._super(...arguments);
    controller.set('currentEncounters', currentEncounters);
  },

  storePush(coderProject, response) {
    get(this, 'store').pushPayload(response);
    set(coderProject, 'encountersLoaded', true);
    return this.getEncountersFromStore(coderProject);
  },

  getEncountersFromStore(coderProject) {
    return get(this, 'store').peekAll('facility-encounter').filterBy('facilityProjectId', get(coderProject, 'facilityProjectId'));
  }

});
