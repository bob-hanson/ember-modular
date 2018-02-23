import { computed, get, set } from '@ember/object';
import { alias, notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-projects';

export default BaseComponent.extend(
  FilterList, {
  layout,
  tagName: 'ul',
  classNames: ['audit-projects'],
  classNameBindings: ['colSpan'],
  userAuditState: service(),

  filterProperties: null,
  currentCollection: alias('currentProjects'),
  filteredProjects: alias('filteredCollection'),

  hasProjects: notEmpty('filteredProjects'),

  initComponent() {
    this.setDefaults();
    this.setFilteredCollection();
  },

  setDefaults() {
    set(this, 'filterProperties', ['coderName']);
  },

  emptyCollectionMessage: computed("", function () {
    return get(this, 'i18n').t('userAudits.auditProjects.emptyCollection');
  })

});
