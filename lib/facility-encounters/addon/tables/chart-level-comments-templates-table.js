import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Mixin.create({
  chartLevelCommentsService: service(),
  chartLevelCommentsTemplatesTableDefinition: computed(function () {
    return {
      columns: [
        {
          label: 'Category',
          valuePath: 'facilityChecklistCategory.categoryName',
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
          action: get(this, 'actions.triggerAddChartLevelComment').bind(this),
          width: '10%'
        }
      ]
    }
  }),

  createCommentFromTemplate(row) {
    var formData = new FormData();
    formData.append('encounter_checklist_response[modified_description]', get(row, 'content.longDescription'));
    formData.append('encounter_checklist_response[is_user_generated]', true);
    formData.append('encounter_checklist_response[facility_checklist_template_id]', get(row, 'content.id'));

    get(this, 'chartLevelCommentsService').createComment(formData);
  },

  // debugFormData(fd) {
  //   var pair;
  //   for (pair of fd.entries()) {
  //     console.log(pair[0] + ', ' + pair[1]);
  //   }
  // },

  actions: {
    triggerAddChartLevelComment(row) {
      this.createCommentFromTemplate(row);
    }
  }

});