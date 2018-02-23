import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/required-tip';

export default BaseComponent.extend({
  layout,
  tagName: 'p',
  classNames: ['required-tip'],
  classNameBindings: ['colSpan'],
  message: 'This is a tip'
});
