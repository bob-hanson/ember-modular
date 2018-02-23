import Component from '@ember/component';
import { get, computed } from '@ember/object';
import layout from '../templates/components/email-link';

export default Component.extend({
  layout,
  tagName: 'a',
  classNames: ['pointer'],
  attributeBindings: ['href'],

  href: computed('emailAddress', function () {
    return `mailto:${get(this, 'emailAddress')}`;
  })
});
