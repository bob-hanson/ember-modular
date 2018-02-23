import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Provider',
          valuePath: 'providerNameWithCreds',
          width: '45%',
          linkPath: 'facilityAdminProviderDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Specialty',
          valuePath: 'providerSpecialty',
          width: '45%'
        }, {
          label: 'Status',
          width: '10%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'providerStatus',
          statusPath: 'statusColor',
          sortValue: 'statusSort'
        }
      ]
    }
  })
});
