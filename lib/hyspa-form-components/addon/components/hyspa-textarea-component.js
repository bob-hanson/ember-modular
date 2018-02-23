import BaseInput from 'hyspa-base-components/components/base-input';
import layout from '../templates/components/hyspa-textarea-component';

export default BaseInput.extend({
  layout,
  classNames: ['textarea-component', 'input-component', 'form-control'],
  maxlength: '500',
  rows: 6
});
