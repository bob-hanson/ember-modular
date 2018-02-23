import { set } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-guidelines';

export default BaseComponent.extend(
  FilterList, {
  layout,
  classNames: ['facility-guidelines'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  facilityAudit: service(),

  hasCollection: notEmpty('filteredCollection'),

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['guidelineName', 'lastModified']);
  },

  newAuditScopePath: alias('facilityAudit.newAuditScopePath')

});
