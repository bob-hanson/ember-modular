import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { get, set, computed, observer } from '@ember/object';
import { notEmpty, not, alias } from '@ember/object/computed';
import { isEqualByKeys } from 'ember-macaroni';
import layout from '../templates/components/checklist-response-button-group';

export default BaseComponent.extend({
  layout,
  classNames: ['checklist-response-button-group'],
  classNameBindings: ['colSpan'],
  chartLevelCommentsService: service(),
  response: null,
  responseOptions: computed(function() {
    return [
      {
        optionName: 'Yes',
        optionValue: 'yes'
      },
      {
        optionName: 'No',
        optionValue: 'no'
      },
      {
        optionName: 'N/A',
        optionValue: 'n/a'
      }
    ];
  }),
  hasResponseObject: notEmpty('responseObject'),
  responseObject: null,
  shouldAddChartLevelComment: isEqualByKeys('checklistTemplate.commentTrigger', 'response'),
  shouldNotAddChartLevelComment: not('shouldAddChartLevelComment'),
  massAction: alias('chartLevelCommentsService.massAction'),
  isEnabled: not('massAction'),
  observerChecklistResponses: observer('currentChecklistResponses', function() {
    this.setResponseObject();
    if (get(this, 'massAction')) {
      this.setResponse();
    }
  }),

  initComponent() {
    this.setResponseObject();
    this.setResponse();
  },

  setResponseObject() {
    set(this, 'responseObject', get(this, 'currentChecklistResponses').findBy('facilityChecklistTemplateId', Number(get(this, 'checklistTemplate.id'))));
  },

  setResponse() {
    set(this, 'response', get(this, 'responseObject.userSelection') || null);
  },

  addOrUpdateResponse() {
    get(this, 'hasResponseObject') ? this.updateResponse() : this.addResponse();
  },

  updateResponse() {
    get(this, 'chartLevelCommentsService').updateComment(get(this, 'responseObject.id'), this.buildFormData());
  },

  addResponse() {
    get(this, 'chartLevelCommentsService').createComment(this.buildFormData());
  },

  buildFormData() {
    var formData = new FormData();
    formData.append('encounter_checklist_response[is_user_generated]', false);
    formData.append('encounter_checklist_response[facility_checklist_template_id]', get(this, 'checklistTemplate.id'));
    formData.append('encounter_checklist_response[user_selection]', get(this, 'response'));
    formData.append('encounter_checklist_response[modified_description]', get(this, 'shouldAddChartLevelComment') ? this.buildModifiedespcription() : '');
    return formData;
  },

  buildModifiedespcription() {
    var description = get(this, 'checklistTemplate.longDescription');
    description = description.replace('{{category}}', get(this, 'checklistTemplate.facilityChecklistCategory.categoryName'));
    description = description.replace('{{subCategory}}', get(this, 'checklistTempate.subCategory'));
    return description;
  },

  actions: {
    triggerResponseSelect() {
      this.addOrUpdateResponse();
    }
  }

});