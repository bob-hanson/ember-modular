import { get } from '@ember/object';
import { readOnly} from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import { isEqualByKeys } from 'ember-macaroni';
import layout from '../templates/components/tab-panel';

export default BaseComponent.extend({
  layout,
  classNames: ['tab-panel'],
  classNameBindings: ['colSpan'],
  padding: '2,0,2,2',

  currentIndex: null,
  tabsContainer: readOnly('parentView'),
  selectedIndex: readOnly('parentView.selectedIndex'),
  isActive: isEqualByKeys('selectedIndex', 'currentIndex'),

  initComponent() {
    this.registerTabItem();
  },

  registerTabItem() {
    const tabsContainer = get(this, 'tabsContainer');
    tabsContainer.addToCollection('_tabPanels', this);
    this.set('currentIndex', tabsContainer.getIndex('_tabPanels', this));
  }

});
