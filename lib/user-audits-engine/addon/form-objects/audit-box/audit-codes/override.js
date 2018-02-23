import { get, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  scoring: null,
  reason: null,

  sourceOverride: null,

  init() {
    this._super(...arguments);
    this.setFormValues();
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        scoring: null,
        reason: null
      });
    } else {
      setProperties(this, {
        scoring: get(this, 'sourceOverride.scoring'),
        reason: get(this, 'sourceOverride.reason')
      })
    }
  }

});
