import ComplianceBaseRoute from 'compliance-common/routes/compliance-base-route';
import { get, set } from '@ember/object';

export default ComplianceBaseRoute.extend({

  activate() {
    set(this, 'currentApp.engineScope', 'compliance');
  },

  afterModel(model, transition) {
    this.checkForIndexRoute(transition.targetName);
  },

  checkForIndexRoute(targetName) {
    if (`${get(this, 'fullRouteName')}.index` === targetName) {
      this.transitionTo('domains.domain-risks');
    }
  }
});
