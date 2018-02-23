import { computed, get, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-reporting-projects';

export default BaseComponent.extend(
  FilterList, {
  layout,
  tagName: 'ul',
  classNames: ['listed-reporting-projects'],
  classNameBindings: ['colSpan'],

  filterProperties: null,

  hasCollection: notEmpty('filteredCollection'),

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['projectName']);
  },

  emptyCollectionMessage: computed("", function () {
    return get(this, 'i18n').t('userAudits.auditProjects.emptyCollection');
  })

});
