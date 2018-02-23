import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/audit-info-windows';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  auditBoxHelpMessages: service(),
  classNames: ['audit-info-windows', 'audit-secondary-view', 'primary-background-color'],
  classNameBindings: ['colSpan'],

  currentInfo: computed('auditBoxHelpMessages', function () {
    return htmlSafe(get(this, 'auditBoxHelpMessages.auditBoxInfo.content'));
  })

});
