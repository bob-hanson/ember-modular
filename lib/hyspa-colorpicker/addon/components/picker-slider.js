import { get, set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import BasePicker from './base-picker';
import layout from '../templates/components/picker-slider';

export default BasePicker.extend({
  layout,
  classNames: ['slide-wrapper'],
  elementId: 'slider',

  slide: null,
  sliderHeight: 200,

  initComponent() {
    this.buildSlider();
    this.setupPickerSlider();
  },

  buildSlider() {
    get(this, 'isSVGPicker') ? this.buildSVGSlide()
                            : this.buildVMLSlide();
  },

  buildSVGSlide() {
    let slide = this.createSVGElement('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      version: '1.1',
      width: '100%',
      height: '100%'
    }, [
      this.createSVGElement('defs', {},
        this.createSVGElement('linearGradient', {
          id: 'gradient-hsv',
          x1: '0%',
          y1: '100%',
          x2: '0%',
          y2: '0%'
        }, [
          this.createSVGElement('stop', {
            offset: '0%',
            'stop-color': '#FF0000',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '13%',
            'stop-color': '#FF00FF',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '25%',
            'stop-color': '#8000FF',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '38%',
            'stop-color': '#0040FF',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '50%',
            'stop-color': '#00FFFF',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '63%',
            'stop-color': '#00FF40',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '75%',
            'stop-color': '#0BED00',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '88%',
            'stop-color': '#FFFF00',
            'stop-opacity': '1'
          }),
          this.createSVGElement('stop', {
            offset: '100%',
            'stop-color': '#FF0000',
            'stop-opacity': '1'
          })
        ])
      ),
      this.createSVGElement('rect', {
        x: '0',
        y: '0',
        width: '100%',
        height: '100%',
        fill: 'url(#gradient-hsv)'
      })
    ]);
    set(this, 'slide', slide);
  },

  buildVMLSlide() {
    let slide = [
      '<DIV style="position: relative; width: 100%; height: 100%">',
      '<v:rect style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" stroked="f" filled="t">',
      '<v:fill type="gradient" method="none" angle="0" color="red" color2="red" colors="8519f fuchsia;.25 #8000ff;24903f #0040ff;.5 aqua;41287f #00ff40;.75 #0bed00;57671f yellow"></v:fill>',
      '</v:rect>',
      '</DIV>'
    ].join('');
    set(this, 'slide', slide);
  },

  setupPickerSlider() {
    get(this, 'isSVGPicker') ? this.setSliderGradient()
                            : document.getElementById(this.elementId).innerHTML = get(this, 'slide');
  },

  setSliderGradient() {
    var slideClone = get(this, 'slide').cloneNode(true),
        hsvGradient = slideClone.getElementById('gradient-hsv'),
        hsvRect = slideClone.getElementsByTagName('rect')[0];

    hsvGradient.id = 'gradient-hsv-' + this.elementId;
    hsvRect.setAttribute('fill', 'url(#' + hsvGradient.id + ')');

    scheduleOnce('afterRender', this, this.afterInitialRender.bind(this, slideClone));
  },

  afterInitialRender(slideClone) {
    var sliderElement = document.getElementById(this.elementId);
    sliderElement.insertBefore(slideClone, sliderElement.firstChild );
    this.setSliderHeight();
    this.positionIndicator(get(this, 'currentHue'));
  },

  setSliderHeight() {
    set(this, 'sliderHeight', document.getElementById(this.elementId).offsetHeight);
  },

  setSliderValue(event) {
    var mousePosition = this.mousePosition(event),
        hue = mousePosition.y / get(this, 'sliderHeight') * 360 + get(this, 'hueOffset');

    this.attrs.sliderValueChanged({h: hue, mousePosition: mousePosition});
    this.positionIndicator(hue);
  },

  positionIndicator(currentHue) {
    var pickerIndicator = document.getElementById('slide-indicator');
    pickerIndicator.style.top = this.calculateHuePosition(currentHue, pickerIndicator);
  },

  calculateHuePosition(currentHue, pickerIndicator) {
    return ((currentHue * get(this, 'sliderHeight')) / 360 - pickerIndicator.offsetHeight) + 'px';
  },

  click(event) {
    this.setSliderValue(event);
  },

  actions: {

    triggerSelectorDrag(event) {
      this.setSliderValue(event);
    }

  }

});
