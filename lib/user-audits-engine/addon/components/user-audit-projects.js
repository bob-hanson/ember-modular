import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-audits';

export default BaseComponent.extend({
  layout,
  classNames: ['user-audit-projects'],
  classNameBindings: ['colSpan'],
  filteredProjectType: 'audit',
  userAuditState: service(),

  filteredProjectsByType: computed('filteredProjectType', function() {
    return get(this, 'currentProjects').filterBy('projectType', get(this, 'filteredProjectType'));
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
