import { setProperties } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';

import layout from '../templates/components/manage-audits-table';
import FacilityManageAuditsTable from '../tables/facility-manage-audits-table';

export default ContentView.extend(
  FacilityManageAuditsTable,
  FilterList, {
  layout,
  classNames: ['facility-manage-audits-table-full'],
  classNameBindings: ['colSpan'],
  filterProperties: null,

  initComponent() {
    this.setFilteredCollection();
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['projectName', 'coderName', 'dueDate',
      'organization', 'specialty', 'auditor', 'reviewer', 'projectStatus']
    });
  }

});
