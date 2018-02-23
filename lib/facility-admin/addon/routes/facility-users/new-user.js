import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingUser', true);
  },

  model() {
    return this.modelFor('facility-users');
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingUser', false);
  },

  processFormData(objectId, formData) {
    // this.debugFormData(formData);
    get(this, 'facilityAuditRepository')
    .createUser(formData)
    .then(this.handleSuccessResponse.bind(this));
  },

  handleSuccessResponse(response) {
    get(this, 'store').pushPayload(response);
    let user = get(this, 'store').peekRecord('facility-user', response.data.id);
    this.transitionTo(get(user, 'facilityAdminUserDetailsPath'), user);
  },

  actions: {

    triggerFormSubmit(objectId, formData) {
      this.processFormData(objectId, formData);
    },

    triggerFormCancel() {
      this.transitionTo('facility-users');
    }
  }

});
