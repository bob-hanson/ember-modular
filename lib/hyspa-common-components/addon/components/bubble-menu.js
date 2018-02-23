import BubbleElement from './bubble-element';
import layout from '../templates/components/bubble-menu';

export default BubbleElement.extend({
  layout,
  classNames: ['bubble-menu', 'primary-border-color'],

  click(event) {
    event.stopPropagation();
  }

});
