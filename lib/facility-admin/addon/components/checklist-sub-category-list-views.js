import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/checklist-sub-category-list-views';

export default BaseComponent.extend({
  layout,
  classNames: ['checklist-category-list-views'],
  classNameBindings: ['colSpan', 'isViewingChecklistSubcategory:list-column'],
  facilityAudit: service(),
  isViewingChecklistSubcategory: alias('facilityAudit.isViewingChecklistSubcategory'),
  percentageWidth: ifThenElseWithValues('isViewingChecklistSubcategory', 20, 60)

});
