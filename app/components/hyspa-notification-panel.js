import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/hyspa-notification-panel';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-notification-panel'],
  classNameBindings: ['isViewingNotifications:is-viewing-active', 'isViewingMostRecentNotifications:is-viewing-recent'],

  isViewingNotifications: alias('notificationService.isViewingNotifications'),
  isViewingMostRecentNotifications: alias('notificationService.isViewingRecentNotifications'),

  activeNotifications: alias('notificationService.activeNotifications'),
  hasActiveNotifications: alias('notificationService.hasActiveNotifications'),
  recentNotifications: alias('notificationService.recentNotifications'),

  togglePanel() {
    get(this, 'notificationService').closeMostRecent();
    get(this, 'isViewingNotifications') ? get(this, 'notificationService').closeNotifications()
                                        : get(this, 'notificationService').viewNotifications();
  },

  removeNotification(currentItem) {
    get(this, 'notificationService').removeNotification(currentItem);
  },

  actions: {

    triggerTogglePanel() {
      this.togglePanel();
    },

    triggerRemoveNotification(currentItem) {
      this.removeNotification(currentItem)
    }

  }

});
