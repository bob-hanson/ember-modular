import { alias } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/apps-menu';

export default BaseComponent.extend({
  layout,
  classNames: ['apps-menu'],
  isViewingBubbleMenu: false,
  sessionUser: alias('currentApp.sessionUser'),
  userProducts: alias('sessionUser.products'),

  toggleBubbleMenu() {
    this.toggleProperty('isViewingBubbleMenu');
  },

  actions: {

    triggerToggleMenu() {
      this.toggleBubbleMenu();
    }

  }
});
