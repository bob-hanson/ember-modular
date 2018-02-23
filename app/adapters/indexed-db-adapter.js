import IndexedDbAdapter from 'ember-indexeddb/adapters/indexed-db';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

const { ForbiddenError } = DS;

export default IndexedDbAdapter.extend({
  currentSession: service(),
  namespace: '/common',
  host: alias('currentSession.apiHost'),
  headers: computed('currentSession.authToken', function() {
    return {
      'AUTHORIZATION': this.get('currentSession.authToken')
    };
  }),

  handleResponse(status) {
    if (status === 401) {
      // console.log('in indexeddb adapter');
      window.location.href = "/app";
      // return new UnauthorizedError();
    }
    if (status === 403) {
      return new ForbiddenError();
    }
    return this._super(...arguments);
  }
});
