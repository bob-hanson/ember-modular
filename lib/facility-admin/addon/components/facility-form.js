import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/facility-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,

  facilityAuditRepository: service(),
  facilityAudit: service(),

  headerText: 'Add Facility',

  initForm() {
    this.buildFormProperties();
  },

  providerOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-provider');
  }),

  coderOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-coder');
  })

});
