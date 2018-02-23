import Service from '@ember/service';
import { not } from '@ember/object/computed';

export default Service.extend({
  currentEncounterId: null,
  currentAuditId: null,
  isViewingEncounter: false,
  isNotViewingEncounter: not('isViewingEncounter'),
  isViewingFullProjectList: true,
  isViewingFullManageAuditList: true,
  isViewingFullResourcesList: true,

  isViewingProject: false,
  isViewingOrganization: false,
  isviewingCoder: false,
  isViewingProvider: false,
  isViewingFacility: false,
  isViewingGuideLine: false,
  isNotCreatingGuideLine: true,
  isViewingReportCoderProjects:false,
  isViewingChecklistCategory: false,
  isViewingFindingsRecommendationCategory: false,
  isViewingFindingsRecommendationSubategory: false,
  isViewingFindingsRecommendationTemplate: false,

  showChecklistSort: false,

  isViewingReportProjectEncounters:false,


  facilityPath: 'manage-lists.facilities.facility',
  adminProviderPath: 'manage-lists.providers.provider.provider-details',
  adminCoderPath: 'manage-lists.coders.coder.coder-details',
  adminOrganizationPath: 'manage-lists.organizations.organization.organization-details',
  adminPayerPath: 'manage-lists.payers.payer.payer-details',

  editEncounterPath: 'projects.project.project-details.project-encounters.project-encounter.edit-encounter',
  patientDataPath: 'projects.project.project-details.project-encounters.project-encounter.edit-encounter.patient-data',
  proceduresPath: 'projects.project.project-details.project-encounters.project-encounter.edit-encounter.procedures',
  checklistPath: 'projects.project.project-details.project-encounters.project-encounter.edit-encounter.checklist',
  codesPath: 'projects.project.project-details.project-encounters.project-encounter.edit-encounter.codes',

  newAuditGuidelinePath: 'audit-settings.audit-guidelines.new-audit-guideline',
  newReportParametersPath: 'audit-settings.audit-guidelines.new-audit-guideline.new-report-parameters',
  newScoringMethodPath: 'audit-settings.audit-guidelines.new-audit-guideline.new-scoring-method',

  editAuditScopePath: 'audit-settings.audit-guidelines.audit-guideline.edit-audit-guideline.edit-audit-scope',
  editReportParametersPath: 'audit-settings.audit-guidelines.audit-guideline.edit-audit-guideline.edit-report-parameters',
  editScoringMethodPath: 'audit-settings.audit-guidelines.audit-guideline.edit-audit-guideline.edit-scoring-method'

});
