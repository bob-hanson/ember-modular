import DS from 'ember-data';
import { computed, get, getWithDefault } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  payerName: attr('string'),
  payerIdentifier: attr('string'),
  city: attr('string'),
  state: attr('string'),
  zip: attr('string'),
  feeSchedule: attr('string'),
  regionIdentifier: attr('string'),
  isFullyLoaded: attr('boolean'),

  payerSlug: alias('id'),

  hasFeeSchedule: notEmpty('feeSchedule'),

  linkText: alias('payerName'),
  formHeader: alias('payerName'),

  facilityAdminPayerDetailsPath: 'manage-lists.payers.payer.payer-detail',
  facilityAdminPayerSchedulesPath: 'manage-lists.payers.payer.payer-schedules',
  facilityAdminPayerEditLinkPath: 'manage-lists.payers.payer.edit-payer',

  activePath: computed(function () {
    return `payers/${get(this, 'payerSlug')}/`;
  }),

  payerDetailsActivePath: computed(function () {
    return `${get(this, 'activePath')}payer-detail`;
  }),

  payerSchedulesActivePath: computed(function () {
    return `${get(this, 'activePath')}payer-schedules`;
  }),

  payerLocation: computed('city', 'state', 'regionIdentifier', function () {
    return `${get(this, 'city')}, ${get(this, 'state')} ${getWithDefault(this, 'regionIdentifier', '')}`;
  }),

  feeScheduleStatus: computed('hasFeeSchedule', function () {
    return get(this, 'hasFeeSchedule') ? 'active' : 'inactive';
  }),

  feeColor: computed('hasFeeSchedule', function () {
    return get(this, 'hasFeeSchedule') ? 'success' : 'inactive';
  }),

  feeSort: computed('hasFeeSchedule', function () {
    return get(this, 'hasFeeSchedule');
  })

});
