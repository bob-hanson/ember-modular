import BaseComponent from 'hyspa-base-components/components/base-component';
import { get, set, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import TemplatesTable from 'facility-encounters/tables/key-finding-templates-table';
import layout from '../templates/components/key-findings';

export default BaseComponent.extend(
  FilterList,
  TemplatesTable, {
  layout,
    classNames: ['key-findings', 'action-panel-component'],
  classNameBindings: ['colSpan'],
  padding: '2,0,2,0',

  facilityAudit: service(),
  facilityAuditRepository: service(),
  hyspaActionPanelService: service(),

  currentResponses: null,
  currentAuditId: alias('facilityAudit.currentAuditId'),
  filterProperties: computed(function() {
    return ['categoryName', 'subCategoryName', 'shortDescription'];
  }),
  commentTemplates: computed(function () {
    return get(this, 'store').peekAll('facility-key-finding-template');
  }),
  currentCollection: alias('commentTemplates'),
  filteredComments: alias('filteredCollection'),

  initComponent() {
    this.fetchFindings();
    this.setFilteredCollection();
  },

  fetchFindings() {
    var project = get(this, 'store').peekRecord('facility-audit', get(this, 'currentAuditId')),
        currentAuditId = Number(get(this, 'currentAuditId'));

    if (get(project, 'initialFindingsLoaded')) {
      let responses = get(this, 'store').peekAll('facility-key-finding-response').filterBy('facilityAuditId', currentAuditId);
      this.handleKeyFindingResponsesResponse(project, responses);
    } else {
      return get(this, 'store').query('facility-key-finding-response', { facility_audit_id: currentAuditId })
        .then(this.handleKeyFindingResponsesResponse.bind(this, project));
    }
  },

  handleKeyFindingResponsesResponse(project, responses) {
    set(project, 'initialFindingsLoaded', true);
    set(this, 'currentResponses', responses.sortBy('createdAt').reverse());
  },

  addKeyFinding(formData) {
    formData.append('key_finding_response[audit_id]', get(this, 'facilityAudit.currentAuditId'));
    get(this, 'facilityAuditRepository').createKeyFindingResponse(formData)
      .then(this.handleKeyFindingResponseCreatedOrUpdated.bind(this, true));
  },

  handleKeyFindingResponseCreatedOrUpdated(isNew, response) {
    get(this, 'store').pushPayload(response);
    if (isNew) {
      get(this, 'hyspaActionPanelService').scrollToTop('.listed-key-findings');
    }
    this.fetchFindings();
  },

  updateKeyFinding(keyFinding) {
    var formData = new FormData();
    formData.append('key_finding_response[modified_description]', get(keyFinding, 'modifiedDescription'));
    return get(this, 'facilityAuditRepository').updateKeyFindingResponse(get(keyFinding, 'id'), formData)
      .then(this.handleKeyFindingResponseCreatedOrUpdated.bind(this, false));
  },

  deleteKeyFinding(keyFinding) {
    get(this, 'facilityAuditRepository').deleteKeyFindingResponse(get(keyFinding, 'id'))
      .then(this.handleDeletedKeyFinding.bind(this, keyFinding));
  },

  handleDeletedKeyFinding(keyFinding) {
    let recordToDelete = get(this, 'store').peekRecord('facility-key-finding-response', get(keyFinding, 'id'));
    get(this, 'store').unloadRecord(recordToDelete);
    this.fetchFindings();
  },

  actions: {
    triggerAddKeyFinding(formData) {
      this.addKeyFinding(formData);
    },
    triggerRemoveComment(keyFinding) {
      this.deleteKeyFinding(keyFinding);
    },
    triggerCommentChange(keyFinding) {
      this.updateKeyFinding(keyFinding)
    }
  }
});
