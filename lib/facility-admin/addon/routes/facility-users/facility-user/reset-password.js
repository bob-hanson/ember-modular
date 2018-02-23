import { get, set } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingUser', true);
  },

  model() {
    return this.modelFor('facility-users.facility-user');
  },

  setupController(controller, currentUser) {
    this._super(...arguments);
    set(controller, 'currentUser', currentUser);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingUser', false);
  },

  processFormData(objectSlug, formData) {
    this.debugFormData(formData);
    get(this, 'facilityAuditRepository')
      .resetUserPassword(objectSlug, formData)
      .then(this.handleSuccessResponse.bind(this));
  },

  handleSuccessResponse(response) {
    get(this, 'store').pushPayload(response);
    let user = get(this, 'store').peekRecord('facility-user', response.data.id);
    get(this, 'toast').successToast('Password Reset Successful');
    this.transitionTo(get(user, 'facilityAdminUserDetailsPath'), user);
  },

  actions: {

    triggerFormSubmit(objectId, formData) {
      this.processFormData(objectId, formData);
    },

    triggerFormCancel() {
      this.transitionTo('facility-users.facility-user', this.modelFor('facility-users.facility-user'));
    }
  }

});
