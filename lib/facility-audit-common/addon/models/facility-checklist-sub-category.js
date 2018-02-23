import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { alias } from '@ember/object/computed';
import { get, computed } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default BaseModel.extend({
  categoryName: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  facilityAdminChecklistSubcategoryPath: 'audit-settings.checklists.sub-categories.sub-category.sub-category-details',
  facilityAdminChecklistSubcategoryEditPath: 'audit-settings.checklists.sub-categories.sub-category.edit-sub-category',

  subcategorySlug: alias('id'),
  formHeader: alias('categoryName'),

  activePath: computed(function () {
    return `sub-categories/${get(this, 'subcategorySlug')}/`;
  }),

  client: belongsTo('client'),
  facilityChecklistTemplates: hasMany('facility-checklist-template')

});
