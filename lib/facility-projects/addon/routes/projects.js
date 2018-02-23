import { hash } from 'rsvp';
import { get } from '@ember/object';

import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  model() {
    return this.get('store').findAll('facility-project');
  },

  afterModel() {
    // return this.fetchCommonModels();
  },

  fetchCommonModels() {
    return hash({
      facilities: get(this, 'store').findAll('facility')
    });
  },

  setupController(controller, currentProjects) {
    this._super(controller, currentProjects);
    controller.set('currentProjects', currentProjects);
  }

});
