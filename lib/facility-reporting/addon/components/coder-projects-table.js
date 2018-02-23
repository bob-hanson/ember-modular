import { get, set, observer, setProperties } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import Table from 'facility-reporting/tables/facility-reporting-coder-projects-table';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import layout from '../templates/components/coder-projects-table';

export default ContentView.extend(
  Table,
  FilterList, {
  layout,
  classNames: ['coder-projects-table'],
  classNameBindings: ['colSpan'],
  filterProperties: null,
  percentageWidth: 60,
  emptyMessage: 'No records available',

  observeCurrentCoder: observer('currentCoder', function () {
    this.setCoderProjects();
    this.setFilteredCollection();
  }),

  initComponent() {
    this.setCoderProjects();
    this.setCoderProjects();
    this.setFilteredCollection();
    this.setDefaults();
  },

  setCoderProjects() {
    var collection = get(this, 'currentProjects').filterBy('facilityCoderId', Number(get(this, 'currentCoder.id')));
    set(this, 'currentCollection', collection);
  },

  setDefaults() {
    setProperties(this, {
      filterProperties: ['coderName', 'endDate', 'projectName', 'coderSpecialty']
    });
  }

});
