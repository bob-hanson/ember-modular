import DS from 'ember-data';
import { alias } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  name: attr('string'),
  role: attr('string'),
  notYetStarted: attr('number'),
  inProgress: attr('number'),
  qaReady: attr('number'),
  qaInProgress: attr('number'),
  total: attr('number'),

  resourceSlug: alias('id'),
  linkText: alias('name'),
  linkPath: 'pending-tasks.resources.resource.resource-audits',

});
