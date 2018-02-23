import { get, set, setProperties } from '@ember/object';
import { notEmpty, gt, equal } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import SingleSelect from './hyspa-single-select';
import { task } from 'ember-concurrency';
import layout from '../templates/components/hyspa-multi-select';

export default SingleSelect.extend({
  layout,
  classNames: ['input-component', 'select-component', 'multi-select'],
  boundCollection: null,
  hasSelectedOptions: notEmpty('boundCollection'),
  hasSingleSelectedOption: equal('boundCollection.length', 1),
  hasMultipleSelectedOptions: gt('boundCollection.length', 1),
  singleSelectedOption: null,

  hasLabel: notEmpty('labelText'),

  initComponent() {
    get(this, 'setupMultiSelect').perform();
  },

  setupMultiSelect: task(function * () {
    let options = yield get(this, 'selectOptions');

    yield this.setVisibleOptions(options);
    yield this.setSelectedOptions();
  }),

  setVisibleOptions(options) {
    set(this, 'selectOptionsCopy', options.map(this.buildSelectOption.bind(this)));
  },

  buildSelectOption(option) {
    return { optionName: get(option, 'optionName'), optionValue: get(option, 'optionValue'), isSelected: false }
  },

  setSelectedOptions() {
    this.resetSelectOption();
    this.setSelectedOption();
  },

  resetSelectOption() {
    get(this, 'selectOptionsCopy').setEach('isSelected', false);
  },

  setSelectedOption() {
    if (isPresent(get(this, 'boundCollection'))) {
      get(this, 'boundCollection').forEach(optionValue => {
        set(get(this, 'selectOptionsCopy').findBy('optionValue', optionValue), 'isSelected', true);
      });
      this.setSingleOption();
    }
  },

  setSingleOption() {
    if (get(this, 'hasSingleSelectedOption')) {
      set(this, 'singleSelectedOption', get(this, 'selectOptionsCopy').findBy('isSelected', true));
    }
  },

  handleChipClick(clickedOption) {
    get(this, 'boundCollection').removeObject(clickedOption.optionValue);
    this.setSelectedOptions();
  },

  buildBoundCollection() {
    set(this, 'boundCollection', get(this, 'selectOptionsCopy').map(this.mapSelectedOption.bind(this)).compact());
  },

  mapSelectedOption(option) {
    if (get(option, 'isSelected')) {
      return get(option, 'optionValue');
    }
  },

  mouseLeave() {
    if (get(this, 'isBlurred')) {
      return;
    }
    this.leaveSelect();
  },

  leaveSelect() {
    setProperties(this, {'isFocused': false, 'isViewingOptions': false});
  },

  toggleHoveredOptionIsSelected() {
    var selectedOption = get(this, 'selectOptionsCopy').findBy('optionValue', get(this, 'hoveredOption.optionValue'));
    if (get(selectedOption, 'isSelected')) {
      set(selectedOption, 'isSelected', false);
    } else {
      set(selectedOption, 'isSelected', true);
    }
  },

  keyDown(e) {
    var arrowKey = e.which === 38 ? -1 : e.which === 40 ? 1 : 0, // up or down
        enterKey = e.which === 13;

    if (arrowKey) {
      this.changeHoveredOption(arrowKey);
    }

    if (enterKey) {
      this.toggleHoveredOptionIsSelected();
      this.buildBoundCollection();
      if (this.attrs.updateAction) {
        this.attrs.updateAction();
      }
      return false;
    }
  },

  focusOut() {
    if (get(this, 'isNotViewingOptions')) {
      this.setFocusStateOnBlur();
      this.setTouchedStateOnBlur();
      this.leaveSelect();
    }
  },

  actions: {

    triggerOptionClick() {
      this.buildBoundCollection();
      this.setSelectedOptions();
      if (this.attrs.updateAction) {
        this.attrs.updateAction();
      }
    },

    triggerChipClick(clickedOption) {
      this.handleChipClick(clickedOption);
      if (this.attrs.updateAction) {
        this.attrs.updateAction();
      }
    }

  }


});
