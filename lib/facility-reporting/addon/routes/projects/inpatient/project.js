import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingReportProjectEncounters', true);
  },
  model(params) {
    return get(this, 'store').findRecord('facility-project', params.projectSlug);
  },

  setupController(controller, currentProject) {
    this._super(...arguments);
    controller.set('currentProject', currentProject);
  },
  deactivate() {
    get(this, 'facilityAudit').set('isViewingReportProjectEncounters', false);
  }


});
