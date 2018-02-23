import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/organization-user-detail';

export default BaseComponent.extend({
  layout,
  classNames:['organization-user-detail'],
  classNameBindings:['colSpan'],
  percentageWidth: 25,

  actions: {

    triggerResetPassword() {

    }

  }
});
