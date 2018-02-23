import { computed, get } from '@ember/object';
import DraggableObject from 'ember-drag-drop/components/draggable-object';
import HoverState from 'hyspa-base-components/mixins/hover-state';
import layout from '../templates/components/hyspa-draggable-object';

export default DraggableObject.extend(
  HoverState, {
  layout,
  classNames: ['hyspa-draggable-object'],
  classNameBindings: ['hoverClasses'],

  hoverClasses: computed('isHovering', function() {
    if (get(this, 'isHovering')) {
      return 'primary-background-color is-hovering';
    }
  })

});
