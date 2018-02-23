import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  model() {
    return this.modelFor('audit-settings.checklists.sub-categories.sub-category');
  },

  setupController(controller, currentSubcategory) {
    this._super(...arguments);
    controller.set('currentSubcategory', currentSubcategory);
  }
});
