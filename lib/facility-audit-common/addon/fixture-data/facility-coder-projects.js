import { set } from '@ember/object';
import BaseFixtureData from './base-fixture-data';

import FacilityCoderProjects from './source-of-truth/facility-coder-projects';
import FacilityProjects from './source-of-truth/facility-projects';
import FacilityCoders from './source-of-truth/facility-coders';

export default BaseFixtureData.extend({
  setupData() {
    set(this, 'data', FacilityCoderProjects);
  },

  setupIncludes() {
    set(this, 'includes', FacilityProjects.concat(FacilityCoders));
  }

});
