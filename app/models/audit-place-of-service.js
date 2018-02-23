import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  posCode: attr('string'),
  posLabel: attr('string'),
  posDescription: attr('string'),
  posFacility: attr('boolean'),
  optionName: attr('string'),
  optionValue: attr('number')
});
