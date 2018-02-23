import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/audit-codes';

export default ContentView.extend({
  layout,
  classNames: ['audit-codes', 'audit-content'],
  classNameBindings: ['colSpan'],
  nextPath: 'user-project.user-audits.user-audit.edit-audit.edit-patient-data'
});
