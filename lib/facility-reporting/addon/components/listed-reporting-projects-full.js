import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import CodersTable from 'facility-reporting/tables/facility-reporting-projects-table';
import layout from 'facility-reporting/templates/components/listed-reporting-projects-full';

export default ContentView.extend(
  FilterList,
  CodersTable, {
  layout,
  classNames: ['listed-reporting-projects-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['projectName']);
  }

});
