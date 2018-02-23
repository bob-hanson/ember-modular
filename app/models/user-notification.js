import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  title: attr('string'),
  notificationType: attr('string'),
  isActive: attr('string'),
  message: attr('string'),

  percentComplete: attr('number'),

  createdAt: attr('date'),
  updatedAt: attr('date'),

  isRecent: true,
});
