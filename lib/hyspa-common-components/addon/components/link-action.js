import { get } from '@ember/object';
import { and, notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/link-action';

export default BaseComponent.extend({
  layout,
  classNames: ['link-action'],
  classNameBindings: ['colSpan', 'displayAsIconLink:icon-link'],

  linkText: null,
  hasLinkText: notEmpty('linkText'),

  clickAction: null,
  actionModel: null,
  hasClickAction: notEmpty('clickAction'),

  clickEnabled: and('isEnabled', 'hasClickAction'),

  click() {
    if (get(this, 'clickAction') && get(this, 'isEnabled')) {
      if (isPresent(get(this, 'actionModel'))) {
        this.attrs.clickAction(get(this, 'actionModel'));
      } else {
        this.attrs.clickAction();
      }
    }
  }

});
