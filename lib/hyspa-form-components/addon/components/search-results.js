import { set } from '@ember/object';
import { notEmpty, and } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/search-results';

export default BaseComponent.extend({
  layout,
  classNames: ['search-results'],
  classNameBindings: ['colSpan', 'isHovered:is-hovered'],

  searchResults: null,
  hasSearchResults: notEmpty('searchResults'),
  hasSearchValue: notEmpty('searchValue'),
  showSearchResults: false,
  searchResultsVisible: and('hasSearchResults', 'hasSearchValue', 'showSearchResults'),

  initComponent() {
    this.setDefaults();
  },

  setDefaults() {
    this.searchResults = [];
  },

  mouseEnter() {
    set(this, 'isHovered', true);
  },

  mouseLeave(e) {
    set(this, 'isHovered', false);
    //this.attrs.mouseLeaveAction();
    this._super(e);
  }

});
