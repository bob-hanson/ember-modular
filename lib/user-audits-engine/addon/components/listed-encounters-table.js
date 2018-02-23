import { get } from '@ember/object';
import HyspaGrid from 'hyspa-common-components/components/hyspa-grid';
import table from '../tables/audit-encounters-table';
import layout from '../templates/components/listed-encounters-table';

export default HyspaGrid.extend({
  table,
  layout,

  initComponent() {
    this.setTableRows();
  },

  setTableRows() {
    get(this, 'table').setRows(get(this, 'gridCollection'));
  },

  statusClicked(column, encounter, value) {
    this.attrs.statusAction(column, encounter, value);
  },

  actions: {

    triggerColumnClick() {
      // console.log('header clicked');
    },

    triggerStatusClicked(column, encounter, value) {
      this.statusClicked(column, encounter, value);
    }

  }


});
