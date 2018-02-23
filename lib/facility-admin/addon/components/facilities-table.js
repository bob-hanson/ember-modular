import { observer } from '@ember/object';
import HyspaGrid from 'hyspa-common-components/components/hyspa-grid';
import table from '../tables/facilities-table';
import layout from '../templates/components/facilities-table';

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
    this.get('table').setRows(this.get('gridCollection'));
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
