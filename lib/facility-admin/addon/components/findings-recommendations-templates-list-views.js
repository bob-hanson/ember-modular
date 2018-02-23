import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/findings-recommendations-templates-list-views';

export default BaseComponent.extend({
  layout,
  classNames: ['findings-recommendations-categories-list-views'],
  classNameBindings: ['colSpan', 'isViewingFindingsRecommendationTemplate:list-column'],
  facilityAudit: service(),
  isViewingFindingsRecommendationTemplate: alias('facilityAudit.isViewingFindingsRecommendationTemplate'),
  percentageWidth: ifThenElseWithValues('isViewingFindingsRecommendationTemplate', 20, 60)
});
