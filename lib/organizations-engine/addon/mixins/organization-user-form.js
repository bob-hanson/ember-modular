import { notEmpty, not, and } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  selectedOrganization: null,
  firstName: null,
  lastName: null,
  userEmail: null,
  selectedOrganizationIds: null,

  formProperties: null,

  touchables: [
    'organizationIsTouched',
    'firstNameIsTouched',
    'lasttNameIsTouched',
    'userEmailIsTouched'
  ],

  hasOrganizations: notEmpty('selectedOrganizationIds'),
  blankOrganization: not('hasOrganizations'),
  hasFirstName: notEmpty('firstName'),
  blankFirstName: not('hasFirstName'),
  hasLastName: notEmpty('lastName'),
  blankLastName: not('hasLastName'),
  hasUserEmail: notEmpty('userEmail'),
  blankUserEmail: not('hasUserEmail'),

  organizationIsInvalid: and('blankOrganization', 'organizationIsTouched'),
  organizationIsValid: not('organizationIsInvalid'),
  firstNameIsInvalid: and('blankFirstName', 'firstNameIsTouched'),
  firstNameIsValid: not('firstNameIsInvalid'),
  lastNameIsInvalid: and('blankLastName', 'lasttNameIsTouched'),
  lastNameIsValid: not('lastNameIsInvalid'),
  userEmailIsInvalid: and('blankUserEmail', 'userEmailIsTouched'),
  userEmailIsValid: not('userEmailIsInvalid'),

  allRequiredFieldsAreMet: and(
    'hasOrganizations',
    'hasFirstName',
    'hasLastName',
    'hasUserEmail')

});
