import Object from '@ember/object';
import { and } from '@ember/object/computed';
import { computed, set, get, setProperties } from '@ember/object';
import { once } from '@ember/runloop';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';
import AuditBoxSharedData from '../shared/audit-box-shared-data';

export default BaseAuditboxFormObject.extend({
  section: 'timeBasedCoding',

  serviceType: 'null',
  serviceTypeObject: null,
  visitType: null,

  revealTotalFaceTime: false,
  moreThanHalfCounseling: false,
  documentationDescribesContent: false,

  totalFaceTime: null,

  serviceTypeOptions: [],
  visitTypeOptions: [],

  changedByPatientData: false,

  allCriteriaTrue: and('revealTotalFaceTime', 'moreThanHalfCounseling', 'documentationDescribesContent'),

  visitTypeOptionsFiltered: computed('selectedServiceTypeOption', function() {
    var self = this;
    once(this, 'resetVisitType');
    return get(this, 'visitTypeOptions').filter(function(visitTypeOption) {
      return visitTypeOption.serviceTypes.includes(self.get('selectedServiceTypeOption.serviceTypeId'));
    });
  }),

  setFormProperties() {
    setProperties(this, {
      serviceTypeOptions: AuditBoxSharedData.getServiceTypeOptions().filterBy('timeBased', true),
      visitTypeOptions: AuditBoxSharedData.getVisitTypeOptions(),
      revealTotalFaceTimeOptions: this.getCriteriaOptions(),
      moreThanHalfCounselingOptions: this.getCriteriaOptions(),
      documentationDescribesContentOptions: this.getCriteriaOptions()
    });
  },

  getCriteriaOptions() {
    return [
      Object.create({ optionName: 'Yes', optionValue: true }),
      Object.create({ optionName: 'No', optionValue: false })
    ]
  },

  resetVisitType() {
    set(this, 'visitType', null);
  }

});
