import { get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isViewingFacility', true);
  },

  model() {
    return this.modelFor('manage-lists.facilities.facility');
  },

  setupController(controller, currentFacility) {
    this._super(...arguments);
    controller.set('currentFacility', currentFacility);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingFacility', false);
  },

  processFormData(objectSlug, formData) {
    get(this, 'facilityAuditRepository')
      .updateFacility(objectSlug, formData)
      .then(this.handleFacilityCreateResponse.bind(this));
  },

  handleFacilityCreateResponse(currentFacility) {
    get(this, 'store').pushPayload(currentFacility);
    let facility = get(this, 'store').peekRecord('facility', currentFacility.data.id);
    this.transitionTo(get(facility, 'facilityAdminFacilityDetailsPath'), facility);
  },

  actions: {

    triggerFormSubmit(objectSlug, formData) {
      this.processFormData(objectSlug, formData);
    },

    triggerFormCancel() {
      this.transitionTo('manage-lists.facilities');
    }
  }

});
