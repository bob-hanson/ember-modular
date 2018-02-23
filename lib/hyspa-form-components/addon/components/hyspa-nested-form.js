import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-nested-form';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-nested-form'],
  classNameBindings: ['colSpan'],

  initComponent() {
    if (this.attrs.initAction) {
      this.attrs.initAction(this);
    }
  }
});
