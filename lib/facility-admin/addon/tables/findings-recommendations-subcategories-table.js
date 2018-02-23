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
          linkPath: 'facilityAdminFindingsRecommendationSubcategoryPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link'
        }
      ]
    }
  })
});