import { computed, observer, get, set } from '@ember/object';
import { and, not, notEmpty } from '@ember/object/computed';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import InputValidation from 'hyspa-base-components/mixins/input-validation';
import layout from '../templates/components/hyspa-radio-button-group';

export default BaseComponent.extend(
  InputValidation, {
  layout,
  classNames: ['radio-button-group', 'form-control'],
  classNameBindings: ['colSpan', 'hasColumns', 'isNotFormInput', 'stacked', 'isDisabled'],
  padding: '1,0,1,0',
  modelProperty: null,
  radioOptions: null,
  boundModel: null,
  untrackedBoundModel: null,
  enableClearSelection: false,
  hasLabel: notEmpty('labelText'),
  isNotFormInput: not('isFormInput'),
  hasBoundModelValue: notEmpty('boundModel'),
  hasValueAndEnabledClearSelection: and('hasBoundModelValue', 'enableClearSelection'),
  hasColumns: computed('columns', function() {
    if (get(this, 'columns')) {
      return 'group-column-' + get(this, 'columns');
    }
  }),

  initComponent() {
    this._super();
    this.initRadioSelection();
    if (this.attrs.initAction) {
      this.attrs.initAction(this);
    }
    // this.setRadioSelection();
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.attrs.destroyAction) {
      this.attrs.destroyAction(this);
    }
  },

  boundModelIsUpdated: observer('boundModel', function () {
    scheduleOnce('afterRender', this, this.setRadioSelection.bind(this));
  }),

  initRadioSelection() {
    scheduleOnce('afterRender', this, this.setRadioSelection.bind(this));
  },

  setRadioSelection() {
    var radioOptions = get(this, 'radioOptions'),
        selectedOption = radioOptions.findBy('optionValue', get(this, 'boundModel'));

    radioOptions.setEach('isSelected', false);

    if (selectedOption) {
      set(selectedOption, 'isSelected', true);
      this.setUntrackedoptionValue(get(selectedOption, 'untrackedoptionValue'));
    } else {
      this.setUntrackedoptionValue(null);
    }
  },

  setBoundModel(optionValue, untrackedoptionValue) {
    set(this, 'boundModel', optionValue);
    this.setUntrackedoptionValue(untrackedoptionValue);
    if (isPresent(get(this, 'radioSelectAction'))) {
      this.attrs.radioSelectAction(optionValue, get(this, 'modelProperty'));
    }
  },

  setUntrackedoptionValue(untrackedoptionValue) {
    set(this, 'untrackedBoundModel', untrackedoptionValue);
  },

  clearSelection() {
    this.setBoundModel(null);
  },

  actions: {

    triggerRadioSelect(optionValue, untrackedoptionValue) {
      if (get(this, 'isEnabled')) {
          this.setBoundModel(optionValue, untrackedoptionValue);
          if (this.attrs.selectAction) {
            this.attrs.selectAction(optionValue);
          }
      }
    },

    triggerClearSelection() {
      this.clearSelection();
      if (this.attrs.selectAction) {
        this.attrs.selectAction();
      }
    }

  }

});
