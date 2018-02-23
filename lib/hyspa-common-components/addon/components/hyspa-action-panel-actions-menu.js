import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/hyspa-action-panel-actions-menu';

export default BaseComponent.extend({
  layout,
  classNames: ['hypsa-action-panel-actions-menu'],
  classNameBindings: ['colSpan', 'menuOpen:primary-background-color'],
  padding: '3,2,3,2',
  hyspaActionPanelService: service(),
  menuOpen: false,
  menuIcon: ifThenElseWithValues('menuOpen', 'close', 'menu'),

  toggleMenuOpen() {
    this.toggleProperty('menuOpen');
  },

  setActionComponent(componentName) {
    get(this, 'hyspaActionPanelService').setActionComponent(componentName);
  },

  actions: {
    triggerToggleActionsMenu() {
      this.toggleMenuOpen();
    },

    triggerMenuItemClicked(componentName) {
      this.setActionComponent(componentName);
    }
  }

});
