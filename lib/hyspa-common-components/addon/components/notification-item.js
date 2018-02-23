import BaseComponent from 'hyspa-base-components/components/base-component';
import { computed, get } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import layout from '../templates/components/notification-item';

export default BaseComponent.extend({
  layout,

  classNames: ['notification-item'],

  hasProgress: notEmpty('notificationItem.percentComplete'),
  currentProgress: computed('notificationItem.percentComplete', function () {
    let currentProgress = Number(get(this, 'notificationItem.percentComplete'));
    if (currentProgress > 100) {
      return 100;
    } else {
      return currentProgress;
    }
  }),

  notificationIcon: computed('notificationItem.notificationType', function() {
    switch (get(this, 'notificationItem.notificationType')) {
      case 'upload':
        return 'file_upload';
      case 'download':
        return 'file_download';
      case 'complete':
        return 'check_circle';
      case 'reminder':
        return 'alarm';
      case 'error':
        return 'error_outline';
      case 'warning':
        return 'warning';
      case 'offline':
        return 'cloud_off';
      default:
        return 'sms';
    }
  }),

  actions: {

    triggerRemoveItem() {
      this.attrs.removeAction(get(this, 'notificationItem'));
    }

  }

});
