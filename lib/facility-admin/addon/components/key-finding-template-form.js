import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from '../templates/components/key-finding-template-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,
  headerText: 'Add Template',
  store: service(),
  categoryOptions: computed(function() {
    return get(this, 'store').peekAll('facility-key-finding-category')
  }),
  subcategoryOptions: computed(function() {
    return get(this, 'store').peekAll('facility-key-finding-sub-category')
  }),

  initComponent() {
    this.buildFormProperties();
  }

});
