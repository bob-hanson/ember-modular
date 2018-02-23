import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import RisksTable from 'compliance-risks/tables/top-risks-table';
import layout from 'compliance-risks/templates/components/top-risks';

export default ContentView.extend(
  FilterList,
  RisksTable, {
    layout,
    classNames: ['top-domain-risks'],
    classNameBindings: ['colSpan'],
    percentageWidth: 80,

    filterProperties: null,

    // newRiskPath: 'domains.domain.sub-domains.sub-domain.categories.category.sub-categories.sub-category.risk-assessments.new-assessment',
    newRiskPath: 'domains',


    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['riskName', 'riskCategory', 'riskDomain', 'riskLocation']);
    }

  });
