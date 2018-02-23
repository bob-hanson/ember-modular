import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/master-navigation-item';

export default BaseComponent.extend({
  tagName: 'li',
  layout,
  classNames: ['master-navigation-item'],
  isExternal: false,
  isAuthorized: true,
  padding: '0,2,0,2'
});
