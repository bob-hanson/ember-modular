import { get } from '@ember/object';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  model() {
    // TODO: Need to put in check against params.
    return get(this, 'currentSession.currentClient');
  },

  afterModel(model) {
    get(this, 'currentApp').setUserMenuText(model.get('name'));
    get(this, 'currentApp').setCurrentClient(model);
  },

  actions: {

    willTransition() {
      get(this, 'currentApp').setUserMenuText();
    }

  }


});
