import BaseComponent from 'hyspa-base-components/components/base-component';
import Table from 'ember-light-table';
import { get, set, computed, setProperties, observer } from '@ember/object';
import { sort, notEmpty, not, and } from '@ember/object/computed';
import layout from '../templates/components/hyspa-light-table';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-light-table'],
  classNameBindings: ['colSpan'],
  padding: '2,0.2,0',
  table: null,
  dir: null,
  sort: null,
  tableHeight: '56vh',
  emptyMessage: 'No records found',
  // tableHeight: 'auto',
  hasActionsMenu: notEmpty('tableDefinition.actionsMenu'),
  actionsMenuNotAdded: not('tableDefinition.actionsMenuAdded'),
  needsToAddActionsMenu: and('hasActionsMenu', 'actionsMenuNotAdded'),

  sortedCollection: sort('gridCollection', 'sortBy').readOnly(),
  sortBy: computed('dir', 'sort', function() {
    return [`${this.get('sort')}:${this.get('dir')}`];
  }).readOnly(),

  observeGridCollectionChange: observer('gridCollection', function() {
    this.setTableRows(get(this, 'sortedCollection'))
  }),

  initComponent() {
    if (get(this, 'needsToAddActionsMenu')) {
      this.initActionsMenu();
    }
    this.setTable();
    this.setTableRows(get(this, 'gridCollection'));
  },

  initActionsMenu() {
    this.addActionsMenuColumn();
    this.addRowSelectionColumn();
    set(get(this, 'tableDefinition'), 'actionsMenuAdded', true);
  },

  addActionsMenuColumn() {
    var columnDefinition = {
      component: "hyspa-light-table-action-menu",
      width: '30px',
      sortable: false,
      actionsMenu: get(this, 'tableDefinition.actionsMenu')
    }
    get(this, 'tableDefinition.columns').unshiftObject(columnDefinition);
  },

  addRowSelectionColumn() {
    var columnDefinition = {
      component: 'hyspa-light-table-selection-header',
      cellType: 'hyspa-light-table-cell',
      formatAs: 'rowSelector',
      sortable: false,
      width: "38px"
    }
    get(this, 'tableDefinition.columns').unshiftObject(columnDefinition);
  },

  setTable() {
    set(this, 'table', new Table(get(this, 'tableDefinition.columns')));
  },

  setTableRows(rows) {
    get(this, 'table').setRows(rows);
  },

  sortCollection(column) {
    this.setSortProperties(column);
    this.setTableRows(get(this, 'sortedCollection'));
  },

  setSortProperties(column) {
    setProperties(this, {
      dir: column.ascending ? 'asc' : 'desc',
      sort: get(column, 'sortValue') || get(column, 'valuePath')
    });
  },

  sendColumnMassAction(context, options) {
    this.attrs.massColumnAction(context, options);
  },

  actions: {

    triggerMassActionClick(context, options) {
      this.sendColumnMassAction(context, options);
    },

    triggerColumnClick(column) {
      if (column.sortable) {
        this.sortCollection(column);
      }
    }
  }
});
