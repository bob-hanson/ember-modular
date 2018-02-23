import { computed, get, set } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { scheduleOnce } from '@ember/runloop';
import BasePicker from './base-picker';
import layout from '../templates/components/picker-panel';

export default BasePicker.extend({
  layout,
  classNames: ['picker-wrapper'],

  panelHue: computed('currentHex', function () {
    return htmlSafe("background-color:" + get(this, 'currentHex'));
  }),

  pickerWidth: 200,
  pickerHeight: 200,
  panelPadding: 10,
  picker: null,

  initComponent() {
    this.buildPanels();
    this.setupPickerPanel();
  },

  buildPanels() {
    if (get(this, 'isSVGPicker')) {
      this.buildSVGPicker();
    } else {
      this.buildVMLPicker();
      this.setDocumentNamespaceforVML();
    }
  },

  buildSVGPicker() {
    let picker = this.createSVGElement('svg', { xmlns: 'http://www.w3.org/2000/svg', version: '1.1', width: '100%', height: '100%' },
     [
         this.createSVGElement('defs', {},
           [
               this.createSVGElement('linearGradient', { id: 'gradient-black', x1: '0%', y1: '100%', x2: '0%', y2: '0%'},
                 [
                     this.createSVGElement('stop', { offset: '0%', 'stop-color': '#000000', 'stop-opacity': '1' }),
                     this.createSVGElement('stop', { offset: '100%', 'stop-color': '#CC9A81', 'stop-opacity': '0' })
                 ]
                ),
               this.createSVGElement('linearGradient', { id: 'gradient-white', x1: '0%', y1: '100%', x2: '100%', y2: '100%'},
                 [
                     this.createSVGElement('stop', { offset: '0%', 'stop-color': '#FFFFFF', 'stop-opacity': '1' }),
                     this.createSVGElement('stop', { offset: '100%', 'stop-color': '#CC9A81', 'stop-opacity': '0' })
                 ]
                )
           ]
          ),
         this.createSVGElement('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#gradient-white)'}),
         this.createSVGElement('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'url(#gradient-black)'})
     ]);
     set(this, 'picker', picker);
  },

  buildVMLPicker() {
    let picker = [
            '<DIV style="position: relative; width: 100%; height: 100%">',
            '<v:rect style="position: absolute; left: -1px; top: -1px; width: 101%; height: 101%" stroked="f" filled="t">',
            '<v:fill type="gradient" method="none" angle="270" color="#FFFFFF" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',
            '</v:rect>',
            '<v:rect style="position: absolute; left: 0px; top: 0px; width: 100%; height: 101%" stroked="f" filled="t">',
            '<v:fill type="gradient" method="none" angle="0" color="#000000" opacity="100%" color2="#CC9A81" o:opacity2="0%"></v:fill>',
            '</v:rect>',
            '</DIV>'
        ].join('');
    set(this, 'picker', picker);
  },

  setupPickerPanel() {
    get(this, 'isSVGPicker') ? this.setPickerGradient()
                            : document.getElementById(this.elementId).innerHTML = get(this, 'picker');
  },

  setPickerGradient() {
    var pickerClone = get(this, 'picker').cloneNode(true),
        blackAndWhiteGradients = [pickerClone.getElementById('gradient-black'), pickerClone.getElementById('gradient-white')],
        whiteAndBlackRects = pickerClone.getElementsByTagName('rect');

    blackAndWhiteGradients[0].id = 'gradient-black-' + this.elementId;
    blackAndWhiteGradients[1].id = 'gradient-white-' + this.elementId;

    whiteAndBlackRects[0].setAttribute('fill', 'url(#' + blackAndWhiteGradients[1].id + ')');
    whiteAndBlackRects[1].setAttribute('fill', 'url(#' + blackAndWhiteGradients[0].id + ')');

    scheduleOnce('afterRender', this, this.afterInitialRender.bind(this, pickerClone));
  },

  afterInitialRender(pickerClone) {
    var pickerElement = document.getElementById('picker');
    pickerElement.appendChild(pickerClone);
    this.setPickerWidthAndHeight(pickerElement);
    this.positionIndicator(get(this, 'currentSat'), get(this, 'currentVal'));
  },

  setPickerWidthAndHeight(pickerElement) {
    this.setProperties({
      pickerWidth: pickerElement.offsetWidth,
      pickerHeight: pickerElement.offsetHeight
    });
  },

  setPickerValue(event) {
    var mousePosition = this.mousePosition(event),
        width = get(this, 'pickerWidth'),
        height = get(this, 'pickerHeight'),
        sat = mousePosition.x / width,
        val = (height - mousePosition.y) / height;

    this.attrs.pickerValueChanged({ s: sat, v: val, mousePosition: mousePosition });
    this.positionIndicator(sat, val);
  },

  positionIndicator(sat, val) {
    var pickerIndicator = document.getElementById('picker-indicator');
    pickerIndicator.style.top = this.calculatePickerIndicatorVal(val, pickerIndicator);
    pickerIndicator.style.left = this.calculatePickerIndicatorSat(sat, pickerIndicator);
  },

  calculatePickerIndicatorVal(val, pickerIndicator) {
    var pickerHeight = get(this, 'pickerHeight');
    return ((pickerHeight - val * pickerHeight) - pickerIndicator.offsetWidth / 2) + 'px';
  },

  calculatePickerIndicatorSat(sat, pickerIndicator) {
    return (sat * get(this, 'pickerWidth') - pickerIndicator.offsetWidth / 2) + 'px';
  },

  click(event) {
    this.setPickerValue(event);
  },

  actions: {

    triggerSelectorDrag(event) {
      this.setPickerValue(event);
    }

  }

});
