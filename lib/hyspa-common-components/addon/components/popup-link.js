// import Ember from 'ember';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/external-link';


export default BaseComponent.extend({
  layout,
  classNames: ['external-link', 'primary-border-color-hover', 'popup-link'],

  linkPath: null,
  currentWindow: null,
  windowName: 'Generic',
  windowOptions: '', // See Window Options https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  dependent: true,
  resizable: true,
  scrollbars: true,
  titlebar: false,
  toolbar: false,
  menubar: false,
  width: 1200,
  height: 800,

  initComponent() {
    this.buildWindowOptions();
  },

  buildWindowOptions() {
    this.set('windowOptions', `location=0,dependent=1,resizable=1,scrollbars=1,titlebar=0,toolbar=0,menubar=0,width=${this.get('width')},height=${this.get('height')}`);
  },

  click() {
    var currentWindow = window.open(this.get('linkPath'), this.get('windowName'), this.get('windowOptions'));
    this.set('currentWindow', currentWindow);
  }
});
