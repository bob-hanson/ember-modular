import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Subcategory Name',
          valuePath: 'categoryName',
          width: '50%',
          linkPath: 'facilityAdminChecklistSubcategoryPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }
      ]
    }
  })
});