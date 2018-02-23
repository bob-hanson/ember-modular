import EmberObject, { set } from '@ember/object';
import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/listed-audit-projects-full';

export default ContentView.extend(
  FilterList, {
  layout,
  classNames: ['audit-projects-full'],
  classNameBindings: ['colSpan'],
  filteredProjectType: null,

  filterProperties: null,
  currentCollection: alias('currentProjects'),
  filteredProjects: alias('filteredCollection'),

  auditProjectTypeOptions: null,

  initComponent() {
    this.setProjectTypeOptions();
    this.setFilteredCollection();
    this.setDefaults();
  },

  setDefaults() {
    set(this, 'filterProperties', ['coderName', 'dueDate', 'projectName']);
  },

  setProjectTypeOptions() {
    set(this, 'auditProjectTypeOptions', [
      EmberObject.create({ optionName: 'Audit', optionValue: 'audit'}),
      EmberObject.create({ optionName: 'QA', optionValue: 'qa'}),
    ]);
  },

  filterAuditType(filterValue) {
    this.attrs.projectFilterAction(filterValue);
  },

  actions: {

    triggerAuditTypeSelect(auditType) {
      this.filterAuditType(auditType);
    }

  }

});
