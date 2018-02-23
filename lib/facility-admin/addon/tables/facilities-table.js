import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Facility',
          valuePath: 'facilityName',
          width: '40%',
          linkPath: 'facilityAdminFacilityDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'City',
          valuePath: 'facilityCity',
          width: '40%'
        }, {
          label: 'State',
          valuePath: 'facilityState',
          width: '20%'
        }
      ]
    }
  })
});
