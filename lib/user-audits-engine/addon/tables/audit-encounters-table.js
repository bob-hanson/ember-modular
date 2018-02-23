import Table from 'ember-light-table';

var columnDefintions = [
    {
        label: 'DOS',
        valuePath: 'dos',
        width: '20%'
      }, {
        label: 'Patient Name',
        valuePath: 'patientName',
        width: '20%'
      }, {
        label: 'Patient ID',
        valuePath: 'patientId',
        width: '20%'
      }, {
        label: 'Status',
        valuePath: 'encounterStatus',
        width: '20%',
        cellComponent: 'grid-column-link'
      }, {
        label: 'Progress',
        valuePath: 'encounterProgressPercentage',
        width: '20%'
      }
  ];

export default new Table(columnDefintions);
