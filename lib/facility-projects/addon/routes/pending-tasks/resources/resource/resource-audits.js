import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  model() {
    //TODO: FETCH ONLY resource specific audits
    return get(this, 'store').findAll('facility-audit');
  },

  setupController(controller, currentResourceAudits) {
    this._super(...arguments);
    controller.set('currentResourceAudits', currentResourceAudits);
  }

});
