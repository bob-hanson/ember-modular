// Example usage
// this.get('toast').insertToast({ toastMessage: 'My Message' });
// toastSize [ small, small-icon, regular, regular-icon (default)   ]

import Service from '@ember/service';
import { get, set } from '@ember/object';
import { later } from '@ember/runloop';

export default Service.extend({

  userOptions: null,
  options() {
    return {
      toastIcon: 'check_circle',
      toastTitle: 'Success!',
      toastType: 'success',
      toastMessage: 'You need a message',
      toastTimer: 2500
    };
  },

  successToast(message, toastSize = 'regular-icon') {
    this.insertToast({
      toastIcon: 'check_circle',
      toastTitle: 'Success!',
      toastType: 'success',
      toastMessage: message,
      toastSize: toastSize
    });
  },

  generalToast(message, toastSize = 'regular-icon') {
    this.insertToast({
      toastIcon: 'stars',
      toastTitle: 'Notice',
      toastType: 'general',
      toastMessage: message,
      toastSize: toastSize
    });
  },

  infoToast(message, toastSize = 'regular-icon') {
    this.insertToast({
      toastIcon: 'info',
      toastTitle: 'Info',
      toastType: 'info',
      toastMessage: message,
      toastSize: toastSize
    });
  },

  warningToast(message, toastSize = 'regular-icon') {
    this.insertToast({
      toastIcon: 'warning',
      toastTitle: 'Warning',
      toastType: 'warning',
      toastMessage: message,
      toastSize: toastSize
    });
  },

  errorToast(message, toastSize = 'regular-icon') {
    this.insertToast({
      toastIcon: 'error',
      toastTitle: 'Error!',
      toastType: 'error',
      toastMessage: message,
      toastSize: toastSize
    });
  },

  insertToast(options) {
    this.setToast(options);
    later(this, this.viewToast, 10);
    later(this, this.removeToast, get(this, 'userOptions').toastTimer);
  },

  setToast(options) {
    var page = document.getElementById('app-content');
    set(this, 'userOptions', Object.assign(this.options(), options));
    if (page) {
      page.insertAdjacentHTML('beforeend', this.toastHtml());
    }
  },

  viewToast() {
    var toast = document.getElementById('toast');
    if (toast) {
      toast.classList.add("view");
    }
  },

  removeToast() {
    var toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove("view");
      later(this, function () {
        toast.remove();
      }, 650);
    }
  },

  isToastIcon(userOptions) {
    return userOptions.toastType === 'regular-icon' || userOptions.toastType === 'small-icon';
  },

  getToastHeader(userOptions) {
    return this.isToastIcon(userOptions) ? '<i class="material-icons md-48">' + userOptions.toastIcon + '</i>' : '';
  },

  toastHtml() {
    var userOptions = get(this, 'userOptions');
    return '<div id="toast" class="toast-message ' + userOptions.toastType + ' ' + userOptions.toastSize + '">' +
           '<i class="material-icons md-48">' + userOptions.toastIcon + '</i>' +
           '<h2>' + userOptions.toastTitle + '</h2>' +
           '<p>' + userOptions.toastMessage + '</p>' +
           '</div>';
  }

});
