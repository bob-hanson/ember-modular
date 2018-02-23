import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { get, set, computed } from '@ember/object';
import { debounce } from '@ember/runloop';
import layout from '../templates/components/checklist-templates';

export default BaseComponent.extend({
  layout,
  classNames: ['checklist-templates', 'scrollable'],
  classNameBindings: 'colSpan',
  percentageWidth: 40,
  facilityAudit: service(),
  facilityAuditRepository: service(),
  showCategorySort: alias('facilityAudit.showChecklistSort'),
  showSort: false,
  sortOrder: 1,

  sortedTemplates: computed('currentTemplates.@each.sortOrder', function() {
    return get(this, 'currentTemplates').sortBy('sortOrder');
  }),

  initComponent() {
    this.setShowSort();
  },

  setShowSort() {
    set(this, 'showSort', get(this, 'showCategorySort'));
  },

  debounceSorted() {
    debounce(this, 'updateSortOrder', 1000);
  },

  updateSortOrder() {
    var formData = new FormData();
    set(this, 'sortOrder', 1);
    get(this, 'sortedTemplates').forEach(this.buildSortFormData.bind(this, formData));

    // this.debugFormData(formData);
    get(this, 'facilityAuditRepository').updateChecklistTemplateSortOrder(formData)
      .then(this.handleSortUpdated.bind(this));
  },

  buildSortFormData(formData, template) {
    formData.append('facility_checklist_templates_order[][id]', get(template, 'id'));
    formData.append('facility_checklist_templates_order[][sort_order]', get(this, 'sortOrder'));
    set(this, 'sortOrder', get(this, 'sortOrder') + 1);
  },

  handleSortUpdated(response) {
    get(this, 'store').pushPayload(response);
  },

  // debugFormData(fd) {
  //   var pair;
  //   for (pair of fd.entries()) {
  //     console.log(pair[0] + ', ' + pair[1]);
  //   }
  // },

  actions: {
    triggerSorted() {
      this.debounceSorted();
    }
  }

});
