import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Name',
          valuePath: 'fullName',
          width: '30%',
          linkPath: 'facilityAdminUserDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Permissions',
          valuePath: 'accessLevel',
          width: '20%'
        }, {
          label: 'Email',
          valuePath: 'email',
          width: '35%'
        }, {
          label: 'User Status',
          width: '15%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'statusIcon',
          statusPath: 'statusColor',
          sortValue: 'statusSort'
        }
      ]
    }
  })
});
