import Object, { get } from '@ember/object';
import ListColumn from './list-column';

export default ListColumn.extend({
  classNames: ['audit-projects'],
  classNameBindings: ['colSpan'],
  currentNavigation: null,

  initComponent() {
    this.buildNavigtion();
  },

  buildNavigtion() {
    this.set('currentNavigation', this.getNavObjects());
  },

  getNavObjects() {
    return [
      Object.create({ linkPath: '/', displayValue: 'Projects', isExternal: true, clickHandler: 'triggerNavClick' }),
      Object.create({ linkPath: '/', displayValue: 'Assign Audits', isExternal: true, clickHandler: 'triggerNavClick' }),
      Object.create({ linkPath: '/', displayValue: 'Create Project', isExternal: true, clickHandler: 'triggerNavClick'   }),
      Object.create({ linkPath: 'audit-project.audits.new-audit', displayValue: 'Create Audit', isExternal: false, clickHandler: 'triggerNavClick', currentItem: Object.create({ auditProjectSlug: 1 })  }),
      Object.create({ linkPath: 'audit-project.audits.import-claims-assign-audit', displayValue: 'Import Claims and Assign Audit', isExternal: false, clickHandler: 'triggerNavClick', currentItem: Object.create({ auditProjectSlug: 1 })  }),
    ]
  },

  toggleNavState(currentNavItem) {
    get(this, 'currentNavigation').setEach('isSelected', false);
    currentNavItem.set('isSelected', true);
  },

  actions: {

    triggerNavClick(currentNavItem) {
      this.toggleNavState(currentNavItem);
    }

  }


});
