import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/empty-message';
import { notEmpty } from '@ember/object/computed';

export default BaseComponent.extend({
  layout,
  classNames: ['empty-message'],
  classNameBindings: ['colSpan'],
  messageHeader: '',
  hasHeading: notEmpty('messageHeader'),
  message: 'No Results',
  padding: '1,2,1,2'

});
