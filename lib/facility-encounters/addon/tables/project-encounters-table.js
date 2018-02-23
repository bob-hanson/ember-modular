import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  projectEncountersTableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'DOS',
          valuePath: 'dateOfService',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '20%'
        }, {
          label: 'Patient Name',
          valuePath: 'patientName',
          width: '20%'
        }, {
          label: 'Patient ID',
          valuePath: 'patientAltId',
          width: '20%'
        }, {
          label: 'Status',
          valuePath: 'encounterStatus',
          linkPath: 'linkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link',
          useEnum: 'facilityEncounters.encounterStatusEnum',
          width: '20%'
        }, {
          label: 'Internal Comment',
          valuePath: 'encounterComments',
          width: '20%'
        }
      ]
    }
  })
});
