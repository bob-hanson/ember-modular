import { set } from '@ember/object';
import BaseFixtureData from './base-fixture-data';

import FacilityEncounters from './source-of-truth/facility-encounters';

export default BaseFixtureData.extend({
  setupData() {
    set(this, 'data', FacilityEncounters);
  },

  setupIncludes() {
    // set(this, 'includes', FacilityProjects.concat(FacilityCoders));
  }

});
