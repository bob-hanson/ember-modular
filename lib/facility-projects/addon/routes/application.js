import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({
  afterModel(model, transition) {
    var currentRoute = `${get(this, 'fullRouteName')}.index`,
        targetRoute = get(transition, 'targetName');

    if (currentRoute === targetRoute) {
      this.transitionTo('projects');
    }
  }

});
