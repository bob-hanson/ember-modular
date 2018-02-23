import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/component-header';

export default BaseComponent.extend({
  layout,
  tagName: 'h2',
  classNames: ['component-header'],
  classNameBindings: ['colSpan'],
  headerText: ''
});
