import { setProperties, get, set } from '@ember/object';

import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';

import layout from '../templates/components/audit-encounters';
import AuditEncountersTable from '../tables/audit-encounters-table';

export default ContentView.extend(
  AuditEncountersTable,
  FilterList, {
  layout,
  classNames: ['facility-audits-encounter-list'],
  classNameBindings: ['colSpan'],
  percentageWidth: 80,
  filterProperties: null,

  initComponent() {
    this.setFilteredCollection();
    this.setDefaults();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    set(this, 'filterValue', '');
    set(this, 'filteredCollection', get(this, 'currentCollection'));
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['patientName', 'encounterStatus']
    });
  }

});
