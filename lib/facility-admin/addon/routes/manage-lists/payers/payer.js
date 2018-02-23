import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingPayer', true);
  },

  model(params) {
    return get(this, 'store').findRecord('facility-payer', params.payerSlug);
  },

  setupController(controller, currentPayer) {
    this._super(...arguments);
    controller.set('currentPayer', currentPayer);
    get(this, 'currentApp').set('currentModel', currentPayer);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingPayer', false);
    get(this, 'currentApp').set('currentModel', null);
  }

});
