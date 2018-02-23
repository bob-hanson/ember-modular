import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({
  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-key-finding-category');
  },

  setupController(controller, currentCategories) {
    this._super(...arguments);
    controller.set('currentCategories', currentCategories);
  },

  processNewFormData(formData) {
    get(this, 'facilityAuditRepository')
      .createFindingsRecommendationsCategory(formData)
      .then(this.handleFindingsRecommendationsCateogoryPersistResponse.bind(this));
  },

  processEditFormData(objectId, formData) {
    get(this, 'facilityAuditRepository')
      .updateFindingsRecommendationsCategory(objectId, formData)
      .then(this.handleFindingsRecommendationsCateogoryPersistResponse.bind(this));
  },

  handleFindingsRecommendationsCateogoryPersistResponse(newCategory) {
    get(this, 'store').pushPayload(newCategory);
    let category = get(this, 'store').peekRecord('facility-key-finding-category', newCategory.data.id);
    this.transitionTo(get(category, 'facilityAdminFindingsRecommendationCategoryPath'), category);
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
      this.transitionTo('audit-settings.findings-recommendations.categories');
    }
  }

});
