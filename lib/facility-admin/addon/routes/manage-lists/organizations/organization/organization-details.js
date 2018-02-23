import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingOrganization', true);
  },

  model() {
    return this.modelFor('manage-lists.organizations.organization');
  },

  setupController(controller, currentOrganization) {
    this._super(...arguments);
    controller.set('currentOrganization', currentOrganization);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingOrganization', false);
  }

});
