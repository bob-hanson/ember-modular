import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import CodersTable from 'facility-admin/tables/facility-coders-table';
import layout from 'facility-admin/templates/components/listed-coders-full';

export default ContentView.extend(
  FilterList,
  CodersTable, {
  layout,
  classNames: ['listed-locations-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['coderName', 'coderSpecialty', 'organizationName', 'coderStatus']);
  }

});
