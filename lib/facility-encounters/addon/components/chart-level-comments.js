import BaseComponent from 'hyspa-base-components/components/base-component';
import { get, set, computed, setProperties } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import TemplatesTable from 'facility-encounters/tables/chart-level-comments-templates-table';
import layout from '../templates/components/chart-level-comments';

export default BaseComponent.extend(
  TemplatesTable, 
  FilterList, {
  layout,
  classNames: ['chart-level-comments'],
  classNameBindings: ['colSpan'],
  padding: '2,0,2,0',
  chartLevelCommentsService: service(),
  currentChartLevelComments: alias('chartLevelCommentsService.currentChartLevelComments'),
  commentToAdd: null,
  commentsLoading: true,
  filterProperties: null,
  commentTemplates: computed(function() {
    return get(this, 'store').peekAll('facility-checklist-template').filterBy('facilityChecklistCategory.isListed', false);
  }),
  currentCollection: alias('commentTemplates'),
  filteredComments: alias('filteredCollection'),

  initComponent() {
    this.setFilteredCollection();
    this.setupDefaults();
    get(this, 'chartLevelCommentsService').fetchChecklistResponses()
      .then(this.handleCommentsLoaded.bind(this));
  },

  setupDefaults() {
    setProperties(this, {
      filterProperties: ['facilityChecklistCategory.categoryName', 'subCategoryName', 'shortDescription']
    });
  },

  handleCommentsLoaded() {
    set(this, 'commentsLoading', false);
  },

  addComment(formData) {
    formData.append('encounter_checklist_response[is_user_generated]', true);
    formData.append('encounter_checklist_response[facility_checklist_template_id]', 0);
    get(this, 'chartLevelCommentsService').createComment(formData)
      .then(this.handleCommentCreated.bind(this));
  },

  handleCommentCreated() {
    set(this, 'commentToAdd', null);
  },
  
  updateComment(comment) {
    var formData = new FormData();
    formData.append('encounter_checklist_response[modified_description]', get(comment, 'modifiedDescription'));
    get(this, 'chartLevelCommentsService').updateComment(get(comment, 'id'), formData);
  },

  removeComment(comment) {
    set(this, 'chartLevelCommentsService.massAction', true);
    get(this, 'chartLevelCommentsService').deleteResponses([comment]);
  },

  actions: {
    triggerAddComment(formData) {
      this.addComment(formData);
    },

    triggerRemoveComment(comment) {
      this.removeComment(comment);
    },
    
    triggerCommentChange(comment) {
      this.updateComment(comment)
    }
  }

});
