import BaseComponent from 'hyspa-base-components/components/base-component';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/audit-guidelines';

export default BaseComponent.extend({
  layout,
  classNames: ['audit-guidelines'],
  classNameBindings: ['colSpan', 'isViewingNestedViews:list-column'],

  facilityAudit: service(),
  isViewingNestedViews: alias('facilityAudit.isViewingGuideLine'),
  isNotCreatingGuideLine: alias('facilityAudit.isNotCreatingGuideLine'),

  percentageWidth: computed('isViewingNestedViews', function() {
    return get(this, 'isViewingNestedViews') ? 20 : 80;
  }),

  actions: {

    triggerFilterCollection() {

    }

  }
});
