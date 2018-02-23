import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';

const getSelectedItems = table => get(table, 'selectedRows').map(row => row.content.id) || [];

export default Mixin.create({
  tableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Audit Project',
          valuePath: 'projectName',
          width: '15%'
        },
        {
          label: 'Coder',
          valuePath: 'coderName',
          width: '10%'
        },
        {
          label: 'Due',
          valuePath: 'dueDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '10%'
        },
        {
          label: 'UA',
          valuePath: 'unassigned',
          width: '6%'
        },
        {
          label: 'QA UA',
          valuePath: 'unassignedQa',
          width: '8%'
        },
        {
          label: 'RSGN Audit',
          valuePath: 'reassigned',
          width: '12%'
        },
        {
          label: 'RSGN QA',
          valuePath: 'reassignedQa',
          width: '10%'
        },
        {
          label: 'Re-Audit',
          valuePath: 'reAudit',
          width: '10%'
        },
        {
          label: 'Re-Audit QA',
          valuePath: 'reAuditQa',
          width: '12%'
        }
      ],
      actionsMenu: [
        {
          labelText: "Export",
          action: get(this, 'actions.triggerExportAudits')
        },
        {
          labelText: "Reset",
          action: get(this, 'actions.triggerResetAudits')
        },
        {
          labelText: "Assign Auditor",
          action: get(this, 'actions.triggerAssignAuditor')
        },
        {
          labelText: "Assign QA",
          action: get(this, 'actions.triggerAssignQA')
        },
        {
          labelText: "Change Due Date",
          action: get(this, 'actions.triggerChangeDueDate')
        }
      ]
    }
  }),

  actions: {
    triggerExportAudits({table}) {
      const seletedItems = getSelectedItems(table);
      console.log(this, seletedItems, "Export Audits");
    },
    triggerResetAudits() {
      console.log(this, "Reset Audits");
    },
    triggerAssignAuditor() {
      console.log(this, "Assign Auditor");
    },
    triggerAssignQA() {
      console.log(this, "Assign QA");
    },
    triggerChangeDueDate() {
      console.log(this, "Change Due Date");
    }
  }

});
