import { isPresent } from '@ember/utils';
import { get, set } from '@ember/object';
import { notEmpty, and } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseComponent from './base-component';

export default BaseComponent.extend({
  store: service(),
  classNames: ['admin'],
  classNameBindings: ['colSpan'],
  userSearchInputValue: null,
  userSearchResults: null,
  searchResultsVisible: true,
  hasUserSearchResults: notEmpty('userSearchResults'),
  hasUserSearchResultsAndIsVisible: and('searchResultsVisible', 'hasUserSearchResults'),
  filteredUserSearchResults: null,
  hasFilteredUserSearchResults: notEmpty('filteredUserSearchResults'),

  initComponent() {
    this.userSearchResults = [];
    this.ilteredUserSearchResults = [];
  },

  searchOrFilterUsers(inputValue) {
    if (isPresent(inputValue) && inputValue.length > 2) {
      this.searchUsers(inputValue);
    }
  },

  searchUsers(inputValue) {
    get(this, 'repository').searchAllUsers(inputValue)
                          .then(this.setSearchResults.bind(this, inputValue));
  },

  setSearchResults(inputValue, searchResults) {
    get(this, 'userSearchResults').clear();
    set(this, 'userSearchResults', get(this, 'store').push(searchResults));
  },

  filterSearchResults(inputValue) {
    set(this, 'filteredUserSearchResults', get(this, 'filterList').filterCollection('fullName', get(this, 'userSearchResults'), inputValue));
  },

  clearUserSearchResultInput() {
    set(this, 'userSearchInputValue', null);
  },

  actions: {

    triggerClearUserSearchResults() {
      this.clearUserSearchResultInput();
    },

    triggerUserSearch(inputValue) {
      this.searchOrFilterUsers(inputValue);
    }

  }

});
