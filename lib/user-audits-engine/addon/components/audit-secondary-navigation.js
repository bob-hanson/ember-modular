import { computed, get, set } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from 'user-audits-engine/templates/components/audit-secondary-navigation';

export default BaseComponent.extend({
  layout,
  classNameBindings: ['colSpan', 'backgroundColor'],
  padding: '2,2,2,2',
  isViewingNavigation: true,
  secondaryViewState: 'how-to',

  backgroundColor: computed('isViewingNavigation', function () {
    return get(this, 'isViewingNavigation') ? 'primary-background-color' : 'secondary-background-color';
  }),

  menuFont: computed('isViewingNavigation', function () {
    return get(this, 'isViewingNavigation') ? 'clear' : 'menu';
  }),

  toggleNavigation() {
    this.toggleProperty('isViewingNavigation', true);
  },

  setViewState(componentName) {
    set(this, 'secondaryViewState', componentName);
    this.attrs.onComponentChange(componentName);
  },

  actions: {

    triggerToggleNavMenu() {
      this.toggleNavigation();
    },

    triggerSetViewState(componentName) {
      this.setViewState(componentName);
    }

  }
});
