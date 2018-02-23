import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/master-nav';

export default BaseComponent.extend({
  layout,
  tagName: 'nav',
  classNames: ['master-nav']
});
