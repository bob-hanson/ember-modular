import Component from '@ember/component';
import layout from '../templates/components/base-picker';

export default Component.extend({
  layout,
  uniqID: 0,

  mousePosition(event) {
    var wrapper;
    if (event) {
      // IE:
      if (window.event && window.event.contentOverflow !== undefined) {
        return { x: window.event.offsetX, y: window.event.offsetY };
      }
      // Webkit:
      if (event.offsetX !== undefined && event.offsetY !== undefined) {
        return { x: event.offsetX, y: event.offsetY };
      }
      // Firefox:
      wrapper = event.target.parentNode.parentNode;
      return { x: event.layerX - wrapper.offsetLeft, y: event.layerY - wrapper.offsetTop };
    }
  },

  createSVGElement(el, attrs, children) {
    var svgEl = document.createElementNS('http://www.w3.org/2000/svg', el);

    for (let key in attrs) {
      svgEl.setAttribute(key, attrs[key]);
    }
    if (Object.prototype.toString.call(children) !== '[object Array]') {
      children = [children];
    }
    let i = 0; let len = (children[0] && children.length) || 0;
    for (; i < len; i++) {
      svgEl.appendChild(children[i]);
    }
    return svgEl;
  }

});
