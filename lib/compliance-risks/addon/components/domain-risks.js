import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import Table from 'compliance-risks/tables/domain-risks-table';
import layout from 'compliance-risks/templates/components/domain-risks';

export default ContentView.extend(
  FilterList,
  Table, {
    layout,
    classNames: ['domain-risks'],
    classNameBindings: ['colSpan'],
    percentageWidth: 60,

    filterProperties: null,

    headerText: '{Add Domain} Risk Assessments',

    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['riskName', 'riskCategory', 'riskDomain', 'riskLocation']);
    }

  });
