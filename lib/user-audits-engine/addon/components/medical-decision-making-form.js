import { get } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/medical-decision-making-form';

export default FormView.extend(
  AuditNavigation, {
  layout,
  classNames: ['medical-decision-making-form'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentMdm: alias('currentApp.auditFormObject.medicalDecisionMaking'),
  customFieldDefinitions: alias('currentMdm.customFieldDefinitions'),
  customFieldValues: alias('currentMdm.customFieldValues'),
  hasCustomFields: alias('currentMdm.hasCustomFields'),
  hasRiskLevel: notEmpty('currentMdm.risk.selectedRisk'),

  resetForm() {
    get(this, 'currentMdm').resetObject();
    next(this, 'reInitCustomFields');
  },

  clearForm() {
    get(this, 'currentMdm').clearObject();
    next(this, 'reInitCustomFields');
  },

  reInitCustomFields() {
    get(this, 'dynamicFormRegistry.registry.medicalDecisionMakingCustomFields').reInit();
  },

  actions: {

    triggerClearForm() {
      this.clearForm();
    },

    triggerResetForm() {
      this.resetForm();
    }

  }

});
