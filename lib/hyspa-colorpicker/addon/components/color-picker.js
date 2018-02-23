// Need to implement Drag

import Component from '@ember/component';
import { get, set } from '@ember/object';
import { equal, not } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/color-picker';

export default Component.extend({
  layout,
  classNames: ['ember-picker'],
  h: 0,
  s: 0,
  v: 100,
  r: 255,
  g: 255,
  b: 255,
  hueOffset: 15,
  isViewingPicker: true,
  pickerValue: null,
  pickerType: 'SVG',
  currentHex: null,
  calculatedHex: null,
  roundPrecision: 100,

  isSVGPicker: equal('pickerType', 'SVG'),
  isVMLPicker: not('isSVGPicker'),

  init() {
    this._super();
    set(this, 'isViewingPicker', true);
    this.setPickerType();
    this.setDocumentNamespaceforVML();
    this.setInitialPickerValue();
  },

  actions: {

    triggerResetColorPicker() {
      this.setDefaultColorValues();
    },

    triggerPickerValueChange(valueObject) {
      this.pickerValueChanged(valueObject);
    },

    triggerSliderValueChange(valueObject) {
      this.pickerValueChanged(valueObject);
      this.pickerHueChanged(valueObject);
    }
  },

  setPickerType() {
    if (window.SVGAngle || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")) {
      set(this, 'pickerType', "SVG");
    } else {
      set(this, 'pickerType', "VML");
    }
  },

  setDocumentNamespaceforVML() {
    if (get(this, 'isVMLPicker') && !document.namespaces['v']) {
      document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
    }
  },

  setInitialPickerValue() {
    if (isPresent(get(this, 'currentHex'))) {
      this.setDefaultColorValues();
    }
  },

  setDefaultColorValues() {
    set(this, 'calculatedHex', get(this, 'currentHex'));
    this.convertHexToRgb();
    this.convertRgbToHsv();
    set(this, 'pickerHex', this.calculatePickerBg());
  },

  roundValue(num) {
    var precision = get(this, 'roundPrecision');
    return Math.ceil(num * precision) / precision;
  },

  hsv2rgb([h,s,v]) {
    var R, G, B, X, C, r, g, b, hex;

    h = (h % 360) / 60;

    C = v * s;
    X = C * (1 - Math.abs(h % 2 - 1));
    R = G = B = v - C;

    h = ~~h;
    R += [C, X, 0, 0, X, C][h];
    G += [X, C, C, X, 0, 0][h];
    B += [0, 0, X, C, C, X][h];

    r = Math.floor(R * 255);
    g = Math.floor(G * 255);
    b = Math.floor(B * 255);
    hex = this.calculateHexValue(r,g,b);
    return [ r, g, b, hex ];
  },

  calculateHexValue(r, g, b) {
    return "#" + (16777216 | b | (g << 8) | (r << 16)).toString(16).slice(1);
  },

  calculatePickerBg() {
    var [,,,hex] = this.hsv2rgb([get(this, 'h'), 1, 1]);
    return hex;
  },

  rgb2hsv ([r,g,b]) {
    var H, S, V, C;

    if (r > 1 || g > 1 || b > 1) {
      r /= 255;
      g /= 255;
      b /= 255;
    }

    V = Math.max(r, g, b);
    C = V - Math.min(r, g, b);
    H = (C === 0 ? null :
         V === r ? (g - b) / C + (g < b ? 6 : 0) :
         V === g ? (b - r) / C + 2 :
                  (r - g) / C + 4);
    H = (H % 6) * 60;
    S = C === 0 ? 0 : C / V;
    return [ this.roundValue(H), this.roundValue(S), this.roundValue(V) ];
  },

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  },

  convertHexToRgb() {
    var calculatedHex = get(this, 'calculatedHex');
    this.setProperties({
      r: parseInt(calculatedHex.substr(1, 2), 16),
      g: parseInt(calculatedHex.substr(3, 2), 16),
      b: parseInt(calculatedHex.substr(5, 2), 16)
    });
  },

  convertRgbToHsv() {
    var [h, s, v] = this.rgb2hsv([get(this, 'r'), get(this, 'g'), get(this, 'b')]);
    this.setProperties({
      h: parseInt(h),
      s: parseFloat(s).toFixed(4),
      v: parseFloat(v).toFixed(2)
    });
  },

  rgb2hex([r, g, b]) {
    var [,,,hex] = this.hsv2rgb(this.rgb2hsv([r, g, b]));
    return hex;
  },

  hex() {
    var [r,g,b] = this.hsv2rgb([get(this, 'h'), get(this, 's'), get(this, 'v')]);
    return this.rgb2hex([r,g,b]);
  },

  hsv() {
    return [ get(this, 'h') - get(this, 'hueOffset'), get(this, 's'), get(this, 'v') ];
  },

  rgb() {
    return this.hsv2rgb([get(this, 'h'), get(this, 's'), get(this, 'v')]);
  },

  setHSVValues(valueObject) {
    this.setHue(valueObject);
    this.setSat(valueObject);
    this.setVal(valueObject);
    set(this, 'calculatedHex', this.hex());
  },

  setHue(valueObject) {
    if (isPresent(valueObject.h)) {
      set(this, 'h', valueObject.h);
    }
  },

  setSat(valueObject) {
    if (isPresent(valueObject.s)) {
      set(this, 's', valueObject.s);
    }
  },

  setVal(valueObject) {
    if (isPresent(valueObject.v)) {
      set(this, 'v', valueObject.v);
    }
  },

  getPickerValues(valueObject) {
    return {
      hex: this.hex(),
      h: get(this, 'h'),
      s: get(this, 's'),
      v: get(this, 'v'),
      r: get(this, 'r'),
      g: get(this, 'g'),
      b: get(this, 'b'),
      mousePosition: valueObject.mousePosition
    };
  },

  pickerValueChanged(valueObject) {
    this.setHSVValues(valueObject);
    set(this, 'pickerValue', this.getPickerValues(valueObject));
    this.pickerChangeAction(get(this, 'pickerValue'));
  },

  pickerHueChanged() {
    set(this, 'pickerHex', this.calculatePickerBg());
  }

});
