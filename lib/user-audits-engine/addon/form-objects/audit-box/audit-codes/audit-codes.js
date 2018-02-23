import { get, setProperties } from '@ember/object';
import Guid from 'ember-cli-guid';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

import DxCode from './dx-code';
import HcpcsCodeWrapper from './hcpcs-code-wrapper';

export default BaseAuditboxFormObject.extend({
  dxCodes: null,
  hcpcsCodes: null,

  setFormProperties() {
    setProperties(this, {
      dxCodes: [],
      hcpcsCodes: []
    });
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        dxCodes: [],
        hcpcsCodes: []
      });
    } else {
      let auditCodesJson = get(this, 'jsonPayload.auditCodes');
      this.setDxCodesDaults(auditCodesJson);
      this.setHcpcsCodesDefaults(auditCodesJson);
    }
  },

  setDxCodesDaults(auditCodesJson) {
    var self = this;
    auditCodesJson.diagnosisCodes.forEach(function(dxCode) {
      get(self, 'dxCodes').pushObject(DxCode.create({
        sourceCode: dxCode
      }));
    });
  },

  setHcpcsCodesDefaults(auditCodesJson) {
    var self = this;
    auditCodesJson.hcpcsCodes.forEach(function(hcpcsCode) {
      get(self, 'hcpcsCodes').pushObject(HcpcsCodeWrapper.create({
        sourceHcpcs: hcpcsCode,
        dxCodes: get(self, 'dxCodes')
      }));
    });
  },

  addDxCode() {
    get(this, 'dxCodes').pushObject(DxCode.create({
      sourceCode: {
        dynamicObjectId: Guid.create()
      }
    }));
  },

  addHcpcsCode() {
    get(this, 'hcpcsCodes').pushObject(HcpcsCodeWrapper.create({
      dxCodes: get(this, 'dxCodes')
    }));
  },

  removeHcpcsCode(hcpcsCode) {
    get(this, 'hcpcsCodes').removeObject(hcpcsCode);
  },

  addOrEditDxCodeMapOption(dxCode) {
    get(this, 'hcpcsCodes').forEach(function(hcpcsCode) {
      hcpcsCode.addOrEditDxCodeMapOption(dxCode);
    });
  },

  removeDxCodeMapOption(dynamicObjectId) {
    get(this, 'hcpcsCodes').forEach(function(hcpcsCode) {
      hcpcsCode.removeDxCodeMapOption(dynamicObjectId);
    });
  }

});
