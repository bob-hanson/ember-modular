import Mixin from '@ember/object/mixin';
import { notEmpty, not, and } from '@ember/object/computed';

export default Mixin.create({

  touchables: [
    'patientNameIsTouched',
    'patientIdIsTouched',
    'facilityTypeIsTouched',
    'patientDobIsTouched'
  ],

  hasPatientName: notEmpty('currentPatientDataFormModel.patientName'),
  blankPatientName: not('hasPatientName'),
  patientNameIsInvalid: and('blankPatientName', 'patientNameIsTouched'),
  patientNameIsValid: not('patientNameIsInvalid'),

  hasPatientId: notEmpty('currentPatientDataFormModel.patientId'),
  blankPatientId: not('hasPatientId'),
  patientIdIsInvalid: and('blankPatientId', 'patientIdIsTouched'),
  patientIdIsValid: not('patientIdIsInvalid'),

  hasFacilityType: notEmpty('currentPatientDataFormModel.facilityType'),
  blankFacilityType: not('hasFacilityType'),
  facilityTypeIsInvalid: and('blankFacilityType', 'facilityTypeIsTouched'),
  facilityTypeIsValid: not('patientIdIsInvalid'),

  hasPatientDob: notEmpty('currentPatientDataFormModel.patientDob'),
  blankPatientDob: not('hasPatientDob'),
  patientDobIsInvalid: and('blankPatientDob', 'patientDobIsTouched'),
  patientDobIsValid: not('patientDobIsInvalid'),

  allRequiredFieldsAreMet: and(
    'hasPatientName',
    'hasPatientId',
    'hasFacilityType',
    'hasPatientDob'
  )

});
