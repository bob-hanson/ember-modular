import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-checklist-sub-category');
  },

  handleSubcategoriesFetched(subCategories) {
    set(this, 'facilityAudit.checklistSubcategoriesLoaded', true);
    return subCategories;
  },

  setupController(controller, currentSubcategories) {
    this._super(...arguments);
    controller.set('currentSubcategories', currentSubcategories);
  },

  processNewFormData(formData) {
    formData.append("facility_checklist_categories[sort_order]", get(this, 'store').peekAll('facility-checklist-category').filterBy('isListed', true).length + 1);
    get(this, 'facilityAuditRepository')
      .createChecklistSubcategory(formData)
      .then(this.handleChecklistSubcateogoryPersistResponse.bind(this));
  },

  processEditFormData(objectId, formData) {
    get(this, 'facilityAuditRepository')
      .updateChecklistSubcategory(objectId, formData)
      .then(this.handleChecklistSubcateogoryPersistResponse.bind(this));
  },

  handleChecklistSubcateogoryPersistResponse(categoryResponse) {
    get(this, 'store').pushPayload(categoryResponse);
    let subcategory = get(this, 'store').peekRecord('facility-checklist-sub-category', categoryResponse.data.id);
    this.transitionTo(get(subcategory, 'facilityAdminChecklistSubcategoryPath'), subcategory);
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
      this.transitionTo('audit-settings.checklists.sub-categories');
    },

    triggerDelete() {
      alert('deleting');
    }
  }

});
