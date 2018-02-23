import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository')
          .fetchStoreModels('facility-audit');
  },

  setupController(controller, currentAudits) {
    this._super(...arguments);
    set(controller, 'currentCoders', this.filteredCoders(currentAudits));
  },

  filteredCoders(currentCoderProjects) {
    var coders = this.modelFor('coders'),
      filteredCoderProjectIds = currentCoderProjects.filterBy('isInpatient', false)
                                                    .map(project => get(project, 'facilityCoderId'))
                                                    .uniq(),
      filteredCoders = coders.filter(coder => filteredCoderProjectIds.includes(Number(coder.id)));
      filteredCoders.setEach('isViewingAsInpatient', false);
    return filteredCoders
  }

});
