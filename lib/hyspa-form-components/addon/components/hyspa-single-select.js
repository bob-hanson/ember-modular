import BaseInput from 'hyspa-base-components/components/base-input';
import { inject as service } from '@ember/service';
import { get, set, setProperties, observer, computed } from '@ember/object';
import { gt, notEmpty, not, equal } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { next } from '@ember/runloop';
import { Promise } from 'rsvp';
import { isEqualByKeys } from 'ember-macaroni';
import layout from '../templates/components/hyspa-single-select';

export default BaseInput.extend({
  layout,
  classNames: ['input-component', 'select-component', 'single-select', 'form-control'],
  classNameBindings: ['isAlignedRight:is-aligned-right:is-aligned-left'],
  utilities: service(),
  selectOptions: null,
  boundOption: null,
  boundModel: null,
  placeholder: '- select -',
  placeholderText: null,
  displayValue: null,
  filterValue: null,
  isViewingOptions: true,
  isNotViewingOptions: not('isViewingOptions'),
  hoveredOption: null,
  hoveredOptionIndex: -1,
  isInitialDisplayValue: isEqualByKeys('placeholder', 'displayValue'),
  displayValueMatchesBoundOptionName: isEqualByKeys('displayValue', 'boundOption.optionName'),
  allowScroll: gt('selectOptions.length', 10),
  hasLabel: notEmpty('labelText'),
  singleVisibleOption: equal('visibleOptions.length', 1),

  visibleOptions: computed('filterValue', 'selectOptionsCopy', function() {
    var filterValue = get(this, 'utilities').regExpEscape(get(this, 'filterValue')),
        regex = new RegExp(filterValue, 'i'),
        options = get(this, 'selectOptionsCopy');

    if (filterValue) {
      options = options.filter(function (item) {
        return get(item, 'optionName').match(regex);
      });
    }

    // options = options.slice(0, this.get('maxItems'));
    // next(this.changeHoveredOption.bind(this, 1));

    return options;
  }),

  observeBoundModel: observer('boundModel', function() {
    this.handleBoundModelAsync();
  }),

  initComponent() {
    this.setupSelectOptionsAsync()
        .then(this.handleInitialBoundModel.bind(this));
  },

  setupSelectOptionsAsync() {
    if (get(this, 'selectOptions.then')) {
      set(this, 'placeholderText', 'loading...');
      return get(this, 'selectOptions').then(this.setupSelectOptionsCopy.bind(this));
    } else {
      this.setupSelectOptionsCopy();
      return new Promise(function(resolve, reject) {
        resolve(true);
        reject(null);
      });
    }
  },

  setupSelectOptionsCopy() {
    set(this, 'placeholderText', get(this, 'placeholder'));
    set(this, 'selectOptionsCopy', get(this, 'selectOptions').map(this.buildSelectOption.bind(this)));
  },

  buildSelectOption(option) {
    return { optionName: get(option, 'optionName'), optionValue: get(option, 'optionValue'), isActive: false }
  },

  resetSelect() {
    setProperties(this, {
      boundModel: null,
      displayValue: null,
      boundOption: null
    });
    get(this, 'selectOptionsCopy').setEach('isActive', false);
  },

  handleInitialBoundModel() {
    if (isPresent(get(this, 'boundModel'))) {
      this.boundModelChange();
    }
  },

  handleBoundModelAsync() {
    if (get(this, 'selectOptions.then')) {
      get(this, 'selectOptions').then(this.boundModelChange.bind(this));
    } else {
      this.boundModelChange();
    }
  },

  optionIsSelected(option, isNotViewingOptions) {
    if (isNotViewingOptions) {
      return;
    }

    if (get(this, 'singleVisibleOption')) {
      option = get(this, 'visibleOptions').objectAt(0);
    }

    option ? this.setBoundModel(get(option, 'optionValue')) : this.resetSelect();

    this.leaveSelect();
    this.setFilterValue(null);
    if (this.attrs.onChange) {
      this.attrs.onChange();
    }
  },

  boundModelChange() {
    var selectedOption = get(this, 'selectOptionsCopy').findBy('optionValue', get(this, 'boundModel'));
    if (isPresent(selectedOption)) {
      set(this, 'boundOption', selectedOption);
      this.setActiveOption();
      this.setDisplayValue();
    }
  },

  setActiveOption() {
    get(this, 'selectOptionsCopy').setEach('isActive', false);
    set(this, 'boundOption.isActive', true);
  },

  setBoundModel(value) {
    set(this, 'boundModel', value);
  },

  setDisplayValue() {
    set(this, 'displayValue', get(this, 'boundOption.optionName'));
  },

  setFilterValue(value) {
    set(this, 'filterValue', value);
  },

  leaveSelect() {
    setProperties(this, {'isFocused': false, 'isViewingOptions': false, hoveredOption: null });
  },

  setViewableOption() {
    var item = get(this,'boundOption');
    if (isPresent(item)) {
      next(this.scrollToOption.bind(this, item));
    }
  },

  scrollToOption(item) {
    var listOptionElement;
    if (get(this, 'allowScroll')) {
      listOptionElement = document.getElementById(get(item, 'optionName'));
      if (listOptionElement) {
        this.scrollChildrenIntoView(listOptionElement);
      }
    }
  },

  scrollChildrenIntoView(listOptionElement) {
    var selectElement = document.getElementById(get(this, 'elementId')),
        selectOptions = selectElement.querySelector('.select-options'),
        selectOptionsArea = selectOptions.getBoundingClientRect(),
        selectOptionsViewableArea = {
          height: selectOptions.clientHeight,
          width: selectOptions.clientWidth
        },
        listOptionElementArea = listOptionElement.getBoundingClientRect(),
        isViewable = (listOptionElementArea.top >= selectOptionsArea.top) && (listOptionElementArea.top <= selectOptionsArea.top + selectOptionsViewableArea.height);

    if (!isViewable) {
      selectOptions.scrollTop = (listOptionElementArea.top + selectOptions.scrollTop) - selectOptionsArea.top
    }
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
    this.get('selectOptionsCopy').setEach('isHovering', false);
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
    this.scrollToOption(hoveredOption);
  },

  domFocus(focusIn) {
    var input = document.querySelector(`#${get(this, 'elementId')} input`);
    focusIn ? input.focus() : input.blur();
  },

  setSelectValuesIfPossible() {
    // var possibleSelectedOption = get(this, 'selectOptionsCopy').findBy('optionName', '')
    if (get(this, 'displayValueMatchesBoundOptionName')) {
      return;
    }
    this.optionIsSelected();
  },

  focusIn() {
    if (get(this, 'isEnabled')) {
      setProperties(this, {'isFocused': true, 'isViewingOptions': true});
      this.setViewableOption();
    }
  },

  focusOut() {
    if (get(this, 'isNotViewingOptions')) {
      this.setFocusStateOnBlur();
      this.setTouchedStateOnBlur();
      this.setSelectValuesIfPossible();
    }

  },

  mouseLeave() {
    if (get(this,'isBlurred')) {
      return;
    }
    this.leaveSelect();
  },

  keyDown(e) {
    var arrowKey = e.which === 38 ? -1 : e.which === 40 ? 1 : 0, // up or down
        enterKey = e.which === 13, tabKey = e.which === 9;

    if (arrowKey) {
      setProperties(this, {'isFocused': true, 'isViewingOptions': true});
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
      setProperties(this, {'isFocused': true, 'isViewingOptions': true});
      this.setFilterValue(get(this, 'displayValue'));
    }
  },

  actions: {

    triggerOptionSelected(hoveredOption) {
      this.optionIsSelected(hoveredOption);
    },

    triggerToggleClick() {
      this.focusIn();
      this.domFocus(true);
      this.setIsTouched();
    }

  }

});






