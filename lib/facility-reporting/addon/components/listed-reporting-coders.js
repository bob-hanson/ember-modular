import { computed, get, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-reporting-coders';

export default BaseComponent.extend(
  FilterList, {
  layout,
  tagName: 'ul',
  classNames: ['listed-reporting-coders'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  hasCollection: notEmpty('filteredCollection'),

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['coderName', 'coderSpecialty', 'coderStatus']);
  },

  emptyCollectionMessage: computed("", function () {
    return get(this, 'i18n').t('userAudits.auditProjects.emptyCollection');
  })

});
