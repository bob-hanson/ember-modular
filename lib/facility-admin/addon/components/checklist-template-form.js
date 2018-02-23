import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import layout from '../templates/components/checklist-template-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,
  headerText: 'Add Template',
  store: service(),
  categoryOptions: computed(function() {
    return get(this, 'store').peekAll('facility-checklist-category')
  }),
  subcategoryOptions: computed(function() {
    return get(this, 'store').peekAll('facility-checklist-sub-category')
  }),
  commentTriggerOptions: computed(function() {
    return [
      {
        optionName: 'Yes',
        optionValue: 'yes'
      },
      {
        optionName: 'No',
        optionValue: 'no'
      }
    ]
  }),

  setLongDescription() {
    if (isEmpty(get(this, 'facilityChecklistCategoryId'))) return;

    let selectedCategory = get(this, 'categoryOptions').findBy('id', get(this, 'facilityChecklistCategoryId').toString());
    set(this, 'longDescription', get(selectedCategory, 'defaultTemplateText') || null);
  },

  initComponent() {
    this.buildFormProperties();
    if (isEmpty(get(this, 'longDescription'))) {
      this.setLongDescription();
    }
  },

  actions: {
    triggerCategoryChange() {
      this.setLongDescription();
    }
  }

});
