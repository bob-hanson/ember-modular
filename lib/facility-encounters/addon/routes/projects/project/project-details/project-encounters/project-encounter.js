import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityEncountersBaseRoute.extend({

  model(params) {
    this.setEncounterIdOnService(params.encounterSlug);
    return get(this, 'store').findRecord('facility-encounter', params.encounterSlug);
  },

  activate() {
    this.get('facilityAudit').set('isViewingEncounter', true);
  },

  deactivate() {
    this.get('facilityAudit').set('isViewingEncounter', false);
    this.removeEncounterIdOnService();
  },

  setEncounterIdOnService(encounterId) {
    set(this, 'currentApp.currentEncounterId', encounterId);
  },

  removeEncounterIdOnService() {
    set(this, 'currentApp.currentEncounterId', null);
  }

});
