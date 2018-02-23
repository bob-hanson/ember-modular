import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/critical-care-services';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['critical-care-services', 'audit-content'],
  classNameBindings: ['colSpan'],

  nextPath: alias('proceduresRoute')

});
