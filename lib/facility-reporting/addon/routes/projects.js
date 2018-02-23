import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get } from '@ember/object';


export default FacilityBaseRoute.extend({

  model() {
    return get(this, 'facilityAuditRepository')
          .fetchStoreModels('facility-project');
  }

});
