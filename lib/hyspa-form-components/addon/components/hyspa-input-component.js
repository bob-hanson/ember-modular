import BaseInput from 'hyspa-base-components/components/base-input';
import layout from '../templates/components/hyspa-input-component';

export default BaseInput.extend({
  layout,
  classNames: ['input-component', 'form-control'],
  classNameBindings: ['hasLabel'],
  isTextArea: false,
  type: 'text',

  keyUp() {
    this._super(...arguments);
    if (this.attrs.keyUpAction) {
      this.attrs.keyUpAction();
    }
  }

});
