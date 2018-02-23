import { get, set, computed } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { equal } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/facility-projects';

export default BaseComponent.extend({
  layout,
  classNames: ['facility-projects'],
  classNameBindings: ['colSpan', 'isColumn:component-column'],
  filteredProjectType: 'audit',
  facilityAudit: service(),

  percentageWidth: ifThenElseWithValues('facilityAudit.isViewingFullProjectList', 100, 20),
  isColumn: equal('percentageWidth', 20),

  filteredProjectsByType: computed('filteredProjectType', function() {
    return get(this, 'currentProjects').filterBy('projectStatus', get(this, 'filteredProjectType'));
  }),

  setProjectFilter(selectedFilter) {
    set(this, 'filteredProjectType', selectedFilter);
  },

  actions: {
    triggerFilteredProjectsSelect(selectedFilter) {
      this.setProjectFilter(selectedFilter);
    }
  }

});
