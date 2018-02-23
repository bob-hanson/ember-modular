import EmberObject, { setProperties, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-facility-projects-full';

export default ContentView.extend(
  FilterList, {
  layout,
  classNames: ['listed-facility-projects-full'],
  filterValue: null,
  filterProperties: null,
  auditProjectTypeOptions: null,

  currentCollection: alias('currentProjects'),
  filteredProjects: alias('filteredCollection'),

  initComponent() {
    this.setFilteredCollection();
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      auditProjectTypeOptions: [
        EmberObject.create({ optionName: 'Audit', optionValue: 'audit'}),
        EmberObject.create({ optionName: 'QA', optionValue: 'qa'})
      ],
      filterProperties: ['coderName', 'endDate', 'projectName', 'coderSpecialty']
    });
  },

  flushFilterValue() {
    set(this, 'filterValue', null);
  },

  actions: {
    triggerAuditTypeSelect() {
      this.flushFilterValue();
    }
  }

});
