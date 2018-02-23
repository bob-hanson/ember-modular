import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/facility-user-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,

  facilityAuditRepository: service(),
  facilityAudit: service(),

  headerText: 'Add Facility User',

  initComponent() {
    this.buildFormProperties();
  },

  userRoleOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'Super User' },
      { optionName: 'Admin', optionValue: 'Admin User' },
      { optionName: 'Audit', optionValue: 'Audit User' }
    ]
  })

});
