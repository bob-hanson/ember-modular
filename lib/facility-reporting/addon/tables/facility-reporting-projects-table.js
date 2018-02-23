import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Project',
          valuePath: 'projectName',
          width: '70%',
          linkPath:'facilityReportingCoderProjectLinkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Completed',
          valuePath: 'totalCompleteEncounters',
          width: '15%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'completedStatusIcon',
          statusPath: 'completedStatus'
        }, {
          label: 'Pending',
          valuePath: 'totalInProgressEncounters',
          width: '15%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'inProgressStatusIcon',
          statusPath: 'inProgressStatus'
        }
      ]
    }
  })
});
