import { not, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/icon-link';

export default BaseComponent.extend({
  layout,
  tagName: 'li',
  classNames: ['icon-link'],
  linkObject: null,
  iconLeft: true,
  iconRight: not('iconLeft'),

  hasLinkText: notEmpty('linkText')

});
