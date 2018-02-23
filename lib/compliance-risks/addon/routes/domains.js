import ComplianceBaseRoute from 'compliance-common/routes/compliance-base-route';
import { set } from '@ember/object';

export default ComplianceBaseRoute.extend({

  model() {
    return this.getDummyDomains();
    // return get(this, 'complianceRepository').fetchStoreModels('compliance-domain');
  },

  setupController(controller, currentDomains) {
    this._super(...arguments);
    set(controller, 'currentDomains', currentDomains);
  },

  getDummyDomains() {
    return [
      { id: 1, linkText: 'Fraud and Abuse', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/1/'},
      { id: 2, linkText: 'HIPPA', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/2/'},
      { id: 3, linkText: 'Patient Care', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/3/' },
      { id: 4, linkText: 'Revenue Cycle', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/4/' },
      { id: 5, linkText: 'Tax Benefit', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/5/' },
      { id: 6, linkText: 'Medial Staff', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/6/' },
      { id: 7, linkText: 'CMS', detailsPath: 'domains.domain.sub-domains.domain-risks', activePath: 'domains/7/' }
    ]
  },

  handleChartSeriesEvent(options) {
    this.transitionTo('domains.domain.sub-domains.domain-risks', options.id)
  },

  actions: {

    triggerDomainChartSeriesEvent(options) {
      this.handleChartSeriesEvent(options);
    }

  }

});
