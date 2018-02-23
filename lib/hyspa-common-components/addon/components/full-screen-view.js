import BaseComponent from 'hyspa-base-components/components/base-component';

export default BaseComponent.extend({
  classNames: ['full-screen-view'],
  classNameBindings: ['colSpan'],

  initComponent() {
    this.resizeFullScreen();
  },

  resizeFullScreen() {
    this.get('resizeService').resizeFullScreen();
  }

});
