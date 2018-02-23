import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Category',
          valuePath: 'categoryName',
          width: '30%'
        },
        {
          label: 'Sub Category',
          valuePath: 'subCategoryName',
          width: '30%'
        },
        {
          label: 'Detail',
          valuePath: 'shortDescription',
          width: '30%'
        },
        {
          cellType: 'hyspa-light-table-cell',
          formatAs: 'actionIcon',
          sortable: false,
          fontType: 'note_add',
          action: get(this, 'actions.triggerAddKeyFindingFromTemplate').bind(this),
          width: '10%'
        }
      ]
    }
  }),

  createKeyFindingFromTemplate(row) {
    var formData = new FormData();
    formData.append('key_finding_response[modified_description]', get(row, 'content.longDescription'));
    formData.append('key_finding_response[is_user_generated]', true);
    formData.append('key_finding_response[key_finding_template_id]', get(row, 'content.id'));

    this.addKeyFinding(formData);
  },

  // debugFormData(fd) {
  //   var pair;
  //   for (pair of fd.entries()) {
  //     console.log(pair[0] + ', ' + pair[1]);
  //   }
  // },

  actions: {
    triggerAddKeyFindingFromTemplate(row) {
      this.createKeyFindingFromTemplate(row);
    }
  }

});