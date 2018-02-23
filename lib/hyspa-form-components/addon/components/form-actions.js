import { and, not, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/form-actions';

export default BaseComponent.extend({
  layout,
  classNames: ['form-actions primary-border-color'],
  classNameBindings: ['colSpan'],
  showBubbleTip: false,
  primaryIsEnabled: false,
  primaryIsDisabled: not('primaryIsEnabled'),
  primaryIsHovered: false,
  primaryIsDisabledAndHoveredAndWantsBubbleTip: and('primaryIsDisabled', 'primaryIsHovered', 'showBubbleTip'),

  secondaryButtonText: null,
  hasSecondaryButton: notEmpty('secondaryButtonText'),

  actions: {

    triggerPrimaryMouseMove() {
      this.toggleProperty('primaryIsHovered');
    }

  }

});
