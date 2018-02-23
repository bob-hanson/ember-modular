import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';
import { hash } from 'rsvp';
import { not } from '@ember/object/computed';

export default FacilityBaseRoute.extend({

  categoriesNotFetched: not('facilityAuditRepository.facilityKeyFindingCategoryLoaded'),
  subcategoriesNotFetched: not('facilityAuditRepository.facilityKeyFindingSubCategoryLoaded'),

  model() {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-key-finding-template');
  },

  setupController(controller, currentTemplates) {
    this._super(...arguments);
    controller.set('currentTemplates', currentTemplates);
  },

  afterModel() {
    return this.fetchRelationships();
  },

  fetchRelationships() {
    var relationshipsHash = {};
    if (get(this, 'categoriesNotFetched')) {
      relationshipsHash.facilityChecklistCategories = get(this, 'store').findAll('facility-key-finding-category');
    }
    if (get(this, 'subcategoriesNotFetched')) {
      relationshipsHash.facilityChecklistSubCategories = get(this, 'store').findAll('facility-key-finding-sub-category')
    }

    return hash(relationshipsHash).then(this.handleRelationshipsFetched.bind(this));
  },

  handleRelationshipsFetched() {
    get(this, 'facilityAuditRepository').setProperties({
      facilityKeyFindingCategoryLoaded: true,
      facilityKeyFindingSubCategoryLoaded: true
    });
  },

  processNewFormData(formData) {
    get(this, 'facilityAuditRepository')
      .createFindingsRecommendationsTemplate(formData)
      .then(this.handleFindingsRecommendationsTemplatePersistResponse.bind(this));
  },

  processEditFormData(objectId, formData) {
    get(this, 'facilityAuditRepository')
      .updateFindingsRecommendationsTemplate(objectId, formData)
      .then(this.handleFindingsRecommendationsTemplatePersistResponse.bind(this));
  },

  handleFindingsRecommendationsTemplatePersistResponse(newTemplate) {
    get(this, 'store').pushPayload(newTemplate);
    let template = get(this, 'store').peekRecord('facility-key-finding-template', newTemplate.data.id);
    this.transitionTo(get(template, 'facilityAdminKeyFindingTemplatePath'), template);
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
    },
    triggerDelete() {

    }
  }

});

