import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { computed, get } from '@ember/object';
import { alias, equal, not } from '@ember/object/computed';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  projectName: attr('string'),
  coderName: attr('string'),
  organization: attr('string'),
  specialty: attr('string'),
  dueDate: attr('date'),
  auditor: attr('string'),
  reviewer: attr('string'),
  projectStatus: attr('string'),
  dos: attr('number'),
  completedDate: attr('date'),
  unassigned: attr('number'),
  unassignedQa: attr('number'),
  reassigned: attr('number'),
  reassignedQa: attr('number'),
  reAudit: attr('number'),
  reAuditQa: attr('number'),

  facilityProjectId: attr('number'),
  facilityCoderId: attr('number'),

  auditSlug: alias('id'),
  coderSpecialty: attr('string'),
  endDate: attr('date'),
  updatedAt: attr('date'),
  totalEncounters: attr('number'),
  totalAssignedEncounters: attr('number'),
  totalInProgressEncounters: attr('number'),
  totalCompleteEncounters: attr('number'),
  projectType: attr('string'),
  facilityName: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),

  inpatientCompletedProjectsCount: attr('number'),
  inpatientPendingProjectsCount: attr('number'),
  outpatientCompletedProjectsCount: attr('number'),
  outpatientPendingProjectsCount: attr('number'),

  facilityCoders: hasMany('facility-coder'),
  facilityProjects: hasMany('facility-project'),

  isInpatient: equal('projectType', 'inpatient'),
  isOutpatient: not('isInpatient'),

  projectSlug: alias('id'),
  linkText: alias('coderName'),
  linkPath: 'projects.project.project-details.project-encounters',

  manageAuditsLinkPath: 'manage-audits.manage-audit.audit-encounters',

  facilityReportingCoderProjectsLinkPath: computed('isInpatient', function () {
    return get(this, 'isInpatient') ? 'coders.inpatient.coder.coder-audit-projects'
                                    : 'coders.outpatient.coder.coder-audit-projects';
  }),

  completedProjectsCount: computed('isInpatient', function () {
    return get(this, 'isInpatient') ? get(this, 'inpatientCompletedProjectsCount')
                                    : get(this, 'outpatientCompletedProjectsCount');
  }),

  pendingProjectsCount: computed('isInpatient', function () {
    return get(this, 'isInpatient') ? get(this, 'inpatientPendingProjectsCount')
                                    : get(this, 'outpatientPendingProjectsCount');
  }),

  notStartedStatusIndicator: 'notStarted',
  notStartedStatus: 'error',

  projectStatusDisplayText: computed('projectStatus', function () {
    switch (get(this, 'projectStatus')) {
      case 'audit':
        return 'In Progress';
      case 'qa':
        return 'Report Sent';
      case 'complete':
        return 'Complete';
    }
  }),

  statusIcon: computed('projectStatus', function () {
    return 'active';
  }),

  statusColor: computed('projectStatus', function () {
    switch (get(this, 'projectStatus')) {
      case 'audit':
        return 'inactive';
      case 'qa':
        return 'inactive';
      case 'complete':
        return 'success';
    }
  }),

  totalNotStartedEncounters: computed('totalEncounters', 'totalAssignedEncounters', 'totalInProgressEncounters', 'totalCompleteEncounters', function() {
    return get(this, 'totalEncounters') - (get(this, 'totalInProgressEncounters') + get(this, 'totalCompleteEncounters'));
  })

});
