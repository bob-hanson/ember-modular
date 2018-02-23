import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import AuditBoxFormObject from '../form-objects/audit-box/audit-box-form-object';
import layout from '../templates/components/audit-box';

export default BaseComponent.extend({
  layout,
  classNames: ['audit-box'],
  classNameBindings: ['colSpan'],

  formObject: alias('currentApp.auditFormObject'),
  currentAudit: null,
  isViewingAuditList: false,

  initComponent() {
    this._super(...arguments);
    this.initAuditFormObject();
  },

  initAuditFormObject() {
    get(this, 'currentApp').set('auditFormObject', AuditBoxFormObject.create());
  },

  toggleAuditList() {
    this.toggleProperty('isViewingAuditList');
  },

  actions: {

    triggerViewAuditList() {
      this.toggleAuditList();
    }

  }

});
