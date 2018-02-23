import DS from 'ember-data';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { joinWith } from 'ember-macaroni';
import { inject as service } from '@ember/service';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  currentApp: service(),
  firstName: attr('string'),
  lastName: attr('string'),
  middleName: attr('string'),
  email: attr('string'),
  phoneNumber: attr('string'),
  notes: attr('string'),
  accessLevel: attr('string'),
  isActive: attr('boolean'),
  title: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),

  userSlug: alias('id'),
  fullName: joinWith(' ', 'firstName', 'lastName'),
  formHeader: alias('fullName'),

  linkText: alias('fullName'),
  linkPath: alias('facilityAdminUserDetailsPath'),

  activePath: computed('userSlug', function () {
    return `facility-users/${get(this, 'userSlug')}/`;
  }),

  userDetailsActivePath: computed(function () {
    return `${get(this, 'activePath')}user-details`;
  }),

  facilityAdminUserDetailsPath: 'facility-users.facility-user.user-details',
  facilityAdminUserEditLinkPath: 'facility-users.facility-user.edit-user',
  facilityAdminResetUserLinkPath: 'facility-users.facility-user.reset-password',

  userStatus: computed('isActive', function() {
    get(this, 'isActive') ? 'active' : 'inactive';
  }),

  statusIcon: computed('userStatus', function () {
    switch (get(this, 'userStatus')) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'inactive';
    }
  }),

  statusColor: computed('userStatus', function () {
    switch (get(this, 'userStatus')) {
      case 'active':
        return 'success';
      case 'inactive':
        return 'inactive';
    }
  }),

  statusSort: computed('userStatus', function () {
    switch (get(this, 'userStatus')) {
      case 'active':
        return 1;
      case 'inactive':
        return 2;
    }
  })

});
