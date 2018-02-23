import BaseInput from 'hyspa-base-components/components/base-input';
import { inject as service } from '@ember/service';
import { get, set, setProperties, observer, computed } from '@ember/object';
import { gt, notEmpty, not, equal, and } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { next } from '@ember/runloop';
import { Promise } from 'rsvp';
import { isEqualByKeys, gte } from 'ember-macaroni';
import layout from '../templates/components/hyspa-typeahead';

export default BaseInput.extend({
  layout,
  classNames: ['input-component', 'select-component', 'single-select', 'form-control'],
  classNameBindings: ['isAlignedRight:is-aligned-right:is-aligned-left'],
  utilities: service(),
  hasTyped: false,
  mustExist: false,
  isFiltering: true,
  visibeOptions: null,
  boundModel: null,
  hoveredOption: null,
  hoveredOptionIndex: -1,
  hasLabel: notEmpty('labelText'),
  singleVisibleOption: equal('visibleOptions.length', 1),
  shouldFilter: gte('boundModel.length', 'filterAfter'),
  showFilteredResults: and('hasTyped', 'shouldFilter'),
  isNotViewingOptions: not('showFilteredResults'),

  filterResults() {
    var filterValue = get(this, 'utilities').regExpEscape(get(this, 'boundModel')),
        regex = new RegExp(filterValue, 'i'),
        filteredCollection = get(this, 'filterCollection').filter(function(item) {
          return get(item, 'optionName').match(regex);
        });
    
    set(this, 'visibleOptions', filteredCollection);
    this.setHoveredOptionIndex();
    set(this, 'isFiltering', false);
  },

  resetTypeahed() {
    set(this, 'boundModel', null);
  },

  optionIsSelected(option, isNotViewingOptions) {
    if (isNotViewingOptions) {
      return;
    }

    let singleOption = get(this, 'singleVisibleOption') ? get(this, 'visibleOptions').objectAt(0) : null;

    option = option || singleOption

    option ? this.setBoundModel(get(option, 'optionName')) : this.resetTypeahed();

    this.leaveTypeahead();

    if (this.attrs.onChange) {
      this.attrs.onChange();
    }
  },

  setBoundModel(value) {
    set(this, 'boundModel', value);
  },

  setDisplayValue() {
    set(this, 'displayValue', get(this, 'boundOption.optionName'));
  },

  leaveTypeahead() {
    setProperties(this, { 'isFocused': false, hoveredOption: null, 'hasTyped': false });
  },

  setHoveredOptionAndHoveredOptionIndex(hoveredOption, hoveredIndex) {
    this.setHoveredOption(hoveredOption);
    this.setHoveredOptionIndex(hoveredIndex);
  },

  setHoveredOptionIndex(hoveredIndex) {
    isPresent(hoveredIndex) ? set(this, 'hoveredOptionIndex', hoveredIndex)
      : set(this, 'hoveredOptionIndex', -1);
  },

  setHoveredOption(hoveredOption) {
    this.get('visibleOptions').setEach('isHovering', false);
    if (hoveredOption) {
      set(this, 'hoveredOption', hoveredOption);
      set(hoveredOption, 'isHovering', true);
    }
  },

  getHoveredIndex(increment) {
    var hoveredIndex = get(this, 'hoveredOptionIndex'),
      visibleOptionsLength = get(this, 'visibleOptions.length');

    hoveredIndex += increment;

    if (hoveredIndex < 0) {
      return visibleOptionsLength - 1;
    }

    if (hoveredIndex >= 0 && visibleOptionsLength > 0) {
      return hoveredIndex % visibleOptionsLength;
    }
  },

  changeHoveredOption(increment) {
    var hoveredIndex = this.getHoveredIndex(increment),
      hoveredOption = get(this, 'visibleOptions').objectAt(hoveredIndex);

    this.setHoveredOptionAndHoveredOptionIndex(hoveredOption, hoveredIndex);
  },

  setSelectValuesIfPossible() {
    this.filterResults();
    let option  = get(this, 'visibleOptions.length') === 1 ? get(this, 'visibleOptions').objectAt(0) : null;
    console.log(get(this, 'visibleOptions.length'));
    this.optionIsSelected(option);
  },

  focusIn() {
    if (get(this, 'isEnabled')) {
      setProperties(this, { 'isFocused': true });
    }
  },

  focusOut() {
    if (get(this, 'isNotViewingOptions')) {
      this.setFocusStateOnBlur();
      this.setTouchedStateOnBlur();
      // this.setSelectValuesIfPossible();
    }
  },

  mouseLeave() {
    if (get(this, 'isBlurred')) {
      return;
    }
    this.leaveTypeahead();
  },

  keyDown(e) {
    var arrowKey = e.which === 38 ? -1 : e.which === 40 ? 1 : 0, // up or down
      enterKey = e.which === 13, tabKey = e.which === 9;

    if (arrowKey) {
      setProperties(this, { 'isFocused': true });
      this.changeHoveredOption(arrowKey);
      return false;
    }

    if (enterKey) {
      this.optionIsSelected(get(this, 'hoveredOption'));
      return false;
    }

    if (tabKey) {
      this.optionIsSelected(get(this, 'hoveredOption'), get(this, 'isNotViewingOptions'));
    }
  },

  keyUp(e) {
    var arrowKey = e.which === 38 || e.which === 40, // up or down
      enterKey = e.which === 13,
      tabKey = e.which === 9,
      restrictedKey = arrowKey || enterKey || tabKey,
      filterKey = !restrictedKey;

    this._super(...arguments);

    if (filterKey) {
      if (get(this, 'shouldFilter')) {
        set(this, 'isFiltering', true);
        this.filterResults();
      }
      setProperties(this, { 'hasTyped': true });
    }
  },

  actions: {

    triggerOptionSelected(hoveredOption) {
      console.log(hoveredOption);
      this.optionIsSelected(hoveredOption);
    }

  }

});