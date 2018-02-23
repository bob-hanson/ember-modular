import BaseComponent from 'hyspa-base-components/components/base-component';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/facility-navigation';

export default BaseComponent.extend(
  AuditNavigation, {
  layout
});
