import { setProperties } from '@ember/object';

import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';

import layout from '../templates/components/resource-audits-table';
import AuditsTable from '../tables/facility-pending-audits-table';

export default ContentView.extend(
  AuditsTable, // FETCH resource specific columns
  FilterList, {
  layout,
  classNames: ['facility-resource-audits-table-full'],
  classNameBindings: ['colSpan'],
  percentageWidth: 60,
  filterProperties: null,

  initComponent() {
    this.setFilteredCollection();
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['projectName', 'coderName', 'dueDate']
    });
  }

});
