import ComplianceBaseRoute from 'compliance-common/routes/compliance-base-route';
import { set } from '@ember/object';

export default ComplianceBaseRoute.extend({

  model() {
    return this.getDummyDomains();
    // return get(this, 'complianceRepository').fetchStoreModels('compliance-domain');
  },

  setupController(controller, currentSubDomains) {
    this._super(...arguments);
    set(controller, 'currentSubDomains', currentSubDomains);
  },

  getDummyDomains() {
    return [
      { id: 1, linkText: 'Privacy', detailsPath: 'domains.domain.sub-domains.sub-domain.categories.sub-domain-risks', activePath: 'sub-domains/1/' },
      { id: 2, linkText: 'Security', detailsPath: 'domains.domain.sub-domains.sub-domain.categories.sub-domain-risks', activePath: 'sub-domains/2/' },
      { id: 3, linkText: 'Suspect', detailsPath: 'domains.domain.sub-domains.sub-domain.categories.sub-domain-risks', activePath: 'sub-domains/3/' },
      { id: 4, linkText: 'Fraud', detailsPath: 'domains.domain.sub-domains.sub-domain.categories.sub-domain-risks', activePath: 'sub-domains/4/' },
    ]
  },

  handleChartSeriesEvent(options) {
    this.transitionTo('domains.domain.sub-domains.sub-domain.categories.sub-domain-risks', options.id )
  },

  actions: {

    triggerSubDomainChartSeriesEvent(options) {
      this.handleChartSeriesEvent(options);
    }

  }

});
