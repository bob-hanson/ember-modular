import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { set } from '@ember/object';

export default FacilityEncountersBaseRoute.extend({

  model() {
    return this.modelFor('projects.project.project-details.project-encounters.project-encounter.edit-encounter');
  },

  setupController(controller, currentPatientData) {
    this._super(controller, currentPatientData);
    set(controller, 'currentPatientData', currentPatientData);
  }

});
