import { get, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

import Override from './override';

export default BaseAuditboxFormObject.extend({
  reported: null,
  audited: null,
  dynamicObjectId: null,
  override: null,

  sourceCode: null,

  setFormProperties() {
    setProperties(this, {
      override: Override.create({ sourceOverride: get(this, 'sourceCode.override') })
    });
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        reported: null,
        audited: null
      });
    } else {
      setProperties(this, {
        reported: get(this, 'sourceCode.reported'),
        audited: get(this, 'sourceCode.audited'),
        dynamicObjectId: get(this, 'sourceCode.dynamicObjectId')
      });
    }
  }
});
