import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/content-view';

export default BaseComponent.extend({
  layout,
  classNames: ['content-view'],
  classNameBindings: ['colSpan'],

  padding: '2,2,2,2',

  initComponent() {
    this.resizeView();
  },

  resizeView() {
    this.get('resizeService').resizeApp();
  }

});
