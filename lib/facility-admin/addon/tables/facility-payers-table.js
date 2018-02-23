import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Payer Name',
          valuePath: 'payerName',
          width: '35%',
          linkPath: 'facilityAdminPayerDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Payer ID',
          valuePath: 'payerIdentifier',
          width: '15%'
        }, {
          label: 'Location',
          valuePath: 'payerLocation',
          width: '35%'
        }, {
          label: 'Fee Schedule',
          width: '15%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'feeScheduleStatus',
          statusPath: 'feeColor',
          sortValue: 'feeSort'
        }
      ]
    }
  })
});


