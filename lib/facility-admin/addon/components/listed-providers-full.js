import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import ProvidersTable from 'facility-admin/tables/facility-providers-table';
import layout from '../templates/components/listed-providers-full';

export default ContentView.extend(
  FilterList,
  ProvidersTable, {
  layout,
  classNames: ['listed-provider-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['providerStatus', 'providerSpecialty', 'providerName']);
  }

});
