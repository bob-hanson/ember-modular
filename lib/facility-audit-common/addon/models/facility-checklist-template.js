import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { alias } from '@ember/object/computed';
import { get, computed } from '@ember/object';

const { attr, belongsTo } = DS;

export default BaseModel.extend({
  shortDescription: attr('string'),
  longDescription: attr('string'),
  isActive: attr('boolean'),
  commentTrigger: attr('string'),
  categoryName: attr('string'),
  subCategoryName: attr('string'),
  facilityChecklistCategoryId: attr('number'),
  facilityChecklistSubCategoryId: attr('number'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  sortOrder: attr('number'),
  formHeader: alias('shortDescription'),
  templateSlug: alias('id'),

  facilityAdminChecklistTemplatePath: 'audit-settings.checklists.templates.template.template-details',
  facilityAdminChecklistTemplateEditPath: 'audit-settings.checklists.templates.template.edit-template',

  activePath: computed(function () {
    return `templates/${get(this, 'templateSlug')}/`;
  }),

  facilityChecklistCategory: belongsTo('facility-checklist-category'),
  facilityChecklistSubCategory: belongsTo('facility-checklist-sub-category'),
  client: belongsTo('client')
});
