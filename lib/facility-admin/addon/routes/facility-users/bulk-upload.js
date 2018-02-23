import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingUser', true);
  },

  model(params) {
    return get(this, 'store').findRecord('user', params.userSlug);
  },

  setupController(controller, currentUser) {
    this._super(...arguments);
    controller.set('currentUser', currentUser);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingUser', false);
  }

});
