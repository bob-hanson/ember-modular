import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import Table from 'facility-reporting/tables/facility-reporting-coders-table';
import layout from 'facility-reporting/templates/components/listed-reporting-coders-full';

export default ContentView.extend(
  FilterList,
  Table, {
  layout,
  classNames: ['listed-reporting-coders-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['coderName', 'coderSpecialty', 'coderStatus']);
  }

});
