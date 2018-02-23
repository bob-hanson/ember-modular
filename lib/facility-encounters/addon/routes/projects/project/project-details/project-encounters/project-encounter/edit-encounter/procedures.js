import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
// import { get } from '@ember/object';

export default FacilityEncountersBaseRoute.extend({
  // model() {
  //   var currentEncounter = this.modelFor('projects.project.project-details.project-encounters.project-encounter');
  //   if (currentEncounter.get('proceduresLoaded')) {
  //     return currentEncounter.get('facilityProcedures');
  //   } else {
  //     return get(this, 'store').query('facility-procedure', { "facility_encounter_id": currentEncounter.get('id') })
  //           .then(this.loadingProcedures.bind(this, currentEncounter));
  //   }
  // },

  // loadingProcedures(currentEncounter, facilityProcedures) {
  //   currentEncounter.set('proceduresLoaded', true);
  //   return facilityProcedures;
  // },

  // setupController(controller, currentProcedures) {
  //   this._super(controller, currentProcedures);
  //   controller.set('currentProcedures', currentProcedures);
  // }

});
