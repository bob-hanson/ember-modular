import { computed, get } from "@ember/object";
import { equal } from "@ember/object/computed";
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  name: attr('string'),
  productCode: attr('string'),
  legacyId: attr('string'),
  isArchived: attr('boolean'),
  isDeleted: attr('boolean'),

  isAdmin: equal('productCode', 'Admin'),
  isCompliance: equal('productCode', 'ComplianceManager'),
  isAudit: equal('productCode', 'AuditManager'),
  isFacility: equal('productCode', 'FacilityManager'),
  isAnalytics: equal('productCode', 'ProviderAnalytics'),
  isLearning: equal('productCode', 'LearningCenter'),

  selectedKey: computed('productCode', function () {
    return get(this, 'productCode') + 'ProductSelected';
  })

});
