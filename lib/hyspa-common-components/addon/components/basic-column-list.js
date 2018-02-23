import BaseComponent from 'hyspa-base-components/components/base-component';
import { set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/basic-column-list';

export default BaseComponent.extend(
  FilterList, {
  layout,
  classNames: ['basic-column-list'],
  classNameBindings: ['colSpan'],
  filterProperties: null,
  showFilter: true,

  hasResults: notEmpty('filteredCollection'),
  hasLinkTextMap: notEmpty('linkTextMap'),

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['linkText']);
  }

});
