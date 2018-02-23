import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/audit-history';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  classNames: ['audit-history', 'audit-content'],
  classNameBindings: ['colSpan'],
  userAuditState: service(),

  examNavigationPath: computed('userAuditState.currentExamPath', function() {
    return get(this, 'userAuditState.is95Path') ? get(this, 'exam95') : get(this, 'exam97');
  }),

  nextPath: alias('examNavigationPath')
});
