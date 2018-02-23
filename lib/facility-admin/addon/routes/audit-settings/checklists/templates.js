import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';
import { not } from '@ember/object/computed';
import { hash } from 'rsvp';

export default FacilityBaseRoute.extend({

  categoriesNotFetched: not('facilityAuditRepository.facilityChecklistCategoryLoaded'),
  subcategoriesNotFetched: not('facilityAuditRepository.facilityChecklistSubCategoryLoaded'),

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-checklist-template');
  },

  afterModel() {
    return this.fetchRelationships();
  },

  fetchRelationships() {
    var relationshipsHash = {};
    if (get(this, 'categoriesNotFetched')) {
      relationshipsHash.facilityChecklistCategories = get(this, 'store').findAll('facility-checklist-category');
    }
    if (get(this, 'subcategoriesNotFetched')) {
      relationshipsHash.facilityChecklistSubCategories = get(this, 'store').findAll('facility-checklist-sub-category')
    }

    return hash(relationshipsHash).then(this.handleRelationshipsFetched.bind(this));
  },

  handleRelationshipsFetched() {
    get(this, 'facilityAuditRepository').setProperties({
      facilityChecklistCategoryLoaded: true,
      facilityChecklistSubCategoryLoaded: true
    });
  },

  setupController(controller, currentTemplates) {
    this._super(...arguments);
    controller.set('currentTemplates', currentTemplates);
  },

  processNewFormData(formData) {
    get(this, 'facilityAuditRepository')
      .createChecklistTemplate(formData)
      .then(this.handleChecklistTemplatePersistResponse.bind(this));
  },

  processEditFormData(objectId, formData) {
    get(this, 'facilityAuditRepository')
      .editChecklistTemplate(objectId, formData)
      .then(this.handleChecklistTemplatePersistResponse.bind(this));
  },

  handleChecklistTemplatePersistResponse(templateResponse) {
    get(this, 'store').pushPayload(templateResponse);
    let template = get(this, 'store').peekRecord('facility-checklist-template', templateResponse.data.id);
    this.transitionTo(get(template, 'facilityAdminChecklistTemplatePath'), template);
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
      this.transitionTo('audit-settings.checklists.templates');
    },
    triggerDelete() {

    }
  }

});
