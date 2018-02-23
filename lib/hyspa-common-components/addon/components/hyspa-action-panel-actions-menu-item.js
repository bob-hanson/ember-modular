import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import layout from '../templates/components/hyspa-action-panel-actions-menu-item';

export default BaseComponent.extend({
  layout,
  tagName: 'li',
  classNames: ['hyspa-action-panel-actions-menu-item'],
  classNameBindings: ['colSpan'],
  padding: '1,0,0,0',
  componentToRender: null,

  sendClickAction() {
    if (this.attrs.clickAction) {
      this.attrs.clickAction(get(this, 'componentToRender'));
    }
  },

  actions: {
    triggerClick() {
      this.sendClickAction();
    }
  }

});
