import { get, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

import HcpcsCode from './hcpcs-code';
import Override from './override';

export default BaseAuditboxFormObject.extend({
  reported: null,
  audited: null,
  override: null,
  reportedMapOptions: null,
  dxCodes: null,

  sourceHcpcs: null,

  init() {
    this._super(...arguments);
    this.setFormProperties();
  },

  setFormProperties() {
    setProperties(this, {
      reported: HcpcsCode.create({ sourceCode: get(this, 'sourceHcpcs.reported'), dxCodes: get(this, 'dxCodes') }),
      audited: HcpcsCode.create({ sourceCode: get(this, 'sourceHcpcs.audited'), dxCodes: get(this, 'dxCodes') }),
      override: Override.create({ sourceOverride: get(this, 'sourceHcpcs.override') })
    });
  },

  addOrEditDxCodeMapOption(dxCode) {
    get(this, 'reported').addOrEditDxCodeMapOption(dxCode);
  },

  removeDxCodeMapOption(dynamicObjectId) {
    get(this, 'reported').removeDxCodeMapOption(dynamicObjectId);
  }

});
