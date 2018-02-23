import Mixin from '@ember/object/mixin';
import { get, computed } from '@ember/object';

const getSelectedItems = table => get(table, 'selectedRows').map(row => row.content.id) || [];

export default Mixin.create({
  tableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Audit Project',
          valuePath: 'projectName',
          linkPath: 'linkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link',
          width: '18%'
        },
        {
          label: 'Organization',
          valuePath: 'organization',
          width: '10%'
        },
        {
          label: 'Coder',
          valuePath: 'coderName',
          width: '11%'
        },
        {
          label: 'Specialty',
          valuePath: 'specialty',
          width: '10%'
        },
        {
          label: 'Due',
          valuePath: 'dueDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '8%'
        },
        {
          label: 'Auditor',
          valuePath: 'auditor',
          width: '8%'
        },
        {
          label: 'Reviewer',
          valuePath: 'reviewer',
          width: '8%'
        },
        {
          label: 'DOS',
          valuePath: 'dos',
          width: '6%'
        },
        {
          label: 'Status',
          valuePath: 'projectStatus',
          width: '7%'
        },
        {
          label: 'Complete',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          valuePath: 'completedDate',
          width: '8%'
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
          labelText: "Delete Audit",
          action: get(this, 'actions.triggerDeleteAudits')
        },
        {
          labelText: "Change Auditor",
          action: get(this, 'actions.triggerChangeAuditor')
        },
        {
          labelText: "Change QA",
          action: get(this, 'actions.triggerChangeQA')
        },
        {
          labelText: "Change Coder",
          action: get(this, 'actions.triggerChangeCoder')
        },
        {
          labelText: "Change Due Date",
          action: get(this, 'actions.triggerChangeDueDate')
        },
        {
          labelText: "Change Project",
          action: get(this, 'actions.triggerChangeProject')
        },
        {
          labelText: "Request Re-Audit",
          action: get(this, 'actions.triggerRequestReAudit')
        },
        {
          labelText: "Run Report",
          action: get(this, 'actions.triggerRunReport')
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
    triggerDeleteAudits() {
      console.log(this, "Delete Audits");
    },
    triggerChangeAuditor() {
      console.log(this, "Change Auditor");
    },
    triggerChangeQA() {
      console.log(this, "Change QA");
    },
    triggerChangeCoder() {
      console.log(this, "Change Coder");
    },
    triggerChangeDueDate() {
      console.log(this, "Change Due Date");
    },
    triggerChangeProject() {
      console.log(this, "Change Project");
    },
    triggerRequestReAudit() {
      console.log(this, "Request ReAudit");
    },
    triggerRunReport() {
      console.log(this, "Run Report");
    }
  }
});
