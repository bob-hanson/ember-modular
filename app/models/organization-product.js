// import Ember from 'ember';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  name: attr('string'),
  productCode: attr('string'),
  belongsTo: hasMany('organization')
});
