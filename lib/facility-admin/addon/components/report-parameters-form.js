import { computed, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import layout from 'facility-admin/templates/components/report-parameters-form';

export default FormView.extend({
  layout,
  padding: '0,0,0,0',

  facilityAudit: service(),

  reportType: 1,
  reportInstructions: '',
  isAttorneyClientPrivilege: true,
  includeSignaturePage: true,
  isDraftCopy: false,
  includeDRGSection: true,
  includeDRGDescription: true,
  includeDRGReimbursementAmount: true,
  includeICD10CMSection: true,
  includeICD10CMDescription: true,
  includeICD10PCSSection: false,
  includeICD10PCSDescription: false,
  includeICD10CPTHPCSSection: false,
  includeICD10CPTHPCSDescription: false,
  includeKeyFindingsSection: true,
  wantsKeyFindingsAndRecommendationsPageBreak: false,
  includeDiagnosisToProcedureMapping: false,
  includePayer: false,
  includeRevenueCode: true,

  newAuditScopePath: alias('facilityAudit.newAuditScopePath'),
  newScoringMethodPath: alias('facilityAudit.newScoringMethodPath'),

  primaryButtonText: computed("", function () {
    return "Save";
  }),

  initComponent() {
    this.setupDefaults();
  },

  setupDefaults() {
    set(this, 'reportTypeOptions', [
      { optionName: 'report1', optionValue: 1 },
      { optionName: 'report2', optionValue: 2 },
      { optionName: 'report3', optionValue: 3 },
      { optionName: 'report4', optionValue: 4 },
      { optionName: 'report5', optionValue: 5 },
    ]);
  },

  actions: {

    triggerFormSubmit() {

    }

  }

});
