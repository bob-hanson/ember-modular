import Mixin from '@ember/object/mixin';
import { get } from '@ember/object';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Audit Project',
          valuePath: 'projectName',
          width: '25%'
        }, {
          label: 'Completed',
          valuePath: 'endDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '25%'
        }, {
          label: 'Revised',
          valuePath: 'endDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '20%'
        }, {
          label: 'Status',
          valuePath: 'projectStatusDisplayText',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'projectStatus',
          statusPath: 'statusColor',
          width: '20%'
        }
      ],
      actionsMenu: [
        // {
        //   labelText: "Coder Detailed Report PDF",
        //   fontType: "picture_as_pdf",
        //   action: get(this, 'actions.triggerGenerateCoderDetailPDF')
        // },
        {
          labelText: "Coder Detailed Report",
          fontType: "subject",
          action: get(this, 'actions.triggerGenerateCoderDetailDoc')
        }
      ]
    }
  }),

  actions: {

    // triggerGenerateCoderDetailPDF(context) {
    //   context.tableActions.triggerMassColumnAction(context, { reportOutputType: 'pdf' });
    // },
    // XLS for now
    triggerGenerateCoderDetailDoc(context) {
      context.tableActions.triggerMassColumnAction(context, { reportOutputType: 'xls' });
    }
  }

});
