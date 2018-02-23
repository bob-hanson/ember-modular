import BaseComponent from 'hyspa-base-components/components/base-component';
import { notEmpty } from '@ember/object/computed';
import layout from '../templates/components/hyspa-light-table-action-menu';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-light-table-action-menu'],
  padding: '0,2,0,0',

  hasIcon: notEmpty('menuItem.fontType'),

  actions: {
    triggerClickAction(menuItem) {
      menuItem.action(this); // "this" is the context that contains the table and things like tableActions
    }
  }
});
