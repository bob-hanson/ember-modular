import Object, { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/patient-data-form';
import PatientDataMixin from 'user-audits-engine/mixins/patient-data';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';

export default FormView.extend(
  PatientDataMixin,
  AuditNavigation, {
  layout,
  classNames: ['patient-data-form'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentPatient: alias('currentApp.auditFormObject.patientData'),
  currentTimeBasedCoding: alias('currentApp.auditFormObject.timeBasedCoding'),
  currentAuditCodes: alias('currentApp.auditFormObject.auditCodes'),

  customFieldDefinitions: alias('currentPatient.customFieldDefinitions'),
  customFieldValues: alias('currentPatient.customFieldValues'),
  hasCustomFields: alias('currentPatient.hasCustomFields'),

  diagnosisCodes: null,
  cptHcpcsCodes: null,

  initComponent() {
    this._super(...arguments);
    this.setupDiagnosisCodes();
    this.setupCptHcpcsCodes();
  },

  resetForm() {
    get(this, 'currentPatient').resetObject();
    next(this, 'reInitCustomFields');
  },

  clearForm() {
    get(this, 'currentPatient').clearObject();
    next(this, 'reInitCustomFields');
  },

  reInitCustomFields() {
    get(this, 'dynamicFormRegistry.registry.patientDataCustomFields').reInit();
  },

  addCptHcpcsCode() {
    get(this, 'cptHcpcsCodes').pushObject(Object.create());
  },

  removeCptHcpcsCode(cptHcpcsCodeToRemove) {
    get(this, 'cptHcpcsCodes').removeObject(cptHcpcsCodeToRemove);
  },

  setupDiagnosisCodes() {
    set(this, 'diagnosisCodes', []);
  },

  setupCptHcpcsCodes() {
    set(this, 'cptHcpcsCodes', []);
  },

  setTimeBasedChangedState() {
    get(this, 'currentTimeBasedCoding').set('changedByPatientData', true);
  },

  actions: {

    triggerServiceOrVisitTypeChange() {
      this.setTimeBasedChangedState();
    },

    triggerAddCptHcpcsCode() {
      this.addCptHcpcsCode();
    },

    triggerRemoveCptHcpcsCode(cptHcpcsCodeToRemove) {
      this.removeCptHcpcsCode(cptHcpcsCodeToRemove);
    },

    triggerClearForm() {
      this.clearForm();
    },

    triggerResetForm() {
      this.resetForm();
    }

  }

});
