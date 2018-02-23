import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/staples-button';

export default BaseComponent.extend({
  layout,
  classNames: ['staples-button'],
  classNameBindings: ['isActive:is-active'],
  isActive: false,

  click(event) {
    this.get('ripple').initRipple(event, this);
    this.toggleProperty('isActive');
  }

});
