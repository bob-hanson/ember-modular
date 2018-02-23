import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  model(params) {
    return this.modelFor('pending-tasks.resources')
      .findBy('resourceSlug', params.resourceSlug);
  },

  setupController(controller, currentResource) {
    this._super(...arguments);
    controller.set('currentResource', currentResource);
  },

  activate() {
    this.get('facilityAudit').set('isViewingFullResourcesList', false);
  },

  deactivate() {
    this.get('facilityAudit').set('isViewingFullResourcesList', true);
  },
});
