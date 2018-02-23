import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/facility-projects-table-full';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import { setProperties } from '@ember/object';

import ProjectsTable from '../tables/facility-projects-table';

export default ContentView.extend(
  ProjectsTable,
  FilterList, {
  layout,
  classNames: ['facility-projects-table-full'],
  classNameBindings: ['colSpan'],
  filterProperties: null,

  initComponent() {
    this.setFilteredCollection();
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['projectName', 'startDate', 'endDate', 'projectStatus']
    });
  }

});
