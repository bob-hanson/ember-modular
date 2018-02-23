import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/content-pagination';

export default BaseComponent.extend({
  layout,
  classNames: ['content-pagination'],
  classNameBindings: ['colSpan']
});
