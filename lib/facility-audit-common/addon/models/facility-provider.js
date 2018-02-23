import DS from 'ember-data';
import { computed, get } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { joinWith } from 'ember-macaroni';
import { inject as service } from '@ember/service';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  currentApp: service(),
  providerPrefix: attr('string'),
  providerFirstName: attr('string'),
  providerLastName: attr('string'),
  providerMiddleName: attr('string'),
  providerIdentifier: attr('string'),
  providerCredential: attr('string'),
  providerSpecialty: attr('string'),
  providerStatus: attr('string'),
  providerEmail: attr('string'),
  providerPhone: attr('string'),
  employmentContractDate: attr('date'),
  employmentTermDate: attr('date'),
  providerNotes: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  facilityIds: attr(),
  providerFacilities: hasMany('facility'),

  providerSlug: alias('id'),
  providerName: joinWith(' ', 'providerFirstName', 'providerLastName'),
  providerNameWithCreds: joinWith(', ', 'providerName', 'providerCredential'),
  formHeader: alias('providerName'),

  individualFacilities: computed('listedFacilities', function () {
    return isPresent(get(this, 'listedFacilities')) ? get(this, 'listedFacilities').split(",") : null;
  }),

  hasListedFacilities: notEmpty('individualFacilities'),

  linkText: alias('providerNameWithCreds'),

  linkPath: computed('currentApp.engineScope', function() {
    switch(get(this, 'currentApp.engineScope')) {
      case 'facility-admin':
        return 'manage-lists.providers.provider.provider-details';
      case 'facility-encounters':
        return '';
    }
  }),

  activePath: computed(function () {
    return `providers/${get(this, 'providerSlug')}/`;
  }),

  providerDetailsActivePath: computed(function () {
    return `${get(this, 'activePath')}provider-details`;
  }),

  providerFacilitiesActivePath: computed(function () {
    return `${get(this, 'activePath')}provider-facilities`;
  }),

  facilityAdminProviderFacilitiesPath: 'manage-lists.providers.provider.provider-facilities',
  facilityAdminProviderDetailsPath: 'manage-lists.providers.provider.provider-details',
  facilityAdminProviderEditLinkPath: 'manage-lists.providers.provider.edit-provider',

  statusColor: computed('providerStatus', function () {
    switch(get(this, 'providerStatus')) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'inactive';
    }
  }),

  statusSort: computed('providerStatus', function () {
    switch(get(this, 'providerStatus')) {
      case 'active':
        return 1;
      case 'inactive':
        return 2;
    }
  })

});
