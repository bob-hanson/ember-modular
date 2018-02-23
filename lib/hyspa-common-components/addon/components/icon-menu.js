import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/icon-menu';

export default BaseComponent.extend({
  layout,
  classNames: ['icon-menu'],
  classNameBindings: ['positionRight'],
  isViewingMenu: false,
  usePrimaryColor: false,

  click() {
    this.set('isViewingMenu', true);
  },

  mouseLeave() {
    this.set('isViewingMenu', false);
  }

});
