import BaseInput from 'hyspa-base-components/components/base-input';
import layout from '../templates/components/form-group';

export default BaseInput.extend({
  layout,
  classNames: ['form-group'],
  classNameBindings: ['colSpan', 'isInvalid:is-invalid']
});
