import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import DS from 'ember-data';

const { UnauthorizedError, ForbiddenError } = DS;

export default Route.extend({
  currentSession: service(),
  currentApp: service(),
  repository: service(),
  toast: service('toast-message'),

  beforeModel(transition) {
    get(this, 'currentSession').setupSessionObjects();
    if (get(this, 'currentSession.isNotValid')) {
      transition.abort();
    }
  },

  model() {
    return get(this, 'currentSession.currentSessionUser');
  },

  afterModel(sessionUser, transition) {
    return sessionUser.get('roles')
                      .then(this.finishAppBoot.bind(this, sessionUser, transition));
  },

  finishAppBoot(sessionUser, transition, userRoles) {
    this.setupHashChangeListener();
    this.setupCurrentApp(sessionUser);
    sessionUser.setUserRoles(userRoles);
    sessionUser.checkForAdminAccess();
    this.checkForRootUrl(transition);
    get(this, 'currentApp').setUserMenuText();
    get(this, 'currentApp').set('sessionUser', sessionUser);
    return sessionUser;
  },

  checkForRootUrl(transition) {
    var target = transition.targetName;
    if (target === 'index') {
      this.setDefaultLandingPage(transition);
    } else {
      this.transitionTo(target);
    }
  },

  setupCurrentApp(sessionUser) {
    get(this, 'currentApp').setProperties({
      sessionUser: sessionUser,
      availableProducts: get(this, 'currentSession.currentAvailableProducts'),
      availableRoles: get(this, 'currentSession.currentAvailableRoles'),
      defaultLandingPage: 'organizations'
    });
  },

  setDefaultLandingPage() {
    var defaultRoute = get(this, 'currentApp.defaultLandingPage');
    defaultRoute ? this.transitionTo(defaultRoute) : this.transitionTo('admin.index');
  },

  setupHashChangeListener() {
    window.onhashchange = this.routeChanged;
  },

  routeChanged(event) {
    document.cookie = `hyspaRouteHash=${event.newURL}`;
  },

  deactivate() {
    get(this, 'currentSession').deleteCookie('hyspaRouteHash');
    get(this, 'currentApp').removeEventListeners();
  },

  actions: {

    error(error, transition) {
      if (error instanceof UnauthorizedError) {
        // console.log('in app route');
        window.location.href = "/app";
        return false;
      }
      if (error instanceof ForbiddenError) {
        get(this, 'toast').errorToast('You are unauthorized');
        transition.abort();
        return true;
      }
    }

  }

});
