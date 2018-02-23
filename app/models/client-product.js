import { computed, get } from '@ember/object';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr } = DS;

export default BaseModel.extend({
  accessType: attr('string'),
  trialEndDate: attr('date'),
  productCode: attr('string'),

  productKey: computed('productCode', function () {
    switch(get(this, 'productCode')) {
      case 'ComplianceManager':
        return 'cm';
      case 'AuditManager':
        return 'am';
      case 'FacilityManager':
        return 'fm';
      case 'ProviderAnalytics':
        return 'pa';
      case 'LearningCenter':
        return 'lc';                
    }
  })
});
