import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/definition-list';

export default BaseComponent.extend({
  layout,
  classNames: ['definition-list'],
  headerTag: 'h3'
});
