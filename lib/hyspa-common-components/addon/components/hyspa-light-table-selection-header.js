import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import layout from '../templates/components/hyspa-light-table-selection-header';

export default BaseComponent.extend({
  layout,
  allRowsSelected: false,

  setAllRowsSelection() {
    get(this, 'table.rows').setEach('selected', get(this, 'allRowsSelected'));
  },

  actions: {
    triggerCheckboxClick() {
      this.setAllRowsSelection();
    }
  }
});
