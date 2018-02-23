import { get } from '@ember/object';
import Service, { inject as service } from '@ember/service';

import FacilityCoderProjects from '../fixture-data/facility-coder-projects';
import FacilityEncounters from '../fixture-data/facility-encounters';

export default Service.extend({
  fixtures: service(),

  fetchAllFacilityCoderProjects(timer) {
    return get(this, 'fixtures').buildFixturePromise(FacilityCoderProjects.create().fetchAll(true), timer);
  },

  fetchAllFacilityEncounters(timer) {
    return get(this, 'fixtures').buildFixturePromise(FacilityEncounters.create().fetchAll(false), timer);
  }

});
