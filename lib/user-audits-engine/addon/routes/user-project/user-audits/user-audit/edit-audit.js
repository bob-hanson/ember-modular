import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import BaseAuditBoxFormObject from 'user-audits-engine/form-objects/audit-box/base-objects/base-auditbox-form-object';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  userAuditState: service(),

  model() {
    return get(this, 'repository').fetchAuditBoxPayload();
  },

  setupController(controller, model) {
    this._super(controller, model);
    set(controller, 'currentEncounters', this.modelFor('user-project.user-audits'));
  },

  afterModel(auditBoxSourceObject) {
    this.initAuditFormObject(auditBoxSourceObject);
  },

  initAuditFormObject(auditBoxSourceObject) {
    BaseAuditBoxFormObject.reopen(this.formObjectDefaults(auditBoxSourceObject));
    get(this, 'currentApp').set('auditBoxSourceObject', auditBoxSourceObject);
    get(this, 'userAuditState').set('currentExamPath', auditBoxSourceObject.auditEncounterJson.examination.selected_exam_key);
    get(this, 'userAuditState').toggleWorkQueue();
  },

  destroyAuditFormObject() {
    get(this, 'currentApp').set('auditFormObject', null);
    get(this, 'currentApp').set('auditBoxSourceObject', null);
    BaseAuditBoxFormObject.reopen(this.formObjectNullify());
    get(this, 'userAuditState').toggleWorkQueue();
  },

  deactivate() {
    this._super(...arguments);
    this.destroyAuditFormObject();
  },

  formObjectDefaults(auditBoxSourceObject) {
    return {
      defaults: {
        jsonPayload: auditBoxSourceObject
      }
    }
  },

  formObjectNullify() {
    return {
      defaults: null
    }
  }

});
