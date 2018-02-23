import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  msDrg: attr('string'),
  msDrgTitle: attr('string'),
  weights: attr('number'),
  geometricLengthOfStay: attr('number'),
  arithmeticLengthOfStay: attr('number'),
  optionName: attr('string'),
  optionValue: attr('number')
});
