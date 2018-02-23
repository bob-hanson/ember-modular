import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/slide-toggle';

export default BaseComponent.extend({
  layout,
  classNames: ['slide', 'quinary-background-color'],

  click(event) {
    this.get('ripple').initRipple(event, this);
    if (this.attrs.clickAction) {
      this.attrs.clickAction();
    }
  }

});
