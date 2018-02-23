import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { hash } from 'rsvp';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import UserRoles from '../mixins/user-roles';

const { attr, hasMany } = DS;

export default BaseModel.extend(
  UserRoles, {
  firstName: attr('string'),
  lastName: attr('string'),
  middleName: attr('string'),
  email: attr('string'),
  phone: attr('string'),
  isSuperOrganizationUser: attr('boolean'),
  isOrganizationUser: attr('boolean'),
  avatarUrl: attr('string'),
  clientSlug: attr('string'),
  clientName: attr('string'),
  organizations: hasMany('organization'),
  clients: hasMany('client'),
  products: hasMany('product'),
  roles: hasMany('role'),

  currentApp: service(),
  userSlug: alias('id'),

  facilityPermissions: 'Admin',
  facilityStatus: 'Active',
  facilityAdminUserDetailsPath: 'facility-users.facility-user.user-details',
  facilityAdminUserEditLinkPath: 'facility-users.facility-user.edit-user',

  linkText: alias('fullName'),

  linkPath: computed('currentApp.currentVertical', function () {
    switch (get(this, 'currentApp.currentVertical')) {
      case 'facility':
        return 'facility-users.facility-user.user-details';
      case 'admin':
        return ''; // TODO - Set this
      case 'compliance':
        return '';
      case 'audit':
        return '';
    }
  }),

  fullName: computed('firstName', 'lastName', function() {
    return `${get(this, 'firstName')} ${get(this, 'lastName')}`;
  }),

  initials: computed('firstName', 'lastName', function () {
    return get(this, 'firstName').charAt(0).toUpperCase() + get(this, 'lastName').charAt(0).toUpperCase();
  }),

  getAllRelationships() {
    return hash({
      roles: get(this, 'roles'),
      products: get(this, 'products')
    });
  },

  getOrgnizationIds() {
    return get(this, 'organizations').then(this.mapOrganizations.bind(this));
  },

  mapOrganizations(organizations) {
    return organizations.map(function(organization) {
      return organization.get('id');
    });
  }

});
