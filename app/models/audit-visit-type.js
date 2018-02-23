import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  visitLabel: attr('string'),
  codeRange: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  auditServiceTypeId: attr('number'),
  auditServiceType: belongsTo('audit-service-type')
});
