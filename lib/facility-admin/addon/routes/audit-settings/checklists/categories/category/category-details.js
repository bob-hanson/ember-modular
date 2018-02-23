import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  model() {
    return this.modelFor('audit-settings.checklists.categories.category');
  },

  setupController(controller, currentCategory) {
    this._super(...arguments);
    controller.set('currentCategory', currentCategory);
  }

});
