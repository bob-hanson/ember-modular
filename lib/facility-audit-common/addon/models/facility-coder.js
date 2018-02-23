import DS from 'ember-data';
import { get, computed } from '@ember/object';
import { alias, equal, not, notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  currentApp: service(),
  coderFirstName: attr('string'),
  coderMiddleName: attr('string'),
  coderLastName: attr('string'),
  coderEmail: attr('string'),
  coderIdentifier: attr('string'),
  coderCredential: attr('string'),
  coderStatus: attr('string'),
  coderPhone: attr('string'),
  coderNotes: attr('string'),
  contractDate: attr('date'),
  termedDate: attr('date'),
  optionName: attr('string'),
  optionValue: attr('number'),
  listedOrganizations: attr('string'),
  listedFacilities: attr('string'),
  facilityIds: attr(),
  facilityOrganizationIds: attr(),
  specialtyIds: attr(),

  isFullyLoaded: attr('boolean'),

  inpatientCompletedProjectsCount: attr('number'),
  inpatientPendingProjectsCount: attr('number'),
  outpatientCompletedProjectsCount: attr('number'),
  outpatientPendingProjectsCount: attr('number'),

  facilities: hasMany('facility'),
  facilityOrganizations: hasMany('facility-organization'),

  individualOrganizations: computed('listedOrganizations', function() {
    return isPresent(get(this, 'listedOrganizations')) ? get(this, 'listedOrganizations').split(",") : null;
  }),

  hasListedOrganizations: notEmpty('individualOrganizations'),

  isViewingAsInpatient: true,
  isViewingAsOutpatient: not('isViewingAsInpatient'),
  isActive: equal('coderStatus', 'active'),
  isInactive: equal('coderStatus', 'inactive'),
  isTermed: equal('coderStatus', 'termed'),

  coderSlug: alias('id'),
  formHeader: alias('coderName'),

  coderName: computed('coderFirstName', 'coderLastName', 'coderCredential', function() {
    return `${get(this, 'coderFirstName')} ${get(this, 'coderLastName')}, ${get(this, 'coderCredential')}`;
  }),

  linkText: alias('coderName'),
  linkPath: computed('currentApp.engineScope', function() {
    switch(get(this, 'currentApp.engineScope')) {
      case 'facility-admin':
        return 'manage-lists.coders.coder.coder-details';
      case 'facility-reporting':
        return 'coders.facility-reporting-list';
    }
  }),
  facilityAdminCoderDetailsPath: 'manage-lists.coders.coder.coder-details',
  facilityReportingLinkPath: 'coders.facility-reporting-list',
  facilityAdminCoderFacilitiesPath: 'manage-lists.coders.coder.coder-facilities',
  facilityAdminCoderEditLinkPath: 'manage-lists.coders.coder.edit-coder',

  activePath: computed(function () {
    return `coders/${get(this, 'coderSlug')}/`;
  }),

  coderDetailsActivePath: computed(function () {
    return `${get(this, 'activePath')}coder-details`;
  }),

  coderFacilitiesActivePath: computed(function () {
    return `${get(this, 'activePath')}coder-facilities`;
  }),

  completedColor: 'active',
  completedStatus: 'success',
  pendingColor: 'inactive',
  pendingStatus: 'inactive',

  facilityReportingCoderProjectsLinkPath: computed('isViewingAsInpatient', function(){
    return get(this, 'isViewingAsInpatient') ? 'coders.inpatient.coder.coder-audit-projects'
                                  : 'coders.outpatient.coder.coder-audit-projects';
  }),

  completedProjectsCount: computed('isViewingAsInpatient', function(){
    return get(this,'isViewingAsInpatient') ? get(this,'inpatientCompletedProjectsCount')
                                  : get(this,'outpatientCompletedProjectsCount');
  }),

  pendingProjectsCount: computed('isViewingAsInpatient',function(){
    return get(this,'isViewingAsInpatient') ? get(this,'inpatientPendingProjectsCount')
                                  : get(this,'outpatientPendingProjectsCount');
  }),

  statusColor: computed('coderStatus', function () {
    switch(get(this, 'coderStatus')) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'inactive';
      case 'termed':
        return 'disabled';
    }
  }),

  statusSort: computed('coderStatus', function () {
    switch(get(this, 'coderStatus')) {
      case 'active':
        return 1;
      case 'inactive':
        return 2;
      case 'termed':
        return 3;
    }
  })

});
