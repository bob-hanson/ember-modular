import { setProperties, set, get, observer, computed } from '@ember/object';
import { notEmpty, not, and, or } from '@ember/object/computed';
import { debounce } from '@ember/runloop';
import BaseInput from 'hyspa-base-components/components/base-input';
import layout from '../templates/components/hyspa-date-picker';

export default BaseInput.extend({
  layout,
  classNames: ['hyspa-date-picker', 'input-component', 'form-control'],
  classNameBindings: ['hasBoundModel'],
  center: null,
  isValid: true,
  alwaysShowBanner: false,
  inputBoundModel: null,
  dateInputAllowedChars: null,
  alignRight: false,
  hasBoundModel: notEmpty('boundModel'),
  sometimesShowBanner: not('alwaysShowBanner'),
  showBannerWhenBoundModel: and('sometimesShowBanner', 'hasBoundModel'),
  showBanner: or('alwaysShowBanner', 'showBannerWhenBoundModel'),
  horizontalPosition: computed('alignRight', function() {
    return get(this, 'alignRight') ? 'right' : 'left';
  }),

  initComponent() {
    this.setInputBoundModel();
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      dateInputAllowedChars: ['/']
    });
  },

  observeBoundModelChange: observer('boundModel', function() {
    debounce(this, 'setInputBoundModel', 1000);
  }),

  setBoundModelAndUpdateInput(calendarValue) {
    this.setBoundModel(calendarValue.toDate());
    this.setInputBoundModel();
    this.setValidity(true);
  },

  setBoundModel(calendarValue) {
    set(this, 'boundModel', calendarValue);
  },

  setInputBoundModel() {
    var boundModel = get(this, 'boundModel');
    if (boundModel) {
      set(this, 'inputBoundModel', moment(boundModel).format('M/D/YYYY') );
    } else {
      set(this, 'inputBoundModel', null);
    }
  },

  setCenter() {
    set(this, 'center', get(this, 'boundModel'));
  },

  setCalendarValue(calendarValue) {
    set(this, 'boundModel', calendarValue);
  },

  handleInputBoundModelChange() {
    var inputBoundModel = get(this, 'inputBoundModel'),
        newBoundModelDate = moment(inputBoundModel);

    if (newBoundModelDate.isValid()) {
      this.setBoundModel(newBoundModelDate);
      this.setCenter();
      this.setValidity(true);
    } else {
      this.setBoundModel(null);
      this.setValidity(false);
    }
  },

  calculateCalendarPosition(trigger, content, destination, options) {
    let { width, height } = trigger.getBoundingClientRect();
    let style = {
      top: height
    };

    options.horizontalPosition === "right" ? style.right = 5 : style.left = -width + 5;

    return { style };
  },

  setValidity(isValid) {
    set(this, 'isValid', isValid);
  },

  actions: {

    triggerSetCalendarDate(calendarValue) {
      this.setBoundModelAndUpdateInput(calendarValue);
    },

    triggerInputBoundModelChange() {
      this.handleInputBoundModelChange();
    }

  }

});
