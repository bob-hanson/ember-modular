import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { ifThenElseWithValues } from 'ember-macaroni';
import { alias } from '@ember/object/computed';
import { computed, get } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default BaseModel.extend({
  categoryName: attr('string'),
  defaultTemplateText: attr('string'),
  isListed: attr('boolean'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  facilityAdminChecklistCategoryPath: 'audit-settings.checklists.categories.category.category-details',
  facilityAdminChecklistCategoryEditPath: 'audit-settings.checklists.categories.category.edit-category',
  facilityAdminChecklistCategoryTemplatesPath: 'audit-settings.checklists.categories.category.templates',
  facilityAdminChecklistCategorySortPath: 'audit-settings.checklists.sort-categories.sort-category.sort-templates',

  linkText: alias('categoryName'),

  categorySlug: alias('id'),
  formHeader: alias('categoryName'),
  isListedReadable: ifThenElseWithValues('isListed', 'Yes', 'No'),

  activePath: computed(function () {
    return `categories/${get(this, 'categorySlug')}/`;
  }),

  categoryDetailsActivePath: computed(function () {
    return `${get(this, 'activePath')}category-details`;
  }),

  categoryTemplateActivePath: computed(function () {
    return `${get(this, 'activePath')}templates`;
  }),

  client: belongsTo('client'),
  facilityChecklistTemplates: hasMany('facility-checklist-template')

});
