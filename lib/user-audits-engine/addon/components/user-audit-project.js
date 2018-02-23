import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-audit-project';

export default BaseComponent.extend({
  layout,
  classNames: ['user-audit-project'],
  classNameBindings: ['colSpan'],
  userAuditState: service()
});
