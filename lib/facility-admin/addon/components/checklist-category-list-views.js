import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias, or, and, not } from '@ember/object/computed';
import { get, computed } from '@ember/object';
// import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/checklist-category-list-views';

export default BaseComponent.extend({
  layout,
  classNames: ['checklist-category-list-views'],
  classNameBindings: ['colSpan', 'isViewingChecklistCategory:list-column'],

  facilityAudit: service(),

  isViewingChecklistCategory: alias('facilityAudit.isViewingChecklistCategory'),
  showChecklistSort: alias('facilityAudit.showChecklistSort'),
  notShowingChecklistSort: not('showChecklistSort'),
  isViewingChecklistCategoryNotSort: and('isViewingChecklistCategory', 'notShowingChecklistSort'),
  isViewingCategoryOrIsSort: or('showChecklistSort', 'isViewingChecklistCategory'),
  percentageWidth: computed('isViewingCategoryOrIsSort', function() {
    if (get(this, 'isViewingCategoryOrIsSort')) {
      if (get(this, 'showChecklistSort')) {
        return 20;
      } else {
        return 20;
      }
    } else {
      return 60;
    }
  })

});
