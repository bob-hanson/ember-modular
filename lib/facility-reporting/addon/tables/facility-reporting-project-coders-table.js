import Mixin from '@ember/object/mixin';
import { get } from '@ember/object';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Coder',
          valuePath: 'coderName',
          width: '41%'
        }, {
          label: 'Completed',
          valuePath: 'endDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '15%'
        }, {
          label: 'Revised',
          valuePath: 'updatedAt',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '15%'
        }, {
          label: 'Status',
          valuePath: 'projectStatusDisplayText',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'statusIcon',
          statusPath: 'statusColor',
          width: '20%'
        }
      ],
      actionsMenu: [
        {
          labelText: "Coder Detailed Report",
          action: get(this, 'actions.triggerGenerateCoderDetailedReport')
        },
        {
          labelText: "Project Detailed Report",
          action: get(this, 'actions.triggerGenerateProjectDetailedReport')
        },
        {
          labelText: "Project Summary",
          action: get(this, 'actions.triggerGenerateProjectSummaryReport')
        },
        {
          labelText: "Project Data File",
          action: get(this, 'actions.triggerGenerateProjectDataReport')
        }
      ]
    }
  }),

  actions: {

    triggerGenerateCoderDetailedReport(context) {
      context.tableActions.triggerMassColumnAction(context, { reportType: 'coder detailed' });
    },

    triggerGenerateProjectDetailedReport(context) {
      context.tableActions.triggerMassColumnAction(context, { reportType: 'project detailed' });
    },

    triggerGenerateProjectSummaryReport(context) {
      context.tableActions.triggerMassColumnAction(context, { reportType: 'project summary' });
    },

    triggerGenerateProjectDataReport(context) {
      context.tableActions.triggerMassColumnAction(context, { reportType: 'project data' });
    }

  }

});
