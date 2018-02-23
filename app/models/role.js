import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  title: attr('string'),
  isAuditManager: attr('string')
});
