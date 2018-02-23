import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';
import ContentView from 'hyspa-common-components/components/content-view';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import layout from 'user-audits-engine/templates/components/audit-secondary-information';

export default ContentView.extend(
  AuditNavigation, {
  layout,
  auditBoxHelpMessages: service(),
  classNames: ['audit-secondary-info', 'audit-secondary-view', 'secondary-background-color'],
  classNameBindings: ['colSpan'],
  padding: '0,0,0,0',

  isViewingComponent: true,
  isViewingInfo: false,

  componentType: 'audit-how-to',

  setComponentType(componentType) {
    set(this, 'componentType', componentType);
  },

  currentInfo: computed('auditBoxHelpMessages', function () {
    return htmlSafe(get(this, 'auditBoxHelpMessages.auditBoxInfo.content'));
  }),

  actions: {

    triggerComponentChange(componentType) {
      this.setComponentType(componentType);
    }

  }

});
