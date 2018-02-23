import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import FacilityTable from 'facility-admin/tables/facilities-table';
import layout from '../templates/components/listed-facilities-full';

export default ContentView.extend(
  FacilityTable,
  FilterList, {
  layout,
  classNames: ['listed-facilities-full','table-container'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['facilityName', 'facilityCity', 'facilityState', 'facilityRegion']);
  }

});
