import { computed, get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from '../templates/components/pro-navigation';

export default BaseComponent.extend(
  AuditNavigation, {
  layout,
  userAuditState: service(),

  formObject: alias('currentApp.auditFormObject'),

  examNavigationPath: computed('userAuditState.currentExamPath', function() {
    return get(this, 'userAuditState.is95Path') ? get(this, 'exam95') : get(this, 'exam97');
  }),

  actions: {

    triggerExamSelect(selectedExamKey) {
      set(this, 'formObject.examination.selectedExamKey', selectedExamKey);
    }
  }

});
