import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Service.extend({
  currentSession: service(),
  currentApp: service(),
  toast: service('toast-message'),

  getRequest(url, options = {}) {
    var formOptions = Object.assign(options, { method: 'GET', cache: 'default', headers: this.setRequestHeaders(), credentials: 'same-origin' });
    return fetch(this.setApiUrl(url), formOptions)
          .then(this.checkStatus.bind(this));
  },

  deleteRequest(url, options = {}) {
    var formOptions = Object.assign(options, { method: 'DELETE', cache: 'default', headers: this.setRequestHeaders(), credentials: 'same-origin' });
    return fetch(this.setApiUrl(url), formOptions)
      .then(this.checkStatus.bind(this)); 
  },

  processRequest(url, formData, methodType = 'POST', options = {}) {
    var formOptions = Object.assign(options, { method: methodType, cache: 'default', headers: this.setPostHeaders(), credentials: 'same-origin', body: formData });
    return fetch(this.setApiUrl(url), formOptions)
          .then(this.checkStatus.bind(this));
  },

  // TODO: We can handle global level 400 and 500 here using a switch
  checkStatus(response) {
    if (response.status === 401) {
      window.location.href = "/app";
      return;
    }
    if (response.status === 403) {
      get(this, 'toast').errorToast("Access Restricted!");
      return;
    }
    if (response.status >= 200 && response.status < 400) {
      return response.json();
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      get(this, 'toast').errorToast(response.statusText, 'small-icon');
      throw error;
    }
  },

  setRequestHeaders() {
    return { "Content-Type": "application/vnd.api+json", "Authorization": get(this, 'currentSession.authToken') };
  },

  setPostHeaders() {
    return { "Authorization": get(this, 'currentSession.authToken') };
  },

  setApiUrl(url) {
    return get(this, 'currentSession.apiUrl') + url;
  }

});
