import BasicButton from './basic-button';
import layout from '../templates/components/icon-button';

export default BasicButton.extend({
  layout,
  classNames: ['icon-button'],
  classNameBindings: ['buttonType']
});
