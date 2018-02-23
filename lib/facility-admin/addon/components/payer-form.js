import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/payer-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,

  headerText: 'Add Payer',
  facilityAudit: service(),

  initComponent() {
    this.buildFormProperties();
  },

  feeScheduleOptions: computed(function () {
    return [
      { optionName: 'CMS', optionValue: 'CMS' },
      { optionName: 'Payer Based', optionValue: 'PAYER' },
    ]
  })

});
