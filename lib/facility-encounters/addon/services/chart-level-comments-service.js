import Service from '@ember/service';
import { get, set, setProperties } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { once, next } from '@ember/runloop';
import { Promise } from 'rsvp';

export default Service.extend({
  facilityAuditRepository: service(),
  currentApp: service(),
  store: service(),
  currentEncounterId: alias('currentApp.currentEncounterId'),
  currentChartLevelComments: null,
  currentChecklistResponses: null,
  massAction: false,

  init() {
    this._super(...arguments);
    this.setupDefaults();
  },

  setupDefaults() {
    setProperties(this, {
      currentChartLevelComments: [],
      currentChecklistResponses: []
    });
  },

  setCommentsAndResponses() {
    var responses = get(this, 'store').peekAll('facility-encounter-checklist-response').filterBy('facilityEncounterId', Number(get(this, 'currentEncounterId')));
    set(this, 'currentChecklistResponses', responses);
    set(this, 'currentChartLevelComments', responses.filterBy('hasModifiedDescription', true).sortBy('createdAt').reverse());
    next(this, 'resetMassAction');
  },

  resetMassAction() {
    set(this, 'massAction', false);
  },

  createComment(formData) {
    formData.append('encounter_checklist_response[facility_encounter_id]', get(this, 'currentApp.currentEncounterId'));
    return get(this, 'facilityAuditRepository').createEncounterChecklistReponse(formData)
      .then(this.handleCommentCreatedOrUpdated.bind(this, true));
  },

  updateComment(commentId, formData) {
    return get(this, 'facilityAuditRepository').updateEncounterChecklistReponse(commentId, formData)
      .then(this.handleCommentCreatedOrUpdated.bind(this, false));
  },

  handleCommentCreatedOrUpdated(isNew, response) {
    get(this, 'store').pushPayload(response);
    if (isNew) {
      this.commentsScrollTop();
    }
    this.fetchChecklistResponses();
    return response;
  },

  fetchChecklistResponses() {
    var encounter = get(this, 'store').peekRecord('facility-encounter', get(this, 'currentEncounterId')),
        self = this;

    if (get(encounter, 'initialChecklistResponsesLoaded')) {
      let responses = get(self, 'store').peekAll('facility-encounter-checklist-response').filterBy('facilityEncounterId', Number(get(self, 'currentEncounterId')));
      this.handleChecklistResponsesResponse(encounter, responses);
      return new Promise(function (resolve) {
        resolve(responses);
      });
    } else {
      return get(this, 'store').query('facility-encounter-checklist-response', { encounter_id: Number(get(this, 'currentEncounterId')) })
        .then(this.handleChecklistResponsesResponse.bind(this, encounter));
    }
  },

  handleChecklistResponsesResponse(encounter, response) {
    set(encounter, 'initialChecklistResponsesLoaded', true);
    once(this, 'setCommentsAndResponses');
    return response;
  },

  commentsScrollTop() {
    var listElement = document.querySelector('.listed-chart-level-comments');
    if (listElement) {
      listElement.scrollTop = 0;
    }
  },

  markAsNa(templateIds) {
    var formData = this.buildFormData(),
        self = this;
    templateIds.forEach(function(templateId) {
      self.appendResponseObject(formData, {
        facility_checklist_template_id: templateId,
        user_selection: 'n/a',
        is_user_generated: false
      })
    });

    return get(this, 'facilityAuditRepository').bulkCreateOrUpdateChecklistResponse(formData)
      .then(this.handleCommentCreatedOrUpdated.bind(this, false));
  },

  deleteResponses(responses, useTemplateIds) {
    var entityType = useTemplateIds ? 'checklist_template_ids' : 'response_ids',
        formData = new FormData();

    formData.append('facility_encounter_id', get(this, 'currentEncounterId'));
    
    responses.forEach(function(response) {
      formData.append(`checklist_template_responses[${entityType}][]`, Number(get(response, 'id')));
    });
    return get(this, 'facilityAuditRepository').deleteChecklistResponses(formData)
      .then(this.removeDeletedResponsesFromStore.bind(this, responses, useTemplateIds));
  },

  removeDeletedResponsesFromStore(responses) {
    responses.forEach((response) => {
      let recordToDelete = get(this, 'store').peekRecord('facility-encounter-checklist-response', get(response, 'id'));
      if (recordToDelete) {
        get(this, 'store').unloadRecord(recordToDelete);
      }
    });
    next(this, 'setCommentsAndResponses')
    return true;
  },

  buildFormData() {
    var formData = new FormData();
    formData.append('facility_encounter_id', get(this, 'currentEncounterId'));
    return formData;
  },

  appendResponseObject(formData, responseObject) {
    formData.append('checklist_template_responses[]', JSON.stringify(responseObject));
  }

});
