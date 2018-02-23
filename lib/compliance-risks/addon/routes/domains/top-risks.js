import BaseComplianceRoute from 'compliance-common/routes/compliance-base-route';
import { set } from '@ember/object';

export default BaseComplianceRoute.extend({

  model() {
    // return get(this, 'complianceRepository').fetchTopRisks();
  },

  setupController(controller, topRisks) {
    this._super(...arguments);
    set(controller, 'topRisks', topRisks);
  }

});
