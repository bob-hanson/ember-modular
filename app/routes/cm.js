// import Ember from 'ember';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  beforeModel(transition) {
    this._super(transition);
    this.validateRoute();
    this.resetCurrentApp('compliance');
    this.resetCurrentAppClass('compliance');
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('currentClient', this.modelFor('client'));
  },

  validateRoute() {
    // if (this.get('sessionUser.isNotPlatformAdmin')) {
    //   console.log('unauth');
    //   // this.transitionToLogin();
    // }
  }

});
