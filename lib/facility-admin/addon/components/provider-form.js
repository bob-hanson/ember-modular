import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/provider-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,

  headerText: 'Add Provider',
  facilityAuditRepository: service(),
  facilityAudit: service(),

  initComponent() {
    this.buildFormProperties();
  },

  specialtyOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchStoreModels('audit-specialty');
  }),

  facilityOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility');
  }),

  providerStatusOptions: computed(function (){
    return [
      { optionName: 'Active', optionValue: 'active' },
      { optionName: 'Inactive', optionValue: 'inactive'},
      { optionName: 'Termed', optionValue: 'termed'}
    ];
  })

});
