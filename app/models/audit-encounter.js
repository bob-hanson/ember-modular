import { alias } from '@ember/object/computed';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  dos: attr('string'),
  patientName: attr('string'),
  patientId: attr('string'),
  encounterStatus: attr('string'),
  encounterProgressPercentage: attr('string'),
  auditSlug: alias('id')
});
