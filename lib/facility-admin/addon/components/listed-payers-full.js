import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import PayersTable from 'facility-admin/tables/facility-payers-table';
import layout from '../templates/components/listed-payers-full';

export default ContentView.extend(
  FilterList,
  PayersTable, {
  layout,
  classNames: ['listed-payers-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['payerName']);
  }

});
