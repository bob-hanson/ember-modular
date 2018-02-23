import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/time-based-coding';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['time-based-coding', 'audit-content'],
  classNameBindings: ['colSpan'],

  nextPath: alias('criticalCareRoute')

});