// import { get, observer, computed, set } from '@ember/object';
// import { isPresent, isEmpty } from '@ember/utils';
// import { not, or, gt } from '@ember/object/computed';
// import { inject as service } from '@ember/service';
// import { once, next, scheduleOnce } from '@ember/runloop';
// import BaseInput from 'hyspa-base-components/components/base-input';
// import layout from '../templates/components/hyspa-single-select';
//
// export default BaseInput.extend({
//   layout,
//   classNames: ['input-component', 'select-component', 'single-select', 'form-control'],
//   classNameBindings: ['isAlignedRight:is-aligned-right:is-aligned-left'],
//   utilities: service(),
//   defaultOption: null,
//   selectedOption: null,
//   selectOptions: null,
//   hoveredOptionIndex: -1,
//   hoveredOption: null,
//   isFilterable: false,
//   filterValue: '',
//   maxItems: 1000,
//   isViewingOptions: false,
//   isNotViewingOptions: not('isViewingOptions'),
//   isAlignedRight: true,
//   allowScroll: gt('selectOptions.length', 10),
//
//   validationMessage: '',
//
//   boundObject: null,
//
//   defaultOptionOrSelectedOption: computed('boundModel', function () {
//     var defaultOption = this.get('selectOptions').findBy('optionValue', this.get('boundModel'));
//     return defaultOption ? this.getInitialCopyOption(defaultOption) : Ember.Object.create({ optionValue: null, optionName: '- select -' });
//   }),
//
//   observeBoundModel: observer('defaultOptionOrSelectedOption', function() {
//     this.optionIsSelected(this.get('defaultOptionOrSelectedOption'));
//   }),
//
//   initComponent() {
//     this.afterInitialRender();
//   },
//
//   afterInitialRender() {
//     scheduleOnce('afterRender', this, this.setDefaults.bind(this));
//   },
//
//   didUpdateAttrs() {
//     once(this, this.selectedOptionChanged);
//   },
//
//   setDefaults() {
//     var defaultOption = this.get('defaultOptionOrSelectedOption'),
//         selectedOption = this.get('selectedOption');
//
//     this.set('selectOptions', this.get('selectOptions') || []);
//
//     isEmpty(selectedOption) ? this.setInitialObjectIndex(defaultOption)
//                             : this.optionIsSelected(selectedOption);
//   },
//
//   setInitialObjectIndex(selectedOption) {
//     this.set('hoveredOptionIndex', 0);
//     this.optionIsSelected(selectedOption);
//   },
//
//   getInitialCopyOption(defaultOption) {
//     return this.get('copyOptions').findBy('optionValue', get(defaultOption, 'optionValue'))
//   },
//
//   copyOptions: computed('selectOptions.length', function () {
//     var selectOptions = this.get('selectOptions') || [];
//
//     return selectOptions.map(function (selectOption) {
//       return selectOption;
//     });
//   }),
//
//   inputIsVisible: computed('visibleToggle', function () {
//     return this.get('visibleToggle') ? 'input-visible'
//                                      : 'input-hidden';
//   }),
//
//   filteredOptions: computed('copyOptions.length', 'filterValue', function () {
//     var filterValue = this.get('utilities').regExpEscape(this.get('filterValue')),
//         regex = new RegExp(filterValue, 'i'),
//         options = this.get('copyOptions');
//
//     if (filterValue) {
//       options = options.filterValue(function (item) {
//         return item.get('optionName').match(regex);
//       });
//     }
//     options = options.slice(0, this.get('maxItems'));
//     next(this.changeHoveredOption.bind(this, 1));
//
//     return options;
//   }),
//
//   visibleOptions: computed('copyOptions', 'filteredOptions', function () {
//     return this.get('isFilterable') ? this.get('filteredOptions') : this.get('copyOptions');
//   }),
//
//   focusActions: observer('optionsVisible', function () {
//     this.attrs.focusAction(this.get('optionsVisible'));
//   }),
//
//   optionIsSelected(hoveredOption, isUserSelection) {
//     var selectedOption = this.get('selectedOption');
//
//     hoveredOption = hoveredOption || this.get('defaultOption');
//     if (hoveredOption !== selectedOption) {
//       this.setProperties({'hoveredOption': hoveredOption, 'selectedOption': hoveredOption, 'filterValue': get(hoveredOption, 'optionName')});
//       this.set('boundModel', get(hoveredOption, 'optionValue'));
//       this.set('boundObject', hoveredOption);
//       if (this.get('onSelection') && isUserSelection) {
//         this.attrs.onSelection(hoveredOption);
//       }
//     }
//     this.setActiveOption(hoveredOption);
//     this.leaveSelect();
//   },
//
//   setActiveOption(selectedOption) {
//     this.get('copyOptions').setEach('isActive', false);
//     set(selectedOption, 'isActive', true);
//   },
//
//   selectedOptionChanged() {
//     this.setProperties({ filterValue: this.get('selectedOption.optionName') });
//   },
//
//   resetState() {
//     if (!this.isDestroyed) {
//       this.setHoveredOptionAndHoveredOptionIndex();
//       this.setDefaults();
//     }
//   },
//
//   setHoveredOptionAndHoveredOptionIndex(hoveredOption, hoveredIndex) {
//     this.setHoveredOption(hoveredOption);
//     this.setHoveredOptionIndex(hoveredIndex);
//   },
//
//   setHoveredOption(hoveredOption) {
//     this.get('visibleOptions').setEach('isHovering', false);
//     if (hoveredOption) {
//       this.set('hoveredOption', hoveredOption);
//       set(hoveredOption, 'isHovering', true);
//     }
//   },
//
//   setHoveredOptionIndex(hoveredIndex) {
//     isPresent(hoveredIndex) ? this.set('hoveredOptionIndex', hoveredIndex)
//                             : this.set('hoveredOptionIndex', -1);
//   },
//
//   getHoveredIndex(increment) {
//     var hoveredIndex = this.get('hoveredOptionIndex'),
//         visibleOptionsLength = this.get('visibleOptions.length');
//
//     hoveredIndex += increment;
//
//     if (hoveredIndex < 0) {
//       return visibleOptionsLength - 1;
//     }
//
//     if (hoveredIndex >= 0 && visibleOptionsLength > 0) {
//       return hoveredIndex % visibleOptionsLength;
//     }
//   },
//
//   changeHoveredOption(increment) {
//     var hoveredIndex = this.getHoveredIndex(increment),
//         hoveredOption = this.get('visibleOptions').objectAt(hoveredIndex);
//
//     this.setHoveredOptionAndHoveredOptionIndex(hoveredOption, hoveredIndex);
//     this.scrollToOption(hoveredOption);
//   },
//
//   scrollToOption(item) {
//     var listOptionElement;
//     if (this.get('allowScroll')) {
//       listOptionElement = document.getElementById(get(item, 'optionName'));
//       if (listOptionElement) {
//         this.scrollChildrenIntoView(listOptionElement);
//       }
//     }
//   },
//
//   scrollChildrenIntoView(listOptionElement) {
//     var selectElement = document.getElementById(this.get('elementId')),
//         selectOptions = selectElement.querySelector('.select-options'),
//         selectOptionsArea = selectOptions.getBoundingClientRect(),
//         selectOptionsViewableArea = {
//           height: selectOptions.clientHeight,
//           width: selectOptions.clientWidth
//         },
//         listOptionElementArea = listOptionElement.getBoundingClientRect(),
//         isViewable = (listOptionElementArea.top >= selectOptionsArea.top) && (listOptionElementArea.top <= selectOptionsArea.top + selectOptionsViewableArea.height);
//
//     if (!isViewable) {
//       selectOptions.scrollTop = (listOptionElementArea.top + selectOptions.scrollTop) - selectOptionsArea.top
//     }
//   },
//
//   setViewableOption() {
//     var item = this.get('selectedOption');
//     if (isPresent(item)) {
//       next(this.scrollToOption.bind(this, item));
//     }
//   },
//
//   keyDown(e) {
//     var arrowKey = e.which === 38 ? -1 : e.which === 40 ? 1 : 0, // up or down
//         enterKey = e.which === 13, tabKey = e.which === 9;
//
//     if (arrowKey) {
//       this.changeHoveredOption(arrowKey);
//     }
//
//     if (enterKey) {
//       this.optionIsSelected(this.get('hoveredOption'), true);
//       this.$().find('input').blur();
//       return false;
//     }
//
//     if (tabKey) {
//       this.optionIsSelected(this.get('hoveredOption'), true);
//     }
//   },
//
//   mouseLeave() {
//     var selectedOption;
//
//     if (this.get('isBlurred')) {
//       return;
//     }
//     this.leaveSelect();
//
//     selectedOption = this.get('initialOption') || this.get('defaultOption');
//     if (selectedOption) {
//       this.optionIsSelected(selectedOption, true);
//     }
//   },
//
//   leaveSelect() {
//     this.setProperties({'isFocused': false, 'isViewingOptions': false});
//   },
//
//   optionsVisibleOrSelectDisabled: or('isFocused', 'isDisabled'),
//   optionsNotVisibleOrSelectEnabled: not('optionsVisibleOrDisabled'),
//
//   focusIn() {
//     if (this.get('isEnabled')) {
//       this.setProperties({'isFocused': true, 'isViewingOptions': true});
//       this.setViewableOption();
//     }
//   },
//
//   focusOut() {
//     if (this.get('isNotViewingOptions')) {
//       this.setFocusStateOnBlur();
//       this.setTouchedStateOnBlur();
//     }
//   },
//
//   focusOn() {
//     if (this.get('optionsNotVisibleOrSelectEnabled')) {
//       this.setProperties({'initialOption': this.get('selectedOption'), 'boundModel': "", 'optionsVisible': true});
//     }
//   },
//
//   actions: {
//
//     triggerOptionSelected(hoveredOption) {
//       this.optionIsSelected(hoveredOption, true);
//     },
//
//     triggerToggleClick() {
//       this.focusIn();
//       this.setIsTouched();
//     }
//
//   }
// });
