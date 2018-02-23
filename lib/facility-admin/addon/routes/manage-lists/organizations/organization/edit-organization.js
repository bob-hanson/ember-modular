import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

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
  },

  processFormData(objectSlug, formData) {
    get(this, 'facilityAuditRepository')
    .updateOrganization(objectSlug, formData)
    .then(this.handleSuccessResponse.bind(this));
  },

  handleSuccessResponse(currentOrganization) {
    get(this, 'store').pushPayload(currentOrganization);
    let organization = get(this, 'store').peekRecord('facility-organization', currentOrganization.data.id);
    this.transitionTo(get(organization, 'facilityAdminOrganizationDetailsPath'), organization);
  },

  actions: {

    triggerFormSubmit(objectSlug, formData) {
      this.processFormData(objectSlug, formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.organizations');
    }
  }

});
