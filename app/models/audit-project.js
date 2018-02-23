import { alias } from '@ember/object/computed';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { hasMany, attr } = DS;

export default BaseModel.extend({
  projectName: attr('string'),
  coderName: attr('string'),
  coderSpecialty: attr('string'),
  dueDate: attr('string'),
  projectType: attr('string'),
  auditEncounters: hasMany('audit_encounter'),

  projectSlug: alias('id')
});
