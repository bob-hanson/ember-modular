import { setProperties } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import Table from 'facility-reporting/tables/facility-reporting-project-coders-table';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/project-coders-table';

export default ContentView.extend(
  Table,
  FilterList, {
  layout,
  classNames: ['project-coders-table'],
  classNameBindings: ['colSpan'],
  percentageWidth: 60,
  filterProperties: null,
  emptyMessage: 'No records available',

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['coderName', 'endDate', 'updatedAt']
    });
  }

});
