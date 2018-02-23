import Service from '@ember/service';
import { get, set } from '@ember/object';

export default Service.extend({

  eventProp: null,
  parentElement: null,
  isBound: true,
  defaultHeight: 100,
  defaultWidth: 100,

  initRipple(event, parentElement, options) {
    set(this, 'eventProp', event);
    set(this, 'parentElement', document.getElementById(parentElement.elementId));
    this.setOptions(options);
    this.removeOldRippleElement();
    // this.createRippleElement(get(this, 'parentElement'));
  },

  setOptions(options) {
    if (options) {
      if (options.isBound) {
        set(this, 'isBound', options.isBound);
      }
      if (options.defaultHeight) {
        set(this, 'defaultHeight', options.defaultHeight);
      }
      if (options.defaultWidth) {
        set(this, 'defaultWidth', options.defaultWidth);
      }
    }
  },

  removeOldRippleElement() {
    var oldRipple = document.getElementById('ripple');
    if (oldRipple) {
      oldRipple.remove();
    }
  },

  getRippleElement() {
    return this.setRippleAttributes(document.createElement('span'));
  },

  setRippleAttributes(rippleElement) {
    rippleElement.setAttribute('id', 'ripple');
    rippleElement.setAttribute('class', 'ripple animate-ripple');
    rippleElement.setAttribute('style', this.setRippleStyleProperties());
    return rippleElement;
  },

  setRippleStyleProperties() {
    var parentProperties = get(this, 'parentElement').getBoundingClientRect(),
        clickEvent = get(this, 'eventProp'),
        rippleWidth = parentProperties.width,
        rippleHeight = parentProperties.height,
        rippleTop, rippleLeft;

    if(rippleWidth >= rippleHeight) {
      rippleHeight = rippleWidth;
    } else {
      rippleWidth = rippleHeight;
    }

    rippleTop = clickEvent.clientY - parentProperties.top - rippleHeight / 2;
    rippleLeft = clickEvent.clientX - parentProperties.left - rippleWidth / 2;

    return "width: " + rippleWidth + "px; height: " + rippleHeight + "px; left: " + rippleLeft + "px; top: " + rippleTop + "px;";
  },

  createRippleElement(parentElement) {
    parentElement.insertBefore(this.getRippleElement(), parentElement.firstChild);
  }

});
