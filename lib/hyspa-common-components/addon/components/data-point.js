import { computed, get } from '@ember/object';
import { and, notEmpty, not } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/data-point';

export default BaseComponent.extend({
  layout,
  classNames: ['data-point'],
  classNameBindings: ['colSpan', 'vertical', 'horizontal'],

  label: null,
  value: null,
  arrangement: null,

  emailAddress: null,
  hasEmailAddress: notEmpty('emailAddress'),

  hasLabelIcon: notEmpty('labelIcon'),
  hasValueIcon: notEmpty('valueIcon'),
  horizontal: computed(function() {
    return get(this, 'arrangement') === 'horizontal';
  }),
  vertical: not('horizontal'),

  clickAction: null,
  actionModel: null,
  hasClickAction: notEmpty('clickAction'),

  clickEnabled: and('isEnabled', 'hasClickAction'),

  click() {
    if (get(this, 'clickEnabled')) {
      if (isPresent(get(this, 'actionModel'))) {
        this.attrs.clickAction(get(this, 'actionModel'));
      } else {
        this.attrs.clickAction();
      }
    }
  }

});
