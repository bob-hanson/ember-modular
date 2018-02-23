import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Short Description',
          valuePath: 'shortDescription',
          width: '32%',
          linkPath: 'facilityAdminKeyFindingTemplatePath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        },
        {
          label: "Category",
          valuePath: 'categoryName',
          width: '32%'
        },
        {
          label: 'Subcategory',
          valuePath: 'subCategoryName',
          width: '32%'
        }
      ]
    }
  })
});