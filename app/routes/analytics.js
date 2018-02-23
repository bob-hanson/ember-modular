// import Ember from 'ember';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  beforeModel(transition) {
    this._super(transition);
    this.validateRoute();
    this.resetCurrentApp('analytics');
    this.resetCurrentAppClass('audits');
    this.checkForDefault(transition);
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
  },

  checkForDefault(transition) {
    if (transition.targetName === 'analytics.index') {
      this.transitionTo('providers');
    }
  },

  actions: {

    willTransition(transition) {
      this.checkForDefault(transition);
    }

  }

});
