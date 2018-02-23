import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import FormView from 'hyspa-form-components/components/form-view';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from 'facility-admin/templates/components/reset-user-form';

export default FormView.extend(
  FormPropertiesMixin, {
    layout,

    facilityAuditRepository: service(),
    facilityAudit: service(),

    headerText: 'Reset User Password',

    initComponent() {
      this.buildFormProperties();
    },

    validatePasswordConfirm() {
      console.log(get(this, 'password'));
      console.log(get(this, 'confirmPassword'));
    },

    actions: {

      triggerValidatePasswordConfirm() {
        this.validatePasswordConfirm();
      }

    }

  });
