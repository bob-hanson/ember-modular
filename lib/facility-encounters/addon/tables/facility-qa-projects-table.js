import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  qaProjectsTableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Coder Name',
          valuePath: 'coderName',
          linkPath: 'linkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link',
          width: '16%',
          action: 'triggerConsumerAction'
        }, {
          label: 'Audit Project',
          valuePath: 'projectName',
          width: '16%'
        }, {
          label: 'Specialty',
          valuePath: 'coderSpecialty',
          width: '16%'
        }, {
          label: 'Due',
          valuePath: 'endDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '12%'
        }, {
          label: 'Not Started',
          valuePath: 'totalNotStartedEncounters',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'notStartedStatusIndicator',
          statusPath: 'notStartedStatus',
          width: '12%'
        }, {
          label: 'Sub Status',
          valuePath: 'projectSubStatus',
          width: '12%'
        }, {
          label: 'Notes',
          valuePath: 'projectNotes',
          width: '12%'
        }
      ]
    }
  })
});
