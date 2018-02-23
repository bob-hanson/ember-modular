import { get, set } from '@ember/object';
import { alias, readOnly } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import { isEqualByKeys } from 'ember-macaroni';
import layout from '../templates/components/tab-button';

export default BaseComponent.extend({
  layout,
  classNames: ['tab-button'],
  classNameBindings: ['isActive:is-active', 'isActive:primary-border-color'],
  attributeBindings: ['tabText:title'],
  tagName: "li",
  currentIndex: null,
  tabsContainer: readOnly('parentView.tabsContainer'),
  selectedIndex: alias('tabsContainer.selectedIndex'),
  isActive: isEqualByKeys('selectedIndex', 'currentIndex'),

  initComponent() {
    this.registerTabItem();
  },

  registerTabItem() {
    var tabsContainer = get(this, 'tabsContainer');

    tabsContainer.addToCollection('_tabs', this);
    set(this, 'currentIndex', tabsContainer.getIndex('_tabs', this));
  },

  click(event) {
    this.emitClickToParent();
    get(this, 'ripple').initRipple(event, this);
    get(this, 'tabsContainer').setSelected(get(this, 'currentIndex'));
  },

  emitClickToParent(event) {
    if (this.attrs.clickAction) {
      this.attrs.clickAction(event);
    }
  }

});
