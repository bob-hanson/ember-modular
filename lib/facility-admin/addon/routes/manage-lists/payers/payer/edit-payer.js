import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingPayer', true);
  },

  model() {
    return this.modelFor('manage-lists.payers.payer');
  },

  setupController(controller, currentPayer) {
    this._super(...arguments);
    controller.set('currentPayer', currentPayer);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingPayer', false);
  },

  processFormData(objectSlug, formData) {
    get(this, 'facilityAuditRepository')
      .updatePayer(objectSlug, formData)
      .then(this.handleSuccessResponse.bind(this));
  },

  handleSuccessResponse(currentPayer) {
    get(this, 'store').pushPayload(currentPayer);
    let payer = get(this, 'store').peekRecord('facility-payer', currentPayer.data.id);
    this.transitionTo(get(payer, 'facilityAdminPayerDetailsPath'), payer);
  },

  actions: {

    triggerFormSubmit(objectSlug, formData) {
      this.processFormData(objectSlug, formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.payers');
    }
  }

});
