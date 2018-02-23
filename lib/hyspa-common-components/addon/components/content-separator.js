import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/content-separator';

export default BaseComponent.extend({
  layout,
  classNames: ['content-separator'],
  classNameBindings: ['colSpan'],
  padding: '2,0,2,0'
});
