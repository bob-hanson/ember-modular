import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/findings-recommendations-categories-list-views';

export default BaseComponent.extend({
  layout,
  classNames: ['findings-recommendations-categories-list-views'],
  classNameBindings: ['colSpan', 'isViewingFindingsRecommendationCategory:list-column'],
  facilityAudit: service(),
  isViewingFindingsRecommendationCategory: alias('facilityAudit.isViewingFindingsRecommendationCategory'),
  percentageWidth: ifThenElseWithValues('isViewingFindingsRecommendationCategory', 20, 60)
});
