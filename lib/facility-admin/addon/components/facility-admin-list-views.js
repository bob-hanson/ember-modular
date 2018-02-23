import { pluralize } from 'ember-inflector';
import { get, computed } from '@ember/object';
// import { alias } from '@ember/object/computed';
import computedIndirect from 'ember-computed-indirect';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/facility-admin-list-views';

export default BaseComponent.extend({
  layout,
  classNameBindings: ['colSpan', 'isViewingNestedViews:list-column', 'pluralModel'],

  facilityAudit: service(),
  isViewingNestedViews: computedIndirect('viewPath'),

  viewPath: computed(function() {
    return `facilityAudit.isViewing${get(this, 'listViewFor').capitalize()}`;
  }),

  pluralModel: computed('listViewFor', function() {
    return pluralize(get(this, 'listViewFor'));
  }),

  modelPath: computed('pluralModel', function () {
    return `manage-lists.${get(this, 'pluralModel')}.${get(this, 'listViewFor')}`;
  }),

  detailsPath: computed('pluralModel', function () {
    return `facilityAdmin${get(this, 'listViewFor').capitalize()}DetailsPath`;
  }),

  newPath: computed('pluralModel', function () {
    return `manage-lists.${get(this, 'pluralModel')}.new-${get(this, 'listViewFor')}`;
  }),

  newText: computed('listViewFor', function () {
    return `Add ${get(this, 'listViewFor').capitalize() }`;
  }),

  bulkPath: computed('', function () {
    return `manage-lists.${get(this, 'pluralModel')}.bulk-upload`;
  }),

  tablePath: computed('pluralModel', function () {
    return `listed-${get(this, 'pluralModel')}-full`;
  }),

  percentageWidth: computed('isViewingNestedViews', function () {
    return get(this, 'isViewingNestedViews') ? 20 : 80;
  })

});
