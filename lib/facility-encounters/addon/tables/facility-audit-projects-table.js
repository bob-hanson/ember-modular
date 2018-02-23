import Mixin from '@ember/object/mixin';
import { get, computed } from '@ember/object';

export default Mixin.create({
  auditProjectsTableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Coder Name',
          valuePath: 'coderName',
          linkPath: 'linkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link',
          width: '15%',
          action: 'triggerConsumerAction'
        }, {
          label: 'Audit Project',
          valuePath: 'projectName',
          width: '15%'
        }, {
          label: 'Specialty',
          valuePath: 'coderSpecialty',
          width: '15%'
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
      ],
      actionsMenu: [
        {
          labelText: "Edit",
          fontType: "mode_edit",
          linkPath: "projects"
        },
        {
          labelText: "Reassign Audits",
          fontType: "repeat",
          action: get(this, 'actions.triggerReassignAudits')
        }
      ]
    }
  }),

  actions: {
    triggerReassignAudits() {
      // console.log('selected rows', get(table, 'selectedRows'));
    }
  }

});
