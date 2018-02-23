import { observer, get, set } from '@ember/object';
import { notEmpty, not } from '@ember/object/computed';
import { debounce } from '@ember/runloop';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/search-bar';

export default BaseComponent.extend({
  layout,
  classNames: ['search-bar'],
  classNameBindings: ['colSpan'],
  padding: '1,1,1,4',
  searchValue: null,
  showSearchResults: false,

  hasSearchValue: notEmpty('searchValue'),
  searchValueBlank: not('hasSearchValue'),
  searchResultsHidden: not('showSearchResults'),

  handleSearchInputChange() {
    this.handleSearchValueChange();
    this.attrs.triggerSearch(get(this, 'searchValue'));
  },

  handleFilterInputChange: observer('searchValue', function () {
    debounce(this, this.handleSearchInputChange, 150);
  }),

  handleSearchValueChange() {
    if (get(this, 'searchValueBlank')) {
      this.handleSearchResultsBlur();
    }
  },

  handleSearchResultsBlur() {
    this.setHideSearchResults();
  },

  toggleSearchResultsView() {
    if (get(this, 'searchResultsHidden')) {
      this.setShowSearchResults();
    }
  },

  handleInputKeypress() {
    this.toggleSearchResultsView();
  },

  setShowSearchResults() {
    set(this, 'showSearchResults', true);
  },

  setHideSearchResults() {
    set(this, 'showSearchResults', false);
  },

  focusIn() {
    this.setShowSearchResults();
  },

  actions: {

    triggerInputKeypress() {
      this.handleInputKeypress();
    },

    triggerSearchResultsLeave() {
      this.handleSearchResultsBlur();
    },

    triggerSearchFieldChange() {
      this.handleFilterInputChange();
    }

  }

});
