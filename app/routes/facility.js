import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  staticCollections: service(),

  beforeModel(transition) {
    this._super(transition);
    this.validateRoute();
    this.resetCurrentApp('facility');
    this.resetCurrentAppClass('audits');
    this.setDummyRoles();
    this.checkForDefault(transition);
  },

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('currentClient', this.modelFor('client'));
  },

  afterModel() {
    this.loadStaticFacilityCollections();
  },

  loadStaticFacilityCollections() {
    get(this, 'staticCollections').fetchCommonModels([
      'audit-drg-code',
      'audit-place-of-service',
      'audit-revenue-code',
      'audit-service-type',
      'audit-specialty',
      'audit-visit-type',
      'audit-icd10-code'
    ]);
  },

  validateRoute() {
    // if (this.get('sessionUser.isNotPlatformAdmin')) {
    //   console.log('unauth');
    //   // this.transitionToLogin();
    // }
  },

  setDummyRoles() {
    // this.get('sessionUser').set('isAuditSuperUser', true);
    this.get('sessionUser').set('isFacilityUser', true);
  },

  checkForDefault(transition) {
    if (transition.targetName === 'facility.index') {
      this.transitionTo('facility-encounters');
    }
  },

  actions: {
    willTransition(transition) {
      this.checkForDefault(transition);
    }

  }

});
