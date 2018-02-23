import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingProvider', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingProvider', false);
  },

  processFormData(objectSlug, formData) {
    get(this, 'facilityAuditRepository')
    .createProvider(formData)
    .then(this.handleSuccessResponse.bind(this));
  },

  handleSuccessResponse(newProvider) {
    get(this, 'store').pushPayload(newProvider);
    let provider = get(this, 'store').peekRecord('facility-provider', newProvider.data.id);
    this.transitionTo(get(provider, 'facilityAdminProviderDetailsPath'), provider);
  },

  actions: {

    triggerFormSubmit(objectSlug, formData) {
      this.processFormData(objectSlug, formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.providers');
    }

  }
});
