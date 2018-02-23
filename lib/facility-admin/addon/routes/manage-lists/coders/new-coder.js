import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingCoder', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingCoder', false);
  },

  processFormData(objectSlug, formData) {
    get(this, 'facilityAuditRepository')
      .createCoder(objectSlug, formData)
      .then(this.handleCreateResponse.bind(this));
  },

  handleCreateResponse(currentCoder) {
    get(this, 'store').pushPayload(currentCoder);
    let coder = get(this, 'store').peekRecord('facility-coder', currentCoder.data.id);
    this.transitionTo(get(coder, 'facilityAdminCoderDetailsPath'), coder);
  },

  actions: {

    triggerFormSubmit(objectSlug, formData) {
      this.processFormData(objectSlug, formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.coders');
    }
  }
});
