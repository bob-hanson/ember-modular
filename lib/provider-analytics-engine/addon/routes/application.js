// import Ember from 'ember';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  beforeModel(transition) {
    this._super(transition);
    this.validateRoute();
    this.resetCurrentApp('analytics');
  },

  validateRoute() {
    // if (this.get('sessionUser.isNotPlatformAdmin')) {
    //   console.log('unauth');
    //   // this.transitionToLogin();
    // }
  },

  actions: {

  }

});
