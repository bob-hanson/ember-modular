import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { isEmpty } from '@ember/utils';

export default FacilityBaseRoute.extend({

  newAuditGuidelinePath: alias('facilityAudit.newAuditGuidelinePath'),

  model() {
    return get(this, 'store').findAll('facility-guideline')
          .then(this.checkForGuidelines.bind(this));
  },

  setupController(controller, currentGuidelines) {
    this._super(...arguments);
    controller.set('currentGuidelines', currentGuidelines);
  },

  checkForGuidelines(currentGuidelines) {
    if(isEmpty(currentGuidelines)) {
      this.transitionTo(get(this, 'newAuditGuidelinePath'));
    } else {
      return currentGuidelines;
    }
  },

  debugFormData(fd) {
    var pair;
    for (pair of fd.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  },

  actions: {
    triggerFormSubmit(id, formData) {
      console.log('route', formData);
      this.debugFormData(formData)
    },
    triggerFormCancel() {
      alert('cancelling');
    }
  }

});
