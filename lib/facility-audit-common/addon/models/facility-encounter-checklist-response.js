import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { notEmpty } from '@ember/object/computed';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  modifiedDescription: attr('string'),
  userSelection: attr('string'),
  isUserGenerated: attr('boolean'),
  isFullyLoaded: attr('boolean'),
  isArchived: attr('boolean'),
  facilityChecklistTemplateId: attr('number'),
  facilityChecklistTemplate: belongsTo('facility-checklist-template'),
  facilityEncounterId: attr('number'),
  createdAt: attr('date'),
  facilityEncounter: belongsTo('facility-encounter'),
  client: belongsTo('client'),

  hasModifiedDescription: notEmpty('modifiedDescription'),
});
