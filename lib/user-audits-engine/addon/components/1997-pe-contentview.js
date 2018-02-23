import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/1997-pe-contentview';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['1997-pe-contentview', 'audit-content'],
  classNameBindings: ['colSpan'],

  nextPath: alias('medicalDecisionRoute')
});
