import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { set } from '@ember/object';

export default FacilityEncountersBaseRoute.extend({

  model(params) {
    this.setProjectIdOnService(params.projectSlug);
    return this.modelFor('projects')
              .findBy('projectSlug', params.projectSlug);
  },

  setupController(controller, currentProject) {
    this._super(controller, currentProject);
    controller.set('currentProject', currentProject);
  },

  activate() {
    this.get('facilityAudit').set('isViewingFullProjectList', false);
  },

  deactivate() {
    this.get('facilityAudit').set('isViewingFullProjectList', true);
    this.removeProjectIdOnService();
  },

  setProjectIdOnService(auditId) {
    set(this, 'facilityAudit.currentAuditId', auditId);
  },

  removeProjectIdOnService() {
    set(this, 'facilityAudit.currentAuditId', null);
  }

});
