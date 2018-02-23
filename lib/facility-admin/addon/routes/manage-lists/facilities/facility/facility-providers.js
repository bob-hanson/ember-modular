import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingFacility', true);
  },

  model() {
    return this.modelFor(get(this, 'facilityAudit.facilityPath')).get('facilityProviders');
  },

  setupController(controller, currentFacilityProviders) {
    this._super(...arguments);
    set(controller, 'currentFacilityProviders', currentFacilityProviders);
    set(controller, 'currentFacility', this.modelFor(get(this, 'facilityAudit.facilityPath')));
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFacility', false);
  }

});
