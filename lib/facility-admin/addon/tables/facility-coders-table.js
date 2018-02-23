import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Coder',
          valuePath: 'coderName',
          width: '20%',
          linkPath: 'facilityAdminCoderDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Specialty',
          valuePath: 'coderSpecialty',
          width: '20%'
        }, {
          label: 'Organization',
          valuePath: 'listedOrganizations',
          width: '20%'
        }, {
          label: 'Facilities',
          valuePath: 'listedFacilities',
          width: '30%'
        }, {
          label: 'Status',
          width: '10%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'coderStatus',
          statusPath: 'statusColor',
          sortValue: 'statusSort'
        }
      ]
    }
  })
});
