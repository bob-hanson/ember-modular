import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingCoder', true);
  },

  model() {
    return this.modelFor('manage-lists.coders.coder');
  },

  setupController(controller, currentCoder) {
    this._super(...arguments);
    controller.set('currentCoder', currentCoder);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingCoder', false);
  }

});
