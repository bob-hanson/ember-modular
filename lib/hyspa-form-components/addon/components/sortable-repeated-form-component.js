import HyspaDraggableObject from 'hyspa-common-components/components/hyspa-draggable-object';
import HoverState from 'hyspa-base-components/mixins/hover-state';
import RepeatedFormComponentMixin from 'hyspa-form-components/mixins/repeated-form-component-mixin'
import layout from '../templates/components/sortable-repeated-form-component';

export default HyspaDraggableObject.extend(
  HoverState,
  RepeatedFormComponentMixin, {
  layout,
  classNames: ['sortable-repeated-form-component'],
  classNameBindings: ['colSpan']
});
