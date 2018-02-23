import { get, set } from '@ember/object';
import { later, cancel } from '@ember/runloop';
import InputAddon from './hyspa-input-addon';
import layout from '../templates/components/hyspa-input-counters';

export default InputAddon.extend({
  layout,
  classNames: ['hyspa-input-counters'],
  padding: '0,0,0,0',

  isMouseDown: false,
  timer: null,

  counter(increment) {
    this.stopCounter();
    set(this, 'isMouseDown', true);
    this.changeValue(increment);
    later(this, 'updateValueOnTimer', increment, 1000);
  },

  changeValue(increment) {
    var currentValue = Number(get(this, 'boundModel'));
    if (increment) {
      set(this, 'boundModel', currentValue+1);
    } else {
      set(this, 'boundModel', currentValue-1);
    }
  },

  updateValueOnTimer(increment) {
    this.changeValue(increment);
    if (get(this, 'isMouseDown')) {
      set(this, 'timer', later(this, 'updateValueOnTimer', increment, 300));
    }
  },

  stopCounter() {
    set(this, 'isMouseDown', false);
    cancel(get(this, 'timer'));
  },

  actions: {
    triggerCounter(increment) {
      this.counter(increment);
    },
    triggerStopCounter() {
      this.stopCounter();
    }
  }
});
