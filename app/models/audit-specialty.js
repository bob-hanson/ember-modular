import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  code: attr('string'),
  description: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number')
});
