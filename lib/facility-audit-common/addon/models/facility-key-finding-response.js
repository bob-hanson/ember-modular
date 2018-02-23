import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { notEmpty } from '@ember/object/computed';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  modifiedDescription: attr('string'),
  isFullyLoaded: attr('boolean'),
  isArchived: attr('boolean'),
  facilityKeyFindingTemplateId: attr('number'),
  facilityKeyFindingTemplate: belongsTo('facility-key-finding-template'),
  facilityAuditId: attr('number'),
  createdAt: attr('date'),
  facilityAudit: belongsTo('facility-audit'),
  client: belongsTo('client'),

  hasModifiedDescription: notEmpty('modifiedDescription'),
});
