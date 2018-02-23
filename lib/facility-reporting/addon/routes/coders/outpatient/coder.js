import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingReportCoderProjects', true);
  },

  model(params) {
    return this.modelFor('coders').findBy('id', params.coderSlug);
  },

  setupController(controller, currentCoder) {
    this._super(...arguments);
    set(controller, 'currentCoder', currentCoder);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingReportCoderProjects', false);
  }

});
