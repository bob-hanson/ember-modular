import Service from '@ember/service';
import { setProperties, get, set } from '@ember/object';

export default Service.extend({
  actionPanelOpen: false,
  actionPanelExpanded: false,
  actionComponent: null,
  helpDictionary: {},
  renderedHelpCollection: null,
  loadedHelpCollections: null,

  init() {
    this._super(...arguments);
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      renderedHelpCollection: [],
      loadedHelpCollections: []
    });
  },

  openActionPanel(expandPanel) {
    set(this, 'actionPanelOpen', true);
    if (expandPanel) {
      set(this, 'actionPanelExpanded', true);
    }
  },

  closeActionPanel() {
    setProperties(this, {
      actionPanelOpen: false,
      actionPanelExpanded: false
    });
  },

  setActionComponent(actionComponentName) {
    set(this, 'actionComponent', actionComponentName);
  },

  destroyActionComponent() {
    set(this, 'actionComponent', null);
  },

  loadIntoHelpDictionary(engine, helpObject) {
    if (get(this, 'loadedHelpCollections').includes(engine)) {
      return;
    } else {
      Object.assign(get(this, 'helpDictionary'), helpObject);
      get(this, 'loadedHelpCollections').pushObject(engine);
    }
  },

  launchHelpQueue(helpKey) {
    var renderedHelpCollection = get(this, 'renderedHelpCollection');
    renderedHelpCollection.removeObject(renderedHelpCollection.findBy('key', helpKey)); // remove the help object if it already exists so it can be placed on top of queue
    renderedHelpCollection.unshiftObject({
      key: helpKey,
      message: get(this, `helpDictionary.${helpKey}`)
    });
    this.setActionComponent('hyspa-action-panel-help-queue');
    this.openActionPanel();
  },

  scrollToTop(listSelector) {
    var listElement = document.querySelector(listSelector);
    if (listElement) {
      listElement.scrollTop = 0;
    }
  }

});
