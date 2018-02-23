import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/organization-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,

  facilityAudit: service(),

  headerText: 'Add Organization',

  initComponent() {
    this.buildFormProperties();
  }

});
