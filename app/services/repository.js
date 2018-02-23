// Fetch implements the HTTP Fetch Standard Polyfill
// https://github.github.io/fetch/

// Repsonse Objects are expected in the http://jsonapi.org/ structure
import Service, { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Service.extend({

  currentApp: service(),
  store: service(),
  fixtures: service(),
  http: service(),

  searchAllUsers(inputValue) {
    return get(this, 'http').getRequest('/admin/user_search_results/?user_search_string=' + inputValue);
  },

  fetchSystemUser(userSlug) {
    return get(this, 'http').getRequest('/systems_users/' + userSlug);
  },

  createOrganizationUser(formData) {
    return get(this, 'http').processRequest('/admin/organization_users', formData);
  },

  updateOrganizationUser(formData, organizationSlug) {
    return get(this, 'http').processRequest('/admin/organization_users/' + organizationSlug, formData, 'PUT');
  },

  fetchAllProducts() {
    return get(this, 'http').getRequest('/admin/products');
  },

  fetchAllOrganizations() {
    return get(this, 'http').getRequest('/admin/organizations');
  },

  fetchAllOrganizationUsers(organizationSlug) {
    return get(this, 'http').getRequest('/admin/organizations/' + organizationSlug + '/users/');
  },

  fetchOrganization(organizationSlug) {
    return get(this, 'http').getRequest('/admin/organizations/' + organizationSlug);
  },

  createOrganization(formData) {
    return get(this, 'http').processRequest('/admin/organizations', formData);
  },

  editOrganization(organizationId, formData) {
    return get(this, 'http').processRequest('/admin/organizations/' + organizationId, formData, 'PUT');
  },

  fetchOrganizationClients(organizationSlug) {
    return get(this, 'http').getRequest('/admin/organizations/' + organizationSlug + '/clients');
  },

  fetchAllClientUsers(clientSlug) {
    return get(this, 'http').getRequest('/admin/clients/' + clientSlug + '/users/');
  },

  fetchClient(clientSlug) {
    return get(this, 'http').getRequest('/admin/clients/' + clientSlug);
  },

  createClient(formData) {
    return get(this, 'http').processRequest('/admin/clients', formData);
  },

  retryCreateClient(organizationSlug, clientSlug) {
    return get(this, 'http').processRequest('/admin/organizations/' + organizationSlug + '/clients/' + clientSlug + '/retry ');
  },

  editClient(clientId, formData) {
    return get(this, 'http').processRequest('/admin/clients/' + clientId, formData, 'PUT');
  },

  fetchAllUserAuditProjects() {
    return get(this, 'fixtures').fetchAllAuditProjectFixtures();
  },

  fetchAuditBoxPayload() {
    return get(this, 'fixtures').fetchAuditBoxPayload();
  },

  fetchRecordImporterData(table) {
    var clientSlug = get(this, "currentApp.currentClient.subdomain");
    return get(this, 'http').getRequest(`/clients/${clientSlug}/common/file_bulk_upload_header_metadata?module_name=${table}`);
  },

  bulkUploadRecords(entity, formData) {
    var clientSlug = get(this, "currentApp.currentClient.subdomain");
    return get(this, 'http').processRequest(`/clients/${clientSlug}/common/file_bulk_imports?module_name=${entity}`, formData, 'POST');
  }

});
