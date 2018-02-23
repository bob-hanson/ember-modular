import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingFacility', true);
  },

  model(params) {
    return get(this, 'store').findRecord('facility', params.facilitySlug);
  },

  setupController(controller, currentFacility) {
    this._super(...arguments);
    set(controller, 'currentFacility', currentFacility);
    get(this, 'currentApp').set('currentModel', currentFacility);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFacility', false);
    get(this, 'currentApp').set('currentModel', null);
  }

});
