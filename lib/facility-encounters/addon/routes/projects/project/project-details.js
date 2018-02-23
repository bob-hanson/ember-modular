import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityEncountersBaseRoute.extend({

  model() {
    return this.modelFor('projects.project');
  },

  setupController(controller, currentProject) {
    this._super(controller, currentProject);
    controller.set('currentProject', currentProject);
  }

});
