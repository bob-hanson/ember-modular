import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';
import FormView from 'hyspa-form-components/components/form-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/documentation-services-form';

export default FormView.extend(
  AuditNavigation, {
  layout,
  classNames: ['documentation-services-form'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentDocumentationElements: alias('currentApp.auditFormObject.documentationElements'),
  customFieldDefinitions: alias('currentDocumentationElements.customFieldDefinitions'),
  customFieldValues: alias('currentDocumentationElements.customFieldValues'),
  hasCustomFields: alias('currentDocumentationElements.hasCustomFields'),

  clearElements() {
    get(this, 'currentDocumentationElements').setProperties({
      elements: [],
      other: null
    });
  },

  resetForm() {
    get(this, 'currentDocumentationElements').resetObject();
    next(this, 'reInitCustomFields');
  },

  clearForm() {
    get(this, 'currentDocumentationElements').clearObject();
    next(this, 'reInitCustomFields');
  },

  reInitCustomFields() {
    get(this, 'dynamicFormRegistry.registry.documentationElementsCustomFields').reInit();
  },

  actions: {

    triggerClearElements() {
      this.clearElements();
    },

    triggerClearForm() {
      this.clearForm();
    },

    triggerResetForm() {
      this.resetForm();
    }

  }

});
