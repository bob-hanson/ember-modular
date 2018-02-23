import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { alias } from '@ember/object/computed';
import { get, computed } from '@ember/object';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  shortDescription: attr('string'),
  longDescription: attr('string'),
  isActive: attr('boolean'),
  categoryName: attr('string'),
  subCategoryName: attr('string'),
  keyFindingCategoryId: attr('number'),
  keyFindingSubCategoryId: attr('number'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  sortOrder: attr('number'),
  formHeader: alias('shortDescription'),
  templateSlug: alias('id'),

  facilityAdminKeyFindingTemplatePath: 'audit-settings.findings-recommendations.templates.template.template-details',
  facilityAdminKeyFindingTemplateEditPath: 'audit-settings.findings-recommendations.templates.template.edit-template',

  activePath: computed(function () {
    return `templates/${get(this, 'templateSlug')}/`;
  }),

  facilityKeyFindingCategory: belongsTo('facility-key-finding-category'),
  facilityKeyFindingSubCategory: belongsTo('facility-key-finding-sub-category'),
  client: belongsTo('client')
});
