import { computed, observer, get, setProperties } from '@ember/object';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import { set } from '@ember/object';
import layout from '../templates/components/list-column';

export default BaseComponent.extend({
  layout,
  classNames: ['tabs-container'],
  classNameBindings: ['colSpan', 'verticalLayout', 'hasTabHeader'],
  selectedIndex: 0,
  tabsCollection: null,
  _tabs: null,
  _tabPanels: null,
  vertical: false,

  hasTabHeader: computed('tabHeader', function() {
    return isPresent(get(this, 'tabHeader'));
  }),

  hasContentHeader: computed('contentHeader', function() {
    return isPresent(get(this, 'contentHeader'));
  }),

  verticalLayout: computed('vertical', function() {
    return get(this, 'vertical');
  }),

  initComponent() {
    this._super(...arguments);
    this.setupInstanceProperties();
  },

  resetTabObserver: observer('tabsCollection', function() {
    this.setupInstanceProperties();
  }),

  setupInstanceProperties() {
    setProperties(this, {'_tabs': [], '_tabPanels': [] });
  },

  addToCollection(collection, tab) {
    get(this, collection).pushObject(tab);
  },

  getIndex(collection, tab) {
    return get(this, collection).indexOf(tab);
  },

  setSelected(index) {
    this.setSelectedTab(index);
    this.setSelectedPanel(index);
  },

  setSelectedTab(index) {
    const tabs = get(this, '_tabs');
    tabs.setEach('isActive', false);
    tabs.objectAt(index).set('isActive', true);
    set(this, 'selectedIndex', index);
  },

  setSelectedPanel(index) {
    const tabPanels = get(this, '_tabPanels');
    tabPanels.setEach('isActive', false);
    tabPanels.objectAt(index).set('isActive', true);
  }

});
