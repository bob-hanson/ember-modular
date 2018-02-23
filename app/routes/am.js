// import Ember from 'ember';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  beforeModel(transition) {
    this._super(transition);
    this.validateRoute();
    this.resetCurrentApp('audits');
    this.resetCurrentAppClass('audits');
    this.setDummyRoles();
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

  setDummyRoles() {
    // this.get('sessionUser').set('isAuditSuperUser', true);
    this.get('sessionUser').set('isAuditConsultingUser', true);
  },

  checkForDefault(transition) {
    if (transition.targetName === 'am.index') {
      this.transitionTo('audit-dashboard');
    }
  },

  actions: {

    willTransition(transition) {
      this.checkForDefault(transition);
    }

  }

});
