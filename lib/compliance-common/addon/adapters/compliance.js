import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';
import DS from 'ember-data';

// const { JSONAPIAdapter, UnauthorizedError, ForbiddenError } = DS;
const { JSONAPIAdapter, ForbiddenError } = DS;

export default JSONAPIAdapter.extend({
  currentSession: service(),
  host: alias('currentSession.apiHost'),
  subdomain: alias('currentSession.currentClient.subdomain'),
  namespace: alias('clientNamespace'),

  headers: computed('currentSession.authToken', function () {
    return {
      'AUTHORIZATION': this.get('currentSession.authToken')
    };
  }),

  clientNamespace: computed('currentSession.currentClient', function () {
    return `clients/${get(this, 'subdomain')}/cm`;
  }),

  // shouldReloadRecord(store, snapshot) {
  //   if (snapshot.attr('isFullyLoaded')) {
  //     console.log('should reload isFullyLoaded');
  //     return false;
  //   } else {
  //     console.log('should reload is not Fully loaded');
  //     return true;
  //   }
  // },

  shouldBackgroundReloadRecord(store, snapshot) {
    return !snapshot.attr('isFullyLoaded');
  },

  pathForType: function (type) {
    return pluralize(underscore(type));
  },

  handleResponse(status) {
    if (status === 401) {
      window.location.href = "/app";
      return false;
    }
    if (status === 403) {
      return new ForbiddenError();
    }
    return this._super(...arguments);
  }

});
