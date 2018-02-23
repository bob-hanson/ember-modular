import BaseRoute from 'hyspa-base-components/routes/base-route';
import { inject as service } from '@ember/service';
import { get, set } from '@ember/object';
import DS from 'ember-data';

const { ForbiddenError } = DS;

export default BaseRoute.extend({
  complianceRepository: service(),
  complianceSession: service(),

  setupController(controller) {
    this._super(...arguments);
    set(controller, 'complianceSession', get(this, 'complianceSession'));
  },

  actions: {

    error(error, transition) {
      // handled directly in the engines adapter for now..
      // if (error instanceof UnauthorizedError) {
      //   get(this, 'currentSession').logout();
      //   return true;
      // }
      if (error instanceof ForbiddenError) {
        get(this, 'toast').errorToast('You are unauthorized');
        transition.abort();
        return true;
      }
      this._super(...arguments);
    }

  }

});
