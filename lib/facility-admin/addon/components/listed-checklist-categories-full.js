import { get, set, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
import { ifThenElseWithValues } from 'ember-macaroni';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import ChecklistCategoryTable from 'facility-admin/tables/checklist-category-table';
import layout from '../templates/components/listed-checklist-categories-full';

export default ContentView.extend(
  ChecklistCategoryTable,
  FilterList, {
    layout,
    classNames: ['listed-checklist-categories-full'],
    classNameBindings: ['colSpan'],
    facilityAudit: service(),
    facilityAuditRepository: service(),

    filterProperties: null,
    sortOrder: 1,
    showSort: alias('facilityAudit.showChecklistSort'),
    switchWidth: ifThenElseWithValues('showSort', 100, 50),

    currentCollection: computed('currentCategories.@each.sortOrder', function() {
      return get(this, 'currentCategories').sortBy('sortOrder');
    }),

    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['categoryName']);
    },

    debounceSorted() {
      debounce(this, 'updateSortOrder', 1000);
    },

    updateSortOrder() {
      var formData = new FormData();
      set(this, 'sortOrder', 1);
      get(this, 'currentCollection').forEach(this.buildSortFormData.bind(this, formData));

      this.debugFormData(formData);
      get(this, 'facilityAuditRepository').updateChecklistCategorySortOrder(formData)
        .then(this.handleSortUpdated.bind(this));
    },

    buildSortFormData(formData, category) {
      formData.append(`facility_checklist_category_order[][id]`, get(category, 'id'));
      formData.append(`facility_checklist_category_order[][sort_order]`, get(this, 'sortOrder'));
      set(this, 'sortOrder', get(this, 'sortOrder') + 1);
    },

    handleSortUpdated(response) {
      get(this, 'store').pushPayload(response);
    },

    debugFormData(fd) {
      var pair;
      for (pair of fd.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
    },

    actions: {
      triggerSorted() {
        this.debounceSorted();
      }
    }

  });
