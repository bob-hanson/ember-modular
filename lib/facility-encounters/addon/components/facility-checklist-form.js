import FormView from 'hyspa-form-components/components/form-view';
import { computed, get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import layout from '../templates/components/facility-checklist-form';

export default FormView.extend({
  layout,
  classNames: ['facility-checklist-form'],
  classNameBindings: ['colSpan'],
  chartLevelCommentsService: service(),
  facilityAudit: service(),
  selectedTabIndex: 0,
  codesPath: alias('facilityAudit.codesPath'),
  currentChecklistResponses: alias('chartLevelCommentsService.currentChecklistResponses'),
  checklistCategories: computed(function() {
    return get(this, 'store').peekAll('facility-checklist-category').filterBy('isListed', true);
  }),

  debounceSetToNa(checklistCategory) {
    debounce(this, 'setToNa', checklistCategory, 1000, true);
  },

  setToNa(checklistCategory) {
    var templatesToMarkNa = get(checklistCategory, 'facilityChecklistTemplates').map(this.naMap.bind(this)).compact();
    set(this, 'chartLevelCommentsService.massAction', true);
    get(this, 'chartLevelCommentsService').markAsNa(templatesToMarkNa)
      // .then(this.updateCurrentChecklistResponses.bind(this));
  },

  naMap(category) {
    var categoryId = Number(get(category, 'id')),
        correspondingResponse = get(this, 'currentChecklistResponses').findBy('facilityChecklistTemplateId', categoryId);
    if (isEmpty(correspondingResponse)) {
      return categoryId;
    }
  },

  updateCurrentChecklistResponses(response) {
    get(this, 'currentChecklistResponses').setObjects(response.content);
  },

  clearChecklistCategory(checklistCategory) {
    var responses = get(checklistCategory, 'facilityChecklistTemplates').map(({ id }) => get(this, 'currentChecklistResponses').findBy('facilityChecklistTemplateId', Number(id))).compact();
    set(this, 'chartLevelCommentsService.massAction', true);
    get(this, 'chartLevelCommentsService').deleteResponses(responses);
  },

  clearAllCategories() {
    var responses = [];
    set(this, 'chartLevelCommentsService.massAction', true);
    get(this, 'checklistCategories').forEach((checklistCategory) => {
      let categoryResponses = get(checklistCategory, 'facilityChecklistTemplates').map(({ id }) => get(this, 'currentChecklistResponses').findBy('facilityChecklistTemplateId', Number(id))).compact();
      responses.pushObjects(categoryResponses);
    });
    get(this, 'chartLevelCommentsService').deleteResponses(responses);
  },

  actions: {
    triggerSetToNA(checklistCategory) {
      this.debounceSetToNa(checklistCategory);
    },
    triggerClearCategory(checklistCategory) {
      this.clearChecklistCategory(checklistCategory);
    },
    triggerClearAllCategories() {
      this.clearAllCategories();
    }
  }

});
