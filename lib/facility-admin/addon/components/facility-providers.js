import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/facility-providers';
import { set } from '@ember/object';

export default BaseComponent.extend(
  FilterList, {
    layout,
    classNameBindings: ['colSpan'],

    filterProperties: null,

    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['providerName', 'individualFacilities']);
    }
  });
