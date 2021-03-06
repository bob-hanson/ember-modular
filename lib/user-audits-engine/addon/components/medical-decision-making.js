import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/medical-decision-making';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['medical-decision-making', 'audit-content'],
  classNameBindings: ['colSpan'],
  nextPath: alias('timeBasedCodingRoute')
});
