import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/input-validation';

export default BaseComponent.extend({
  layout,
  classNames: ['validation-icon'],
  validationMessage: 'Value required.'
});
