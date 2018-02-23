import Service, { inject as service } from '@ember/service';
import { computed, get, setProperties, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

export default Service.extend({
  resizeService: service(),
  isViewingNotifications: false,
  isViewingRecentNotifications: false,
  notificationQueue: null,

  init() {
    this._super(...arguments);
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      notificationQueue: []
    });
  },

  activeNotifications: computed('notificationQueue.{@each.isActive,length}', function () {
    return get(this, 'notificationQueue').filterBy('isActive', true);
  }),

  hasActiveNotifications: notEmpty('activeNotifications'),

  recentNotifications: computed('notificationQueue.{@each.isRecent,length}', function() {
    return get(this, 'notificationQueue').filterBy('isRecent', true);
  }),

  viewNotifications() {
    set(this, 'isViewingNotifications', true);
  },

  closeNotifications() {
    setProperties(this, {
      isViewingNotifications: false
    });
  },

  viewMostRecent() {
    set(this, 'isViewingRecentNotifications', true);
  },

  closeMostRecent() {
    set(this, 'isViewingRecentNotifications', false);
  },

  pushNotification(userNotification) {
    setProperties(userNotification, { 'isRecent': true, 'isActive': true });
    get(this, 'notificationQueue').pushObject(userNotification);
    this.viewMostRecent();
  },

  removeNotification(notificationItem) {
    if (get(notificationItem, 'isRecent')) {
      set(notificationItem, 'isRecent', false);
    } else {
      set(notificationItem, 'isActive', false);
    }
  },

  destroyNotification() {
    set(this, 'notificationItem', null);
  }

});
