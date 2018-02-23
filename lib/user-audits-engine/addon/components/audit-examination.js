import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/audit-examination';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['audit-examination', 'audit-content'],
  classNameBindings: ['colSpan'],

  nextPath: alias('medicalDecisionRoute')
});
