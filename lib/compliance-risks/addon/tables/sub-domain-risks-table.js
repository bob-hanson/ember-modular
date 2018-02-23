import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Risk',
          valuePath: 'riskName',
          width: '15%',
          linkPath: 'facilityAdminFacilityDetailsPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Domain',
          valuePath: 'riskDomain',
          width: '12%'
        }, {
          label: 'Category',
          valuePath: 'riskCategory',
          width: '12%'
        }, {
          label: 'Responsible',
          valuePath: 'riskResponsible',
          width: '15%'
        }, {
          label: 'Location',
          valuePath: 'riskLocation',
          width: '12%'
        }, {
          label: 'Score',
          valuePath: 'riskScore',
          width: '11%'
        }, {
          label: 'Status',
          valuePath: 'riskStatus',
          width: '11%'
        }, {
          label: 'Follow Up',
          valuePath: 'riskFollowUp',
          width: '12%'
        }
      ]
    }
  })
});
