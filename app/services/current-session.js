import Service, { inject as service } from '@ember/service';
import { computed, get, set } from '@ember/object';
import { alias, equal } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import config from '../config/environment';

export default Service.extend({
  cookies: service(),
  currentApp: service(),
  fixtures: service(),
  store: service(),
  toast: service('toast-message'),
  indexedDb: service(),
  isNotValid: false,
  apiProtocol: 'https://',
  apiHost: config.APP.apiHost,
  apiVersion: 'v2',
  logoutUrl: config.APP.logoutUrl,
  apiUrl: alias('apiHost'),
  metaData: '',
  currentEnvironment: 'development',
  currentAssetPath: '/',
  currentEngineScope: '',
  isDevelopment: equal('currentEnvironment', 'development'),
  isQA: equal('currentEnvironment', 'qa'),
  isUAT: equal('currentEnvironment', 'uat'),
  isProduction: equal('currentEnvironment', 'production'),
  hasIndexedDb: false,

  logoutPageUrl: "/logout",

  assetUrl: computed('currentEnvironment', function () {
    switch (get(this, 'currentEnvironment')) {
      case 'development':
        return 'http://localhost:4200/';
      case 'qa':
        return "***";
      case 'production':
        return "***";
      default:
        return '/';
    }
  }),

  auditManagerBaseUrl: computed('', function() {
    if (get(this, 'isDevelopment')) {
      return "***";
    } else {
      return window.location.origin;
    }
  }),

  clearUserAccessToken: computed('apiHost', function () {
    return get(this, 'apiHost') + '/logout';
  }),

  authToken: computed('cookies', function () {
    return 'Bearer ' + get(this, 'cookies').read('accessToken');
  }),

  setupSessionObjects() {
    this.setEnvironment();
    this.setStorageTools();
    this.setMetaData();
    this.setSessionUser();
    this.setRootClient();
    this.setAvailableProducts();
    this.setAvailableRoles();
  },

  setEnvironment() {
    set(this, 'currentEnvironment', config.environment);
  },

  setStorageTools() {
    get(this, 'indexedDb')
    .setup()
    .then(
      this.handleIndexedDbSetup.bind(this),
      this.handleIndexedDbSetupFailure.bind(this)
    );
  },

  handleIndexedDbSetup() {
    set(this, 'hasIndexedDb', true);
  },

  handleIndexedDbSetupFailure() {
    get(this, 'toast').errorToast('Your using an out of date browser. For better securtiy and performance, please consider updating.');
    set(this, 'hasIndexedDb', false);
  },

  setMetaData() {
    if(get(this, 'isDevelopment')) {
      set(this, 'metaData', {
        user: this.getUserJSON(),
        root_client: this.getClientJSON(),
        products: this.getProductsJSON(),
        roles: this.getRolesJSON(),
        apiHost: this.getApiHostMetaDataContent(),
        apiRoot: this.getApiRootMetaDataContent(),
        logoutUrl: get(this, 'logoutUrl')
      });
    } else {
      set(this, 'metaData', {
        user: this.getUserJSON(),
        root_client: this.getClientJSON(),
        products: this.getProductsJSON(),
        roles: this.getRolesJSON(),
        apiVersion: this.getApiVersionMetaDataContent(),
        apiHost: this.getApiHostMetaDataContent(),
        apiRoot: this.getApiRootMetaDataContent(),
        logoutUrl: this.getApiLogoutMetaDataContent()
      });
    }

  },

  setSessionUser() {
    var sessionUser = get(this, 'store').push(get(this, 'metaData').user);
    set(this, 'currentSessionUser', sessionUser);
  },

  setRootClient() {
    var rootClient = get(this, 'store').push(get(this, 'metaData').root_client);
    set(this, 'currentClient', rootClient);
  },

  setAvailableProducts() {
    var products = get(this, 'store').push(get(this, 'metaData').products);
    set(this, 'currentAvailableProducts', products);
  },

  setAvailableRoles() {
    var roles = get(this, 'store').push(get(this, 'metaData').roles);
    set(this, 'currentAvailableRoles', roles);
  },

  /* istanbul ignore else  */
  setApiVersion() {
    var apiVersion = get(this, 'metaData').apiVersion;
    if (isPresent(apiVersion)) {
      set(this, 'apiVersion', apiVersion);
    }
  },

  /* istanbul ignore else  */
  setApiHost() {
    var apiHost = get(this, 'metaData').apiHost;
    if (isPresent(apiHost)) {
      set(this, 'apiHost', apiHost);
    }
  },

  setLogoutUrl() {
    var logoutUrl = get(this, 'metaData').logoutUrl;
    if (isPresent(logoutUrl)) {
      set(this, 'logoutUrl', logoutUrl);
    }
  },

  /* istanbul ignore else  */
  getUserMetaDataContent() {
    if (document.getElementsByName("user")[0]) {
      return document.getElementsByName("user")[0].content;
    }
  },

  getClientMetaDataContent() {
    if (document.getElementsByName("root_client")[0]) {
      return document.getElementsByName("root_client")[0].content;
    }
  },

  getProductsMetaDataContent() {
    if (document.getElementsByName("products")[0]) {
      return document.getElementsByName("products")[0].content;
    }
  },

  getRolesMetaDataContent() {
    if (document.getElementsByName("roles")[0]) {
      return document.getElementsByName("roles")[0].content;
    }
  },

  getApiVersionMetaDataContent() {
    if (document.getElementsByName("apiVersion")[0]) {
      return document.getElementsByName("apiVersion")[0].content;
    } else {
      return get(this, 'apiVersion');
    }
  },

  getApiHostMetaDataContent() {
    if (document.getElementsByName("apiHost")[0]) {
      return this.setProtocol(document.getElementsByName("apiHost")[0].content);
    } else {
      return get(this, 'apiHost');
    }
  },

  getApiRootMetaDataContent() {
    if (document.getElementsByName("apiRoot")[0]) {
      return this.setRoot(document.getElementsByName("apiRoot")[0].content);
    } else {
      return get(this, 'apiRoot');
    }
  },

  setRoot(apiRoot) {
    set(this, 'apiRoot', apiRoot);
  },

  setProtocol(apiHost) {
    if (apiHost.includes('http')) {
      set(this, 'apiHost', apiHost);
    } else {
      set(this, 'apiHost', get(this, 'apiProtocol') + apiHost);
    }
  },

  getApiLogoutMetaDataContent() {
    if (document.getElementsByName("logoutUrl")[0]) {
      return document.getElementsByName("logoutUrl")[0].content;
    } else {
      return get(this, 'logoutUrl');
    }
  },

  getUserJSON() {
    return JSON.parse(this.getUserMetaDataContent());
  },

  getClientJSON() {
    return JSON.parse(this.getClientMetaDataContent());
  },

  getProductsJSON() {
    return JSON.parse(this.getProductsMetaDataContent());
  },

  getRolesJSON() {
    return JSON.parse(this.getRolesMetaDataContent());
  },

  checkFeatureFlags(transition) {
    if (config.APP.featuresOff && config.APP.inactiveRoutes.includes(transition.targetName.split('.')[0])) {
      transition.abort();
    }
  },

  deleteCookie(name, options = {}) {
    get(this, 'cookies').clear(name, options);
  },

  logout() {
    window.location.href = "/app";
    // window.location.replace(`${get(this, 'apiRoot')}logout`);
  }
});
