import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingProvider', true);
  },

  model() {
    return this.modelFor('manage-lists.providers.provider');
  },

  setupController(controller, currentProvider) {
    this._super(...arguments);
    controller.set('currentProvider', currentProvider);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingProvider', false);
  }

});
