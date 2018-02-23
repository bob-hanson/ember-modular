import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingOrganization', true);
  },

  model(params) {
    return get(this, 'store').findRecord('facility-organization', params.organizationSlug);
  },

  setupController(controller, currentOrganization) {
    this._super(...arguments);
    set(controller, 'currentOrganization', currentOrganization);
    get(this, 'currentApp').set('currentModel', currentOrganization);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingOrganization', false);
    get(this, 'currentApp').set('currentModel', null);
  }

});
