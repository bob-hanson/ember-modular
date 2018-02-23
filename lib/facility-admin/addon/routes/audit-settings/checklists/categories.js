import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-checklist-category');
  },

  setupController(controller, currentCategories) {
    this._super(...arguments);
    controller.set('currentCategories', currentCategories);
  },

  processNewFormData(formData) {
    formData.append("facility_checklist_categories[sort_order]", get(this, 'store').peekAll('facility-checklist-category').filterBy('isListed', true).length + 1);
    get(this, 'facilityAuditRepository')
      .createChecklistCategory(formData)
      .then(this.handleChecklistCateogoryPersistResponse.bind(this));
  },

  processEditFormData(objectId, formData) {
    get(this, 'facilityAuditRepository')
      .updateChecklistCategory(objectId, formData)
      .then(this.handleChecklistCateogoryPersistResponse.bind(this));
  },

  handleChecklistCateogoryPersistResponse(newCategory) {
    get(this, 'store').pushPayload(newCategory);
    let category = get(this, 'store').peekRecord('facility-checklist-category', newCategory.data.id);
    this.transitionTo(get(category, 'facilityAdminChecklistCategoryPath'), category);
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
      this.transitionTo('audit-settings.checklists.categories');
    }
  }

});
