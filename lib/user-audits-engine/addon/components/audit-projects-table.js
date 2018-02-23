import { get, observer } from '@ember/object';
import HyspaGrid from 'hyspa-common-components/components/hyspa-grid';
import table from '../tables/audit-projects-table';
import layout from '../templates/components/audit-projects-table';

export default HyspaGrid.extend({
  table,
  layout,

  initComponent() {
    this.setTableRows();
  },

  collectionChanged: observer('gridCollection', function () {
    this.setTableRows();
  }),

  setTableRows() {
    get(this, 'table').setRows(get(this, 'gridCollection'));
  },

  transitionToProjectDetails(row) {
    this.attrs.transitionToDetailsAction(row.content);
  },

  actions: {

    triggerRowClick(row) {
      this.transitionToProjectDetails(row);
    }

  }


});
