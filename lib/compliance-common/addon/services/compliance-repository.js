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
  http: service(),

  currentClientSubdomain: alias('currentApp.currentClient.subdomain'),
  facilityEndPoint: computed('currentClientSubdomain', function () {
    return '/clients/' + get(this, 'currentClientSubdomain') + '/compliance/';
  }),

  fetchIDBModels(modelType) {
    return get(this, 'store').findAll(modelType);
  },

  // Simple fetch wrapper around the findAll store methods.
  fetchStoreModels(modelType) {
    if (get(this, `${modelType.camelize()}Loaded`)) {
      return get(this, 'store').peekAll(modelType); //'model-name'
    } else {
      set(this, `${modelType.camelize()}Loaded`, true);
      return get(this, 'store').findAll(modelType, { reload: true });
    }
  },

  unsetModelCache(modelType) {
    set(this, `${modelType.camelize()}Loaded`, false);
  },

  fetchTopRisks(modelType) {
    if (get(this, `${modelType.camelize()}Loaded`)) {
      return get(this, 'store').peekAll(modelType); //'model-name'
    } else {
      set(this, `${modelType.camelize()}Loaded`, true);
      return get(this, 'store').findAll(modelType, { reload: true });
    }
  },

});
