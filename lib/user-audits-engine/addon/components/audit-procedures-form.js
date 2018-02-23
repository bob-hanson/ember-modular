import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';
import FormView from 'hyspa-form-components/components/form-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/audit-procedures-form';

export default FormView.extend(
  AuditNavigation, {
  layout,
  classNames: ['audit-procedures-form'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentProcedures: alias('currentApp.auditFormObject.procedures'),
  customFieldDefinitions: alias('currentProcedures.customFieldDefinitions'),
  customFieldValues: alias('currentProcedures.customFieldValues'),
  hasCustomFields: alias('currentProcedures.hasCustomFields'),

  initComponent() {
    this._super(...arguments);
  },

  resetForm() {
    get(this, 'currentProcedures').resetObject();
    next(this, 'reInitCustomFields');
  },

  clearForm() {
    get(this, 'currentProcedures').clearObject();
    next(this, 'reInitCustomFields');
  },

  reInitCustomFields() {
    get(this, 'dynamicFormRegistry.registry.proceduresCustomFields').reInit();
  },

  actions: {

    triggerClearForm() {
      this.clearForm();
    },

    triggerResetForm() {
      this.resetForm();
    },

    triggerClearSection(listedProcedure) {
      listedProcedure.clearObject();
    },

    triggerResetSection(listedProcedure) {
      listedProcedure.resetObject();
    }

  }

});
