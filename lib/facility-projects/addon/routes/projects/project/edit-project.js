import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  model() {
    return this.modelFor('projects.project');
  },

  setupController(controller, currentProject) {
    controller.set('currentProject', currentProject);
  }

});
