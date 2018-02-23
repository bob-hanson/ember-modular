import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { set } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    return this.modelFor('projects').filterBy('isExternal', false);
  },

  setupController(controller, currentProjects) {
    this._super(...arguments);
    set(controller, 'currentProjects', currentProjects);
  }

});
