import ContentView from 'hyspa-common-components/components/content-view';
import { set } from '@ember/object';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import ChecklistTemplateTable from 'facility-admin/tables/checklist-template-table';
import layout from '../templates/components/listed-checklist-templates-full';

export default ContentView.extend(
  ChecklistTemplateTable,
  FilterList, {
    layout,
    classNames: ['listed-checklist-templates-full'],
    classNameBindings: ['colSpan'],

    filterProperties: null,

    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['shortDescription']);
    }

  });
