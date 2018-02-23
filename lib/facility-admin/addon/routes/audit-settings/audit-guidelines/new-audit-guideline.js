import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';

export default FacilityBaseRoute.extend({

  activate() {
    get(this, 'facilityAudit').set('isNotCreatingGuideLine', false);

  },

  model() {
    return this.modelFor('audit-settings.audit-guidelines');
  },

  setupController(controller, currentGuidelines) {
    this._super(...arguments);
    controller.set('currentGuidelines', currentGuidelines);
  },

  deactivate() {
    get(this, 'facilityAudit').set('isNotCreatingGuideLine', true);
  }

});
