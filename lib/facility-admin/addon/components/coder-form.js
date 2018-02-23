import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/coder-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,

  facilityAuditRepository: service(),
  facilityAudit: service(),

  headerText: 'Add Coder',

  initComponent() {
    this.buildFormProperties();
  },

  organizationOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility-organization');
  }),

  specialtyOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchIDBModels('audit-specialty');
  }),

  facilityOptions: computed('', function () {
    return get(this, 'facilityAuditRepository').fetchStoreModels('facility');
  }),

  employmentTypeOptions: computed(function() {
    return [
      { optionName: 'Active', optionValue: 'active' },
      { optionName: 'Inactive', optionValue: 'inactive' },
      { optionName: 'Termed', optionValue: 'termed' }
    ]
  })

});
