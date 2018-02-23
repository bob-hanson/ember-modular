import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingFacility', true);
  },

  model() {
    return this.modelFor('manage-lists.facilities');
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFacility', false);
  },

  processFormData(formData) {
    get(this, 'facilityAuditRepository')
    .createFacility(formData)
    .then(this.handleFacilityCreateResponse.bind(this));
  },

  handleFacilityCreateResponse(newFacility) {
    get(this, 'store').pushPayload(newFacility);
    let facility = get(this, 'store').peekRecord('facility', newFacility.data.id);
    this.transitionTo(get(facility, 'facilityAdminFacilityDetailsPath'), facility);
  },

  actions: {

    triggerFormSubmit(objectId, formData) {
      this.processFormData(formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.facilities');
    }
  }

});
