import DS from 'ember-data';
import { computed,get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  guidelineName: attr('string'),
  lastModified: attr('date'),
  isDefault: attr('boolean'),
  facilityType: attr('string'),
  guidelineNotes: attr('string'),
  guidelineFrequency: attr('string'),
  turnAroundTime: attr('string'),
  passRate: attr('string'),
  passRateThreshold: attr('string'),
  numberOfProviders: attr('number'),
  dosPerProvider: attr('string'),
  receiveRecordDate: attr('date'),
  methodOfTransfer: attr('string'),
  qaReviewInstructions: attr('string'),
  dosIdentification: attr('string'),
  dosIdentificationNotes: attr('string'),
  processInstructions: attr('string'),
  additionalInstructions: attr('string'),
  applicableSpecialties: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),

  guidelineSlug: alias('id'),

  facilityAdminGuidelineLinkPath: 'audit-settings.audit-guidelines.audit-guideline.edit-audit-guideline.edit-audit-scope',

  defaultSort: computed('isDefault', function(){
    return get(this, 'isDefault') ? 1 : 2;
  }),

  defaultStatusIcon: computed('isDefault', function() {
    return get(this, 'isDefault') ? 'active' : '';
  })

});
