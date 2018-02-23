import BaseModel from 'hyspa-base-components/models/base-model';
import DS from 'ember-data';

const { attr } = DS;

export default BaseModel.extend({
  icd10PcsCode: attr('string'),
  icd10PcsCodeFullDescription: attr('string'),
  icd10PcsCodeShortDescription: attr('string'),
  validity: attr('number'),
  codeStatus: attr('number'),
  optionName: attr('string'),
  optionValue: attr('number')
});
