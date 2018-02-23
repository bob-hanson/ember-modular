import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';
import FormView from 'hyspa-form-components/components/form-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/audit-history-form';

export default FormView.extend(
  AuditNavigation, {
  layout,
  classNames: ['audit-history-form'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentHistory: alias('currentApp.auditFormObject.history'),
  customFieldDefinitions: alias('currentHistory.customFieldDefinitions'),
  customFieldValues: alias('currentHistory.customFieldValues'),
  hasCustomFields: alias('currentHistory.hasCustomFields'),

  resetForm() {
    get(this, 'currentHistory').resetObject();
    next(this, 'reInitCustomFields');
  },

  clearForm() {
    get(this, 'currentHistory').clearObject();
    next(this, 'reInitCustomFields');
  },

  reInitCustomFields() {
    get(this, 'dynamicFormRegistry.registry.auditHistoryCustomFields').reInit();
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
