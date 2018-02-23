import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import layout from '../templates/components/form-view';

export default BaseComponent.extend({
  layout,
  classNames: ['form-view'],
  classNameBindings: ['colSpan'],

  padding: '2,0,0,0',

  initComponent() {
    this.resizeView();
    this.initForm();
  },

  initForm() { }, // Stub

  resizeView() {
    get(this, 'resizeService').resizeApp();
  }

});
