import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingCoder', true);
  },

  model(params) {
    return get(this, 'store').findRecord('facility-coder', params.coderSlug);
  },

  setupController(controller, currentCoder) {
    this._super(...arguments);
    set(controller, 'currentCoder', currentCoder);
    get(this, 'currentApp').set('currentModel', currentCoder);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingCoder', false);
    get(this, 'currentApp').set('currentModel', null);
  }

});
