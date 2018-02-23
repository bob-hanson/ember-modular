import { setProperties } from '@ember/object';
import { equal, notEmpty, and } from '@ember/object/computed';
import BaseAuditboxFormObject from '../../../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  optionName: null,
  optionValue: null,
  selectedExamElement: null,
  untrackedSelectedExamElement: null,
  examElementOptions: null,
  organOptions: null,
  bodyOptions: null,
  selectedBodyOptions: null,
  selectedOrganOptions: null,
  multipleAreasOptions: null,
  selectedMultipleAreas: null,
  detailsSelected: equal('selectedExamElement', 'details'),
  hasMultipleAreasRadioButton: notEmpty('multipleAreasOptions'),
  detailsSelectedAndHasMultipeAreasRadioButton: and('detailsSelected', 'hasMultipleAreasRadioButton'),

  init() {
    this._super(...arguments);
    this.setCollections();
  },

  setCollections() {
    setProperties(this, {
      examElementOptions: [],
      organOptions: [],
      bodyOptions: [],
      selectedBodyOptions: [],
      selectedOrganOptions: [],
      multipleAreasOptions: [],
      selectedAdditionalOrganOptions: []
    });
  }

});
