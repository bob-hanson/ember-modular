import DS from 'ember-data';
import { alias } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  facilityPatientId: attr('string'),
  patientName: attr('string'),
  encounterStatus: attr('string'),
  dateOfService: attr('date'),
  encounterComments: attr('string'),
  admitDate: attr('date'),
  dischargeDate: attr('date'),
  raPaydate: attr('date'),
  facilityPosId: attr('number'),
  posCorrect: attr('boolean'),
  patientGender: attr('string'),
  patientAltId: attr('string'),
  patientDob: attr('date'),
  facilityType: attr('string'),
  typeOfServiceId: attr('string'),
  typeOfVisitId: attr('string'),
  additionalData: attr('string'),
  reportedDrg: attr('string'),
  suggestedDrg: attr('string'),
  auditedDrg: attr('string'),
  procedureComments: attr('string'),
  facilityProjectId: attr('number'),
  facilityProviderId: attr('number'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  client: belongsTo('client'),

  linkPath: 'projects.project.project-details.project-encounters.project-encounter.edit-encounter.patient-data',
  isFetched: false,
  initialChecklistResponsesLoaded: false,

  encounterSlug: alias('id')



});
