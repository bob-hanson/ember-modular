// import Ember from 'ember';
import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  resourceName: attr('string'),
  resourceLink: attr('string'),
  resourceType: attr('string'),
  resourceFileName: attr('string'),
  resourceFileType: attr('string'),
  resourceFileSize: attr('number'),
  resourceObj: attr('object'),
  fileOverMax: null
});
