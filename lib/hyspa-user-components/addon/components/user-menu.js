import { get, set, observer } from '@ember/object';
import { alias, and } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-menu';

export default BaseComponent.extend({
  layout,
  classNames: ['user-menu'],
  isViewingBubbleMenu: false,
  logoutUrl: alias('currentSession.logoutUrl'),
  wasDocumentClicked: alias('currentApp.documentClicked'),
  documentClickAndMenuOpen: and('isViewingBubbleMenu', 'wasDocumentClicked'),

  watchDocumentClicked: observer('wasDocumentClicked', function() {
    if (get(this, 'documentClickAndMenuOpen')) {
      this.toggleBubbleMenu();
    }
  }),

  click(event) {
    event.stopPropagation();
    this.toggleBubbleMenu();
  },

  toggleBubbleMenu() {
    this.toggleProperty('isViewingBubbleMenu');
  },

  actions: {

    triggerNotificationPanel() {
      set(this, 'isViewingBubbleMenu', false);
      get(this, 'notificationService').viewNotifications();
    }

  }

});
