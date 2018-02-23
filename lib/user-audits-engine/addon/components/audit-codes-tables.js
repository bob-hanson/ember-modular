import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/audit-codes-tables';

export default BaseComponent.extend({
  layout,
  classNames: ['audit-codes-tables'],
  classNameBindings: ['colSpan'],
  padding: '0,0,2,0',
  reportedOnly: true,
  auditCodes: alias('currentApp.auditFormObject.auditCodes'),

  addDxCode() {
    get(this, 'auditCodes').addDxCode();
  },

  removeDxCode(dxCode) {
    get(this, 'currentDxCodes').removeObject(dxCode);
    get(this, 'auditCodes').removeDxCodeMapOption(dxCode.dynamicObjectId);
  },

  addHcpcsCode() {
    get(this, 'auditCodes').addHcpcsCode();
  },

  removeHcpcsCode(hcpcsCode) {
    get(this, 'auditCodes').removeHcpcsCode(hcpcsCode);
  },

  addOrEditDxCodeMapOption(dxCode) {
    get(this, 'auditCodes').addOrEditDxCodeMapOption(dxCode);
  },

  actions: {
    triggerAddDxCode() {
      this.addDxCode();
    },
    triggerRemoveDxCode(dxCode) {
      this.removeDxCode(dxCode);
    },
    triggerAddHcpcsCode() {
      this.addHcpcsCode();
    },
    triggerRemoveHcpcsCode(hcpcsCode) {
      this.removeHcpcsCode(hcpcsCode);
    },
    triggerDxCodeChange(dxCode) {
      this.addOrEditDxCodeMapOption(dxCode);
    }
  }

});
