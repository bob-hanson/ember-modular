import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({
  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-key-finding-sub-category');
  },

  setupController(controller, currentSubcategories) {
    this._super(...arguments);
    controller.set('currentSubcategories', currentSubcategories);
  },

  processNewFormData(formData) {
    get(this, 'facilityAuditRepository')
      .createFindingsRecommendationsSubcategory(formData)
      .then(this.handleFindingsRecommendationsSubcategoryPersistResponse.bind(this));
  },

  processEditFormData(objectId, formData) {
    get(this, 'facilityAuditRepository')
      .updateFindingsRecommendationsSubcategory(objectId, formData)
      .then(this.handleFindingsRecommendationsSubcategoryPersistResponse.bind(this));
  },

  handleFindingsRecommendationsSubcategoryPersistResponse(newSubcategory) {
    get(this, 'store').pushPayload(newSubcategory);
    let subcategory = get(this, 'store').peekRecord('facility-key-finding-sub-category', newSubcategory.data.id);
    this.transitionTo(get(subcategory, 'facilityAdminFindingsRecommendationSubcategoryPath'), subcategory);
  },

  actions: {
    triggerFormSubmit(objectId, formData) {
      if (objectId) {
        this.processEditFormData(objectId, formData);
      } else {
        this.processNewFormData(formData);
      }
    },
    triggerFormCancel() {
      this.transitionTo('audit-settings.findings-recommendations.sub-categories');
    }
  }

});
