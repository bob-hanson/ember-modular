import Object, { set } from '@ember/object';
import BaseAuditBoxFormObject from '../../../base-objects/base-auditbox-form-object';

export default BaseAuditBoxFormObject.extend({
  optionName: null,
  optionValue: null,
  selectedSpecialty: null,
  selectedExamElement: null,
  examElementOptions: null,
  bodyAreas: null,

  init() {
    this._super(...arguments);
    this.setExamElementOptions();
  },

  setExamElementOptions() {
    set(this, 'examElementOptions', [
      Object.create({ optionName: 'Details', optionValue: 'details' }),
      Object.create({ optionName: '1-5', optionValue: 'PF' }),
      Object.create({ optionName: '6-11', optionValue: 'EPF' }),
      Object.create({ optionName: '12+', optionValue: 'Det' }),
      Object.create({ optionName: 'All in shaded border +1', optionValue: 'Comp', allInShaded: true })
    ]);
  }

});
