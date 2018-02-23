import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import layout from '../templates/components/search-result';

export default BaseComponent.extend({
  layout,
  classNames: ['search-result'],
  classNameBindings: ['colSpan', 'isActive:is-active'],

  mainIcon: '',
  mainIconSize: 'large',
  mainHeader: '',
  secondaryIcon: '',
  secondaryIconSize: 'small',
  secondaryHeader: '',

  click() {
    this.searchResultSelected();
    this.clearInput();
  },

  clearInput() {
    this.attrs.clearSearchAction();
  },

  searchResultSelected() {
    this.attrs.searchResultSelect(get(this, 'searchResultValue'));
  }

});
