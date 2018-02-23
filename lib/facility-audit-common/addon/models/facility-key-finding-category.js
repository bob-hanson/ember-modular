import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';
import { alias } from '@ember/object/computed';
import { computed, get } from '@ember/object';

const { attr, belongsTo, hasMany } = DS;

export default BaseModel.extend({
  categoryName: attr('string'),
  defaultTemplateText: attr('string'),
  optionName: attr('string'),
  optionValue: attr('number'),
  isFullyLoaded: attr('boolean'),
  facilityAdminFindingsRecommendationCategoryPath: 'audit-settings.findings-recommendations.categories.category.category-details',
  facilityAdminFindingsRecommendationCategoryEditPath: 'audit-settings.findings-recommendations.categories.category.edit-category',

  linkText: alias('categoryName'),

  categorySlug: alias('id'),
  formHeader: alias('categoryName'),

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
  facilityKeyFindingTemplates: hasMany('facility-key-finding-template')

});
