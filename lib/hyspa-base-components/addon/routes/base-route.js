import Route from '@ember/routing/route';
import { isPresent } from '@ember/utils';
import EmberObject, { get } from '@ember/object';
import { alias, not, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  currentSession: service(),
  currentApp: service(),
  repository: service(),
  hyspaActionPanelService: service(),
  toast: service('toast-message'),
  i18n: service(),
  indexedDb: service(),

  sessionUser: alias('currentApp.sessionUser'),
  isSuperOrganizationUser: alias('sessionUser.isSuperOrganizationUser'),
  isNotSuperOrganizationUser: not('isSuperOrganizationUser'),
  isOrganizationUser: alias('sessionUser.isOrganizationUser'),
  isNotOrganizationUser: not('isOrganizationUser'),
  canAccessAdmin: or('isSuperOrganizationUser', 'isOrganizationUser'),
  cannotAccessAdmin: not('canAccessAdmin'),

  beforeModel(transition) {
    this._super(...arguments);
    this.checkFeatureFlags(transition);
    this.setPreviousRoute();
    this.setCurrentRoute(transition);
    this.setPageTitle();
    this.validateRouteAccess(transition);
  },

  validateRouteAccess() {
    // Stubbed Method.
  },

  checkFeatureFlags(transition) {
    get(this, 'currentSession').checkFeatureFlags(transition);
  },

  setCurrentRoute(transition) {
    get(this, 'currentApp').setProperties({
      'currentRoute': transition.targetName
    });
  },

  setPreviousRoute() {
    var currentRoute = get(this, 'currentApp.currentRoute');
    if (isPresent(currentRoute)) {
      get(this, 'currentApp').set('previousRoute', currentRoute);
    }
  },

  transitionToPrevious() {
    history.back();
  },

  setPageTitle() {
    var pageTitle = get(this, 'pageTitle') ? get(this, 'pageTitle') : this.formatRouteName();
    get(this, 'currentApp').set('currentPageTitle', pageTitle);
  },

  formatRouteName() {
    return get(this, 'currentApp.currentRoute').split('-')
          .map(function (s) {
            return s.charAt(0).toUpperCase() + s.slice(1);
          })
          .join(' ');
  },

  transitionToLogin() {
    window.location.replace(get(this, 'currentSession.logoutPageUrl'));
  },

  resetCurrentApp(appKey) {
    get(this, 'currentApp').set('currentVertical', appKey);
  },

  resetCurrentAppClass(appKey) {
    get(this, 'currentApp').set('currentAppClass', appKey);
    this.resetAppClass(appKey);
  },

  resetAppClass(appKey) {
    var body = document.querySelector('body');
    body.classList.remove('platform', 'compliance', 'audits');
    body.classList.add(appKey);
  },

  resetCurrentBreadcrumbs() {
    get(this, 'currentApp').set('currentBreadcrumbs', []);
  },

  addBreadcrumb(routeName, linkText, linkObject) {
    get(this, 'currentApp.currentBreadcrumbs')
        .pushObject(EmberObject.create({ routeName: routeName, linkText: linkText, linkObject: linkObject }));
  },

  removeBreadcrumb(routeName) {
    const breadcrumb = get(this, 'currentApp.currentBreadcrumbs').findBy('routeName', routeName);
    get(this, 'currentApp.currentBreadcrumbs').removeObject(breadcrumb);
  },

  displayUnauthorizedToast(message) {
    var toastMessage = message ? message : get(this, 'i18n').t('messages.generalUnauthorized');
    get(this, 'toast').errorToast(toastMessage, 'small-icon');
  },

  debugFormData(fd) {
    var pair;
    for (pair of fd.entries()) {
      console.log(pair[0]+ ', ' + pair[1]);
    }
  },

  afterTransition() {
    // Stubbed
  },

  actions: {

    didTransition() {
      this.afterTransition();
    }

  }

});
