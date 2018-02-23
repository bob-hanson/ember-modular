import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/content-panel';

export default BaseComponent.extend({
  layout,
  classNames: ['content-panel'],
  classNameBindings: ['colSpan']
});
