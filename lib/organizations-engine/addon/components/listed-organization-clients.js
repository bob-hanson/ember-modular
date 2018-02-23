import { computed, get, set } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-organization-clients';

export default BaseComponent.extend(
  FilterList, {
  layout,
  tagName: 'ul',
  classNameBindings: ['colSpan'],
  filterProperties: null,
  currentCollection: alias('currentClients'),
  filteredClients: alias('filteredCollection'),
  hasClients: notEmpty('filteredClients'),

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['name']);
  },

  emptyCollectionMessage: computed("", function () {
    return get(this, 'i18n').t('admin.clients.emptyCollection');
  })
});
