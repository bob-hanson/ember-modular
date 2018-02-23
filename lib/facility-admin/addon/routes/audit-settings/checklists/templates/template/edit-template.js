import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  model() {
    return this.modelFor('audit-settings.checklists.templates.template');
  },

  setupController(controller, currentTemplate) {
    this._super(...arguments);
    controller.set('currentTemplate', currentTemplate);
  }

});