import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/facility-reporting-projects';

export default BaseComponent.extend({
  layout,
  classNames: ['facility-reporting-projects'],
  classNameBindings: ['colSpan'],
  facilityAudit: service(),
  isViewingNestedViews: alias('facilityAudit.isViewingReportProjectEncounters'),

  percentageWidth: computed('isViewingNestedViews', function() {
    return get(this, 'isViewingNestedViews') ? 20 : 80;
  }),

  actions: {

    triggerFilterCollection() {

    }

  }

});
