import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import OrganizationsTable from 'facility-admin/tables/facility-organizations-table';
import layout from 'facility-admin/templates/components/listed-organizations-full';

export default ContentView.extend(
  FilterList,
  OrganizationsTable, {
  layout,
  classNames: ['listed-organizations-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['organizationName', 'organizationIdentifier']);
  }

});
