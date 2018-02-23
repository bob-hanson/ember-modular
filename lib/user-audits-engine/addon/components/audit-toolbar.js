import { computed, get } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/audit-toolbar';

export default BaseComponent.extend({
  layout,
  tagName: 'ul',
  classNames: ['audit-toolbar'],

  linkUrl: computed('currentSession.auditManagerBaseUrl', function () {
    return `${get(this, 'currentSession.auditManagerBaseUrl')}/audit_emtool_management/`;
  }),

  infoLink: computed('currentAudit', function () {
    return `${get(this, 'linkUrl')}/audit_tool/close#info`;
  }),

  guidelineLink: computed('currentAudit', function () {
    return `${get(this, 'linkUrl')}part_guideline/view/${get(this, 'currentAudit.auditId')}`;
  }),

  missingInfoLink: computed('currentAudit', function () {
    return `${get(this, 'linkUrl')}missing_info_request/${get(this, 'currentAudit.auditId')}/1/`;
  }),

  internalNoteLink: computed('currentAudit', function () {
    return `${get(this, 'linkUrl')}internal_notes/${get(this, 'currentAudit.auditId')}/2/`;
  }),

  chartCommentsLink: computed('currentAudit', function () {
    return `${get(this, 'linkUrl')}comments/${get(this, 'currentAudit.auditId')}`;
  }),

  keyFindingsLink: computed('currentAudit', function () {
    return `${get(this, 'linkUrl')}keycomments/47793`;
  })

  // infoLink: 'https://demoe.auditmanager.healthicity.com/audit_tool/close#info',
  // guidelineLink: 'https://demoe.auditmanager.healthicity.com/audit_emtool_management/part_guideline/view/631746',
  // missingInfoLink: 'https://demoe.auditmanager.healthicity.com/audit_emtool_management/missing_info_request/631746/1/',
  // internalNoteLink: 'https://demoe.auditmanager.healthicity.com/audit_emtool_management/internal_notes/631746/2/',
  // chartCommentsLink: 'https://demoe.auditmanager.healthicity.com/audit_emtool_management/comments/631746',
  // keyFindingsLink: 'https://demoe.auditmanager.healthicity.com/audit_emtool_management/keycomments/47793'


});
