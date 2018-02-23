import Service, { inject as service } from '@ember/service';
import { computed, get, set, setProperties } from '@ember/object';
import { not } from '@ember/object/computed';
import { later } from '@ember/runloop';

export default Service.extend({
  currentSession: service(),
  store: service(),
  currentVertical: "admin",
  currentAppClass: "platform",
  currentClient: null,
  sessionUser: null,
  defaultLandingPage: null,
  currentRoute: null,
  previousRoute: null,
  currentTransitionSequence: null,
  isInFullScreenView: false,
  shouldDisplayNav: true,
  shouldNotDisplayNav: not('shouldDisplayNav'),
  isNotInFullScreenView: not('isInFullScreenView'),
  currentUserMenuTitle: '',
  supportPhoneNumber: '877.777.9963',
  documentClicked: false,
  auditBoxSourceObject: null,

  engineScope: "admin",

  init() {
    this._super(...arguments);
    setProperties(this, {
      validVideoTypes: ['mov', 'mp4', 'avi', 'flv', 'wmv', 'm4v', 'f4v'],
      validDocumentTypes: ['doc', 'docx', 'pdf', 'xls', 'xlsx', 'txt', 'ppt', 'pptx'],
      validImageTypes: ['png', 'jpg', 'gif', 'jpeg'],
      currentBreadcrumbs: []
    });
    this.setupHashWatch();
    this.setWindowHash();
  },

  removeEventListeners() {
    window.removeEventListener("hashchange", this.setWindowHash.bind(this), false);
  },

  setupHashWatch() {
    window.addEventListener("hashchange", this.setWindowHash.bind(this), false);
  },

  setWindowHash() {
    set(this, 'currentHash', window.location.hash);
  },

  // observeRouteHash: observer('Router.location.hash', function () {
  //   set(this, 'currentHash', get(this, 'Router'));
  // }),

  inLoadedRoute: computed('currentRoute', 'previousRoute', function() {
    return get(this, 'currentRoute') === get(this, 'previousRoute');
  }),

  setUserMenuText(textValue) {
    var menuTitle = textValue ? textValue : get(this, 'sessionUser.fullName');
    set(this, 'currentUserMenuTitle', menuTitle);
  },

  setCurrentClient(currentClient) {
    set(this, 'currentClient', currentClient);
  },

  onDocumentClick() {
    set(this, 'documentClicked', true);
    later(this.resetDocumentClicked.bind(this), 200);
  },

  resetDocumentClicked() {
    set(this, 'documentClicked', false);
  }

});
