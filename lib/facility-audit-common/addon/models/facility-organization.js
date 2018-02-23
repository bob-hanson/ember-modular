import DS from 'ember-data';
import { alias } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  organizationName: attr('string'),
  organizationIdentifier: attr('string'),
  organizationNotes: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),

  organizationSlug: alias('id'),

  linkText: alias('organizationName'),
  linkPath: 'manage-lists.organizations.organization.organization-details',
  facilityAdminOrganizationEditLinkPath: 'manage-lists.organizations.organization.edit-organization',
  facilityAdminOrganizationDetailsPath: 'manage-lists.organizations.organization.organization-details'
});
