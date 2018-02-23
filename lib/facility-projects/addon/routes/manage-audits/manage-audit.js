import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  model(params) {
    return this.modelFor('manage-audits')
      .findBy('auditSlug', params.auditSlug);
  },

  setupController(controller, currentAudit) {
    this._super(...arguments);
    controller.set('currentAudit', currentAudit);
  },

  activate() {
    this.get('facilityAudit').set('isViewingFullManageAuditList', false);
  },

  deactivate() {
    this.get('facilityAudit').set('isViewingFullManageAuditList', true);
  },
});
