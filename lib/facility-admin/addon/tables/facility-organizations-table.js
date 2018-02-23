import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Organization',
          valuePath: 'organizationName',
          width: '50%',
          linkPath: 'facilityAdminOrganizationDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Organization ID',
          valuePath: 'organizationIdentifier',
          width: '20%'
        }, {
          label: 'Notes',
          valuePath: 'organizationNotes',
          width: '30%'
        }
      ]
    }
  })
});

