import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  facilityProjectsTableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Audit Project',
          valuePath: 'projectName',
          linkPath: 'linkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link',
          width: '30%'
        },
        {
          label: 'Start',
          valuePath: 'startDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '20%'
        },
        {
          label: 'Due',
          valuePath: 'endDate',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '20%'
        },
        {
          label: 'Not Assigned',
          valuePath: 'totalUnassignedEncounters',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'notAssignedStatusIcon',
          statusPath: 'notAssignedStatus',
          width: '10%'
        },
        {
          label: 'Assigned',
          valuePath: 'totalAssignedEncounters',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'assignedStatusIcon',
          statusPath: 'assignedStatus',
          width: '10%'
        },
        {
          label: 'Complete',
          valuePath: 'totalCompleteEncounters',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'completedStatusIcon',
          statusPath: 'completedStatus',
          width: '10%'
        }
      ]
    }
  })
});

// import Table from 'ember-light-table';
//
// var columnDefinitions = [
//     {
//       label: 'Audit Project',
//       valuePath: 'projectName',
//       linkPath: 'linkPath',
//       cellType: 'hyspa-light-table-cell',
//       formatAs: 'link',
//       width: '30%'
//     },
//     {
//       label: 'Start',
//       valuePath: 'startDate',
//       cellType: 'hyspa-light-table-cell',
//       formatAs: 'dateTime',
//       width: '20%'
//     },
//     {
//       label: 'Due',
//       valuePath: 'endDate',
//       cellType: 'hyspa-light-table-cell',
//       formatAs: 'dateTime',
//       width: '20%'
//     },
//     {
//       label: 'Not Assigned',
//       valuePath: 'totalUnassignedEncounters',
//       cellType: 'hyspa-light-table-cell',
//       formatAs: 'statusIndicator',
//       statusIconPath: 'notAssignedStatusIcon',
//       statusPath: 'notAssignedStatus',
//       width: '10%'
//     },
//     {
//       label: 'Assigned',
//       valuePath: 'totalAssignedEncounters',
//       cellType: 'hyspa-light-table-cell',
//       formatAs: 'statusIndicator',
//       statusIconPath: 'assignedStatusIcon',
//       statusPath: 'assignedStatus',
//       width: '10%'
//     },
//     {
//       label: 'Complete',
//       valuePath: 'totalCompleteEncounters',
//       cellType: 'hyspa-light-table-cell',
//       formatAs: 'statusIndicator',
//       statusIconPath: 'completedStatusIcon',
//       statusPath: 'completedStatus',
//       width: '10%'
//     }
//   ];
//
// export default new Table(columnDefinitions);
