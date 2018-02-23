import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/coder-details';
import { computed, get } from '@ember/object';
import { isPresent } from '@ember/utils';

export default BaseComponent.extend({
  layout,

  listedSpecialties: computed('currentCoder.specialtyIds', function() {
    if (isPresent(get(this, 'currentCoder.specialtyIds'))) {
      return get(this, 'store').findAll('audit-specialty')
        .then(this.stringifySpecialties.bind(this));
    } else {
      return "No Specialty Listed";
    }
  }),

  stringifySpecialties(specialties) {
    return get(this, 'currentCoder.specialtyIds').map(id => specialties.mapBy('id', id)).join(", ")
  }
});
