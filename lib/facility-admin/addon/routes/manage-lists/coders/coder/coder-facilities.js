import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingCoder', true);
  },

  model() {
    return this.modelFor('manage-lists.coders.coder').get('facilities');
  },

  setupController(controller, currentCoderFacilities) {
    this._super(...arguments);
    set(controller, 'currentCoderFacilities', currentCoderFacilities);
    set(controller, 'currentCoder', this.modelFor('manage-lists.coders.coder'));
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingCoder', false);
  }

});
