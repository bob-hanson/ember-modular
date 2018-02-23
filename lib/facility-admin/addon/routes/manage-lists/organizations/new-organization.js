import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingOrganization', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingOrganization', false);
  },

  processFormData(objectSlug, formData) {
    get(this, 'facilityAuditRepository')
      .createOrganization(objectSlug, formData)
      .then(this.handleSuccessResponse.bind(this));
  },

  handleSuccessResponse(currentOrganization) {
    get(this, 'store').pushPayload(currentOrganization);
    let organization = get(this, 'store').peekRecord('facility-organization', currentOrganization.data.id);
    this.transitionTo(get(organization, 'facilityAdminOrganizationDetailsPath'), organization);
  },

  actions: {

    triggerFormSubmit(objectSlug, formData) {
      // this.debugFormData(formData);
      this.processFormData(objectSlug, formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.organizations');
    }
  }

});
