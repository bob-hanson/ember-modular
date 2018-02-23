import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/checklist-category-details';

export default BaseComponent.extend({
  layout,
  classNames: ['checklist-category-details'],
  classNameBindings: ['colSpan']
});
