import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  labelText: attr('string'),
  revenueCode: attr('string'),
  descriptionMainTerm: attr('string'),
  descriptionSubClassified: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number')
});
