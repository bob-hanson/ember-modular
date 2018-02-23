import DS from 'ember-data';
import { get, computed } from '@ember/object';
import { alias, not, equal } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, belongsTo, hasMany } = DS;

export default BaseModel.extend({
  projectName: attr('string'),
  startDate: attr('date'),
  endDate: attr('date'),
  createdAt: attr('date'),
  totalEncounters: attr('number'),
  totalAssignedEncounters: attr('number'),
  totalInProgressEncounters: attr('number'),
  totalCompleteEncounters: attr('number'),
  projectStatus: attr('string'),
  projectType: attr('string'),
  facilityId: attr('number'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  facility: belongsTo('facility'),
  facilityGuideline: belongsTo('facility-guideline'),

  facilityAudits: hasMany('facility-audit'),

  notAssignedStatusIcon: 'termed',
  notAssignedStatus: 'disabled',
  assignedStatusIcon: 'active',
  assignedStatus: 'inactive',
  inProgressStatusIcon: 'active',
  inProgressStatus: 'inactive',
  completedStatusIcon: 'active',
  completedStatus: 'success',

  projectSlug: alias('id'),
  linkText: alias('projectName'),
  linkPath: 'projects.project.project-details',

  isInternal: equal('projectType', 'inpatient'),
  isExternal: not('isInternal'),

  totalUnassignedEncounters: computed('totalEncounters', 'totalAssignedEncounters', function() {
    return get(this, 'totalEncounters') - get(this, 'totalAssignedEncounters');
  }),

  facilityReportingCoderProjectLinkPath: computed('isInternal', function(){
    return `projects.${get(this, 'projectType')}.project.coder-projects`;
  }),

  statusIcon: computed('projectStatus', function () {
    switch(get(this, 'projectStatus')) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'inactive';
      case 'termed':
        return 'disabled';
      default:
        return 'inactive';
    }
  }),

  statusColor: alias('statusIcon'),

  statusSort: computed('projectStatus', function () {
    switch(get(this, 'projectStatus')) {
      case 'active':
        return 1;
      case 'inactive':
        return 2;
      case 'termed':
        return 3;
      default:
        return 2;
    }
  })

});
