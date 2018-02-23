import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityEncountersBaseRoute.extend({

  model() {
    return this.modelFor('projects.project.project-details.project-encounters.project-encounter');
  },

  afterModel() {
    this.destroyAuditFormObject();
  },

  setupController(controller, currentEncounter) {
    this._super(controller, currentEncounter);
    set(controller, 'currentEncounter', currentEncounter);
    set(controller, 'currentProjects', this.modelFor('projects.project.project-details.project-encounters'));
  },

  activate() {
    get(this, 'hyspaActionPanelService').openActionPanel();
  },

  deactivate() {
    this.destroyAuditFormObject();
    get(this, 'hyspaActionPanelService').destroyActionComponent();
  },

  destroyAuditFormObject() {
    this.get('facilityAudit').set('auditFormObject', null);
  }

});
