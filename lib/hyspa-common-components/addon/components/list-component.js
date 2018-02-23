import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/list-component';

export default BaseComponent.extend({
  layout,
  classNames: ['list-component'],
  classNameBindings: ['colSpan', 'isSortable'],

  listWrapperElement: 'ul'
});
