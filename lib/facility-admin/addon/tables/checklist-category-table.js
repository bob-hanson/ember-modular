import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Category Name',
          valuePath: 'categoryName',
          width: '50%',
          linkPath: 'facilityAdminChecklistCategoryPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }, {
          label: 'Listed Among Checklist',
          valuePath: 'isListedReadable',
          width: '50%'
        }
      ]
    }
  })
});