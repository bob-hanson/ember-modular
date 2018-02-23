import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingProvider', true);
  },

  model(params) {
    return get(this, 'store').findRecord('facility-provider', params.providerSlug);
  },

  setupController(controller, currentProvider) {
    this._super(...arguments);
    controller.set('currentProvider', currentProvider);
    get(this, 'currentApp').set('currentModel', currentProvider);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingProvider', false);
    get(this, 'currentApp').set('currentModel', null);
  }

});
