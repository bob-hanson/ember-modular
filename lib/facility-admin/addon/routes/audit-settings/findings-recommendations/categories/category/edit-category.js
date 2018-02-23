import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { set } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    return this.modelFor('audit-settings.findings-recommendations.categories.category');
  },

  setupController(controller, currentCategory) {
    this._super(...arguments);
    set(controller, 'currentCategory', currentCategory);
  }

});
