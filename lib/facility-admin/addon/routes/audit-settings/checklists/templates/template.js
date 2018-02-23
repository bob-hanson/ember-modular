import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  model(params) {
    return get(this, 'store').findRecord('facility-checklist-template', params.templateSlug);
  },

  setupController(controller, currentTemplate) {
    this._super(...arguments);
    controller.set('currentCategory', currentTemplate);
  },

  activate() {
    get(this, 'facilityAudit').set('isViewingChecklistTemplate', true);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isViewingChecklistTemplate', false);
  }

});
