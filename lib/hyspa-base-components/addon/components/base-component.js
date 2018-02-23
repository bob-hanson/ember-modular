import Component from '@ember/component';
import { computed, get } from '@ember/object';
import { alias, and, notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseMixin from 'hyspa-base-components/mixins/base-mixin';

export default Component.extend(
  BaseMixin, {
  currentSession: service(),
  currentApp: service(),
  store: service(),
  indexedDb: service(),
  toast: service('toast-message'),
  repository: service(),
  resizeService: service(),
  externalLinks: service(),
  i18n: service(),
  filterList: service(),
  ripple: service(),
  utilities: service(),
  notificationService: service('hyspa-notification-panel-service'),

  routeHash: alias('currentApp.currentHash'),
  hasRouteHash: notEmpty('routeHash'),
  hasActivePath: notEmpty('activePath'),
  hasHashAndPath: and('hasRouteHash', 'hasActivePath'),

  isPrimary: alias('isActivePath'),
  isActivePath: computed('routeHash', 'hasHashAndPath', function () {
    if (get(this, 'hasHashAndPath')) {
      return get(this, 'routeHash').includes(`${get(this, 'activePath')}`);
    }
  }),

  sessionUser: alias('currentApp.sessionUser'),
  isSuperOrganizationUser: alias('sessionUser.isSuperOrganizationUser'),

  testToast() {
    get(this, 'toast').errorToast('Testing the Toast', 'small-icon');
  },

  pushToBreadcrumbs(breadcrumbObject) {
    get(this, 'currentApp.currentBreadcrumbs').pushObject(breadcrumbObject);
  },

  // debugFormData(fd) {
  //   var pair;
  //   for (pair of fd.entries()) {
  //     console.log(pair[0] + ', ' + pair[1]);
  //   }
  // }

});
