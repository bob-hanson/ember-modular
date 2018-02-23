import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/external-link';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['external-link', 'primary-border-color-hover'],
  attributeBindings: ['href', 'title'],
  href: alias('linkPath'),
  title: alias('linkText')
});
