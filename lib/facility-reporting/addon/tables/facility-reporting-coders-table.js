import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Coder',
          valuePath: 'coderName',
          width: '70%',
          linkPath:'facilityReportingCoderProjectsLinkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Completed',
          valuePath: 'completedProjectsCount',
          width: '15%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'completedColor',
          statusPath: 'completedStatus'
        }, {
          label: 'Pending',
          valuePath: 'pendingProjectsCount',
          width: '15%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'pendingColor',
          statusPath: 'pendingStatus'
        }
      ]
    }
  })
});
