import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  posName: attr('string'),
  posCode: attr('string'),
  isFullyLoaded: attr('boolean'),

  facilityEncounter: belongsTo('facility-encounter')

});
