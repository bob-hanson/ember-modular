import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/repeated-item-removal-link';

export default BaseComponent.extend({
  layout,
  classNames: ['repeated-item-removal-link'],

  click() {
    this.attrs.removeItemAction(this.get('removedObject'));
  }

});
