import { get, set, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/facility-users';

export default BaseComponent.extend(
  FilterList, {
  layout,
  classNameBindings: ['colSpan', 'isViewingNestedViews:list-column', 'facility-users'],

  facilityAudit: service(),
  isViewingNestedViews: alias('facilityAudit.isViewingUser'),

  filterProperties: null,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['fullName', 'accessLevel', 'email', 'statusSort']);
  },

  percentageWidth: computed('isViewingNestedViews', function () {
    return get(this, 'isViewingNestedViews') ? 20 : 80;
  })

});
