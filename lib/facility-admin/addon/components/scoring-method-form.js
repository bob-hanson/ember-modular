import { computed, set } from '@ember/object';
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import layout from 'facility-admin/templates/components/scoring-method-form';

export default FormView.extend({
  layout,
  padding: '0,0,0,0',

  facilityAudit: service(),

  scoringMethod: 2,
  isAdmissionAccuracy: false,
  isTotalAccuracy: true,
  includeMSDRG: true,
  includeAPRDRG: true,
  includeAPDRG: true,
  msDRGCorrect: 10,
  msDRGIncorrect: 10,
  aprDRGCorrect: 10,
  aprDRGIncorrect: 10,
  apDRGCorrect: 20,
  apDRGIncorrect: 80,
  primaryDiagnosisCorrect: 20,
  primaryDiagnosisIncorrect: 40,
  primaryDiagnosisAdditional: 40,
  secondaryDiagnosisCorrect: 20,
  secondaryDiagnosisIncorrect: 40,
  secondaryDiagnosisAdditional: 40,
  icd10PCSCorrect: 40,
  icd10PCSIncorrect: 40,
  icd10PCSAdditional: 20,
  cptHCPCSCorrect: 73,
  cptHCPCSIncorrect: 7,

  newAuditScopePath: alias('facilityAudit.newAuditScopePath'),
  newReportParametersPath: alias('facilityAudit.newReportParametersPath'),

  primaryButtonText: computed("", function () {
    return "Save";
  }),

  initComponent() {
    this.setupDefaults();
  },

  setupDefaults() {
    set(this, 'scoringMethodOptions', [{ optionName: 'Percentage Based', optionValue: 1 }, { optionName: 'Point Based', optionValue: 2 }]);
  },

  actions: {

    triggerFormSubmit() {

    }

  }

});
