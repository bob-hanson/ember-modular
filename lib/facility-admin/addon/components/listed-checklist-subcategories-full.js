import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import ChecklistSubcategoryTable from 'facility-admin/tables/checklist-subcategory-table';
import layout from '../templates/components/listed-checklist-subcategories-full';

export default ContentView.extend(
  ChecklistSubcategoryTable,
  FilterList, {
  layout,
  classNames: ['listed-checklist-subcategories-full'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['categoryName']);
  }

});
