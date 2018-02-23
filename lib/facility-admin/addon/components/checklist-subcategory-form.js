import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from '../templates/components/checklist-subcategory-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,
  headerText: 'Add Subcategory',

  initComponent() {
    this.buildFormProperties();
  }

});
