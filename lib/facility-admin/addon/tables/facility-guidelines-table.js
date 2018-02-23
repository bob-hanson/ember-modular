import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Guidelies',
          valuePath: 'guidelineName',
          width: '50%',
          linkPath: 'facilityAdminGuidelineLinkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Last Modified',
          valuePath: 'lastModified',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'dateTime',
          width: '40%'
        }, {
          label: 'Default',
          width: '10%',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'statusIndicator',
          statusIconPath: 'defaultStatusIcon',
          sortValue: 'defaultSort'
        }
      ]
    }
  })
});

