import { computed, get, set } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-users';

export default BaseComponent.extend(
  FilterList, {
  layout,
  classNameBindings: ['colSpan'],
  filterProperties: null,
  currentCollection: alias('currentUsers'),
  filteredUsers: alias('filteredCollection'),
  hasUsers: notEmpty('filteredUsers'),
  canEdit: true,

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['fullName']);
  },

  emptyCollectionMessage: computed("", function () {
    return get(this, 'i18n').t('admin.users.emptyCollection');
  })
});
