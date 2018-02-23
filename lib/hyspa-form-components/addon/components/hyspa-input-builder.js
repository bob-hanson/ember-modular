import { notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-input-builder';

export default BaseComponent.extend({
  layout,
  classNames: ['form-control'],
  classNameBindings: ['colSpan'],
  padding: '1,0,1,0',
  isFormInput: true,

  hasLabel: notEmpty('labelText'),

  initComponent() {
    if (this.attrs.initAction) {
      this.attrs.initAction(this);
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this.attrs.destroyAction) {
      this.attrs.destroyAction(this);
    }
  }
  
});
