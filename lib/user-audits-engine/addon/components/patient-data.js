import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/patient-data';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['patient-data', 'audit-content'],
  classNameBindings: ['colSpan'],
  formObject: alias('currentApp.auditFormObject'),

  nextPath: alias('patientDataNextLink')

});
