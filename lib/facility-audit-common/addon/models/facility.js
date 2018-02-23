import DS from 'ember-data';
import { isPresent } from '@ember/utils';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  isActive: false,
  facilityName: attr('string'),
  facilityState: attr('string'),
  facilityCity: attr('string'),
  facilityAddress1: attr('string'),
  facilityAddress2: attr('string'),
  facilityPhone: attr('string'),
  facilityZip: attr('string'),
  facilityProviderIds: attr(),
  facilityCoderIds: attr(),
  optionName: attr('string'),
  optionValue: attr('number'),

  facilityProviders: hasMany('facility-provider'),
  facilityCoders: hasMany('facility-coder'),

  isFullyLoaded: attr('boolean'),

  facilitySlug: alias('id'),
  formHeader: alias('facilityName'),

  fullAddress: computed('facilityName', 'facilityAddress1', function () {
    return `${get(this, 'facilityAddress1')}, ${get(this, 'facilityCity')}, ${get(this, 'facilityState')} ${get(this, 'facilityZip')}`
  }),

  cityStateZip: computed('facilityName', 'facilityAddress1', function () {
    return `${get(this, 'facilityCity')}, ${get(this, 'facilityState')} ${get(this, 'facilityZip')}`
  }),

  customRegex() {
    return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  },

  formattedPhone: computed('facilityPhone', function () {
    var phone = get(this, 'facilityPhone');
    if (isPresent(phone)) {
      return phone.replace(this.customRegex(), "($1) $2-$3");
    } else {
      return '';
    }
  }),

  linkText: alias('facilityName'),
  facilityAdminFacilityDetailsPath: 'manage-lists.facilities.facility.facility-details',
  facilityAdminFacilityEditLinkPath: 'manage-lists.facilities.facility.edit-facility',
  facilityAdminFacilityProvidersPath: 'manage-lists.facilities.facility.facility-providers',
  facilityAdminFacilityCodersPath: 'manage-lists.facilities.facility.facility-coders',

  activePath: computed(function() {
    return `facilities/${get(this, 'facilitySlug')}/`;
  }),

  facilityDetailsActivePath: computed(function () {
    return `${get(this, 'activePath')}facility-details`;
  }),

  facilityProvidersActivePath: computed(function () {
    return `${get(this, 'activePath')}facility-providers`;
  }),

  facilityCodersActivePath: computed(function () {
    return `${get(this, 'activePath')}facility-coders`;
  })

});
