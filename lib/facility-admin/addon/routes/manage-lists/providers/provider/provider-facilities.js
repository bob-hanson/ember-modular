import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingProvider', true);
  },

  model() {
    return this.modelFor('manage-lists.providers.provider').get('providerFacilities');
  },

  setupController(controller, currentProviderFacilities ) {
    this._super(...arguments);
    set(controller, 'currentProviderFacilities', currentProviderFacilities);
    set(controller, 'currentProvider', this.modelFor('manage-lists.providers.provider'));
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingProvider', false);
  }

});
