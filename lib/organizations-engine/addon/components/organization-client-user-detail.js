import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/organization-client-user-detail';

export default BaseComponent.extend({
  layout,
  classNames:['organization-client-user-detail'],
  classNameBindings:['colSpan'],
  percentageWidth: 25,

  actions: {

    triggerResetPassword() {

    }

  }
});
