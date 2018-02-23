import Service, { inject as service } from '@ember/service';
import { computed, get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

// Fetch implements the HTTP Fetch Standard Polyfill
// https://github.github.io/fetch/

// Repsonse Objects are expected in the http://jsonapi.org/ structure
// getRequest(url, options)
// processRequest(url, formData, methodType, options)

export default Service.extend({
  currentApp: service(),
  store: service(),
  facilityAuditFixtures: service(),
  http: service(),

  currentClientSubdomain: alias('currentApp.currentClient.subdomain'),
  facilityEndPoint: computed('currentClientSubdomain', function () {
    return '/clients/' + get(this, 'currentClientSubdomain') + '/facility/';
  }),

  fetchIDBModels(modelType) {
    return get(this, 'store').findAll(modelType);
  },

  // Simple fetch wrapper around the findAll store methods.
  fetchStoreModels(modelType) {
    if (get(this, `${modelType.camelize()}Loaded`)) {
      return get(this, 'store').peekAll(modelType); //'facility-provider'
    } else {
      set(this, `${modelType.camelize()}Loaded`, true);
      return get(this, 'store').findAll(modelType, { reload: true });
    }
  },

  unsetModelCache(modelType) {
    set(this, `${modelType.camelize()}Loaded`, false);
  },

  sendReportRequest(formData) {
    get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_report_processing/', formData)
  },

  createUser(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_users/', formData);
  },

  updateUser(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_users/' + objectSlug, formData, 'PUT');
  },

  resetUserPassword(objectSlug, formData) {
    return get(this, 'http').processRequest(`${get(this, 'facilityEndPoint')}facility_users/${objectSlug}/update_password`, formData);
  },

  fetchAllCoders() {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_coders');
  },

  fetchCoder(objectSlug) {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_coders/' + objectSlug);
  },

  createCoder(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_coders/', formData);
  },

  updateCoder(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_coders/' + objectSlug, formData, 'PUT');
  },

  fetchAllProviders() {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_providers');
  },

  fetchProvider(objectSlug) {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_providers/' + objectSlug);
  },

  createProvider(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_providers/', formData);
  },

  updateProvider(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_providers/' + objectSlug, formData, 'PUT');
  },

  fetchAllOrganizations() {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_organizations');
  },

  fetchOrganization(objectSlug) {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_organizations/' + objectSlug);
  },

  createOrganization(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_organizations/', formData);
  },

  updateOrganization(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_organizations/' + objectSlug, formData, 'PUT');
  },

  fetchAllPayers() {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facility_payers');
  },

  fetchPayer(objectSlug) {
    return get(this, 'http').getRequest(get(this, 'facilityEndPoint') + 'facility_payers/' + objectSlug);
  },

  createPayer(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_payers/', formData);
  },

  updatePayer(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_payers/' + objectSlug, formData, 'PUT');
  },

  fetchAllFacilities() {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + 'facilities');
  },

  fetchFacility(objectSlug) {
    return get(this,'http').getRequest(get(this, 'facilityEndPoint') + objectSlug);
  },

  createFacility(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facilities', formData);
  },

  updateFacility(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facilities/' + objectSlug, formData, 'PUT');
  },

  fetchAllFacilityAudits() {
    return get(this,'http').getRequest('/clients/' + get(this, 'currentClientSubdomain') + '/facility/facility_audits');
  },

  fetchFacilityEncounter(projectId, encounterId) {
    return get(this, 'http').getRequest(get(this, 'facilityEndPoint') + 'facility_projects/' + projectId + '/facility_encounters/' + encounterId);
  },

  fetchFacilityEncounters(projectId) {
    return get(this, 'http').getRequest('/clients/' + get(this, 'currentClientSubdomain') + '/facility/facility_projects/' + projectId + '/facility_encounters');
  },

  createEncounterChecklistReponse(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_encounter_checklist_responses', formData);
  },

  updateEncounterChecklistReponse(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_encounter_checklist_responses/' + objectSlug, formData, 'PUT');
  },

  bulkCreateOrUpdateChecklistResponse(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_encounter_checklist_responses/bulk_create_update', formData);
  },

  deleteChecklistResponses(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_encounter_checklist_responses/bulk_destroy', formData);
  },

  createChecklistCategory(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_categories', formData);
  },

  updateChecklistCategory(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_categories/' + objectSlug, formData, 'PUT');
  },

  createChecklistSubcategory(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_sub_categories', formData);
  },

  updateChecklistSubcategory(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_sub_categories/' + objectSlug, formData, 'PUT');
  },

  createChecklistTemplate(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_templates', formData);
  },

  editChecklistTemplate(objectId, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_templates/' + objectId, formData, 'PUT');
  },

  updateChecklistTemplateSortOrder(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_templates/bulk_update_sort_order', formData, 'POST');
  },

  updateChecklistCategorySortOrder(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_checklist_categories/bulk_update_sort_order', formData, 'POST');
  },

  createFindingsRecommendationsCategory(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_categories', formData);
  },

  updateFindingsRecommendationsCategory(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_categories/' + objectSlug, formData, 'PUT');
  },

  createFindingsRecommendationsSubcategory(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_sub_categories', formData);
  },

  updateFindingsRecommendationsSubcategory(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_sub_categories/' + objectSlug, formData, 'PUT');
  },

  createFindingsRecommendationsTemplate(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_templates', formData);
  },

  updateFindingsRecommendationsTemplate(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_templates/' + objectSlug, formData, 'PUT');
  },

  createKeyFindingResponse(formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_responses', formData);
  },

  updateKeyFindingResponse(objectSlug, formData) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_responses/' + objectSlug, formData, 'PUT');
  },

  deleteKeyFindingResponse(objectSlug) {
    return get(this, 'http').deleteRequest(get(this, 'facilityEndPoint') + 'facility_key_finding_responses/' + objectSlug);
  },

  importProjectClaims(projectId, csv) {
    return get(this, 'http').processRequest(get(this, 'facilityEndPoint') + 'facility_projects/' + projectId + '/import_claims', csv);
  }

});
