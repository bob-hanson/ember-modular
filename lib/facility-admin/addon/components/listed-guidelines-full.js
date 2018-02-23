import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import GuidelinesTable from 'facility-admin/tables/facility-guidelines-table';
import layout from 'facility-admin/templates/components/listed-guidelines-full';

export default ContentView.extend(
  FilterList,
  GuidelinesTable, {
  layout,
  classNames: ['listed-guidelines-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['guidelineName', 'lastModified', 'isDefault']);
  }

});
