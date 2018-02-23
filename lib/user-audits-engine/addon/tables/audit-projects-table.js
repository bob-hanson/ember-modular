import Table from 'ember-light-table';

var columnDefintions = [
    {
        label: 'Coder Name',
        valuePath: 'coderName',
        width: '16%'
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
        valuePath: 'dueDate',
        width: '12%'
      }, {
        label: 'Not Started',
        valuePath: 'projectNotStartedCount',
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
  ];

export default new Table(columnDefintions);
