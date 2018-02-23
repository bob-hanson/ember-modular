import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  serviceLabel: attr('string'),
  isInpatient: attr('boolean'),
  isTimeSensitive: attr('boolean'),
  optionName: attr('string'),
  optionValue: attr('number')
});
