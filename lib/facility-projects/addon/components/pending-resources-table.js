import { setProperties } from '@ember/object';

import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';

import layout from '../templates/components/pending-resources-table';
import ResourcesTable from '../tables/facility-pending-resources-table';

export default ContentView.extend(
  ResourcesTable,
  FilterList, {
  layout,
  classNames: ['facility-pending-resources-table-full'],
  classNameBindings: ['colSpan'],
  filterProperties: null,

  initComponent() {
    this.setFilteredCollection();
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['name', 'role']
    });
  }

});
