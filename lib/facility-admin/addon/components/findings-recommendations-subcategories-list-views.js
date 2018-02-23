import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/findings-recommendations-subcategories-list-views';

export default BaseComponent.extend({
  layout,
  classNames: ['findings-recommendations-subcategories-list-views'],
  classNameBindings: ['colSpan', 'isViewingFindingsRecommendationSubcategory:list-column'],
  facilityAudit: service(),
  isViewingFindingsRecommendationSubcategory: alias('facilityAudit.isViewingFindingsRecommendationSubcategory'),
  percentageWidth: ifThenElseWithValues('isViewingFindingsRecommendationSubcategory', 20, 60)
});
