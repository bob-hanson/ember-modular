import { sumProperties } from 'hyspa-utilities';
import { ifThenElseWithKeys } from 'ember-macaroni';
import BaseAuditboxFormObject from '../../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  reviewClinicalTests: false,
  reviewRadiologyTests: false,
  reviewMedicineTests: false,
  physicianDiscussion: false,
  obtainOldRecords: false,
  reviewOldRecords: false,
  independentVisualization: false,

  zeroFactor: 0,

  reviewClinicalTestsFactor: 1,
  reviewRadiologyTestsFactor: 1,
  reviewMedicineTestsFactor: 1,
  physicianDiscussionFactor: 1,
  obtainOldRecordsFactor: 1,
  reviewOldRecordsFactor: 2,
  independentVisualizationFactor: 2,

  reviewClinicalTestsValue: ifThenElseWithKeys('reviewClinicalTests', 'reviewClinicalTestsFactor', 'zeroFactor'),
  reviewRadiologyTestsValue: ifThenElseWithKeys('reviewRadiologyTests', 'reviewRadiologyTestsFactor', 'zeroFactor'),
  reviewMedicineTestsValue: ifThenElseWithKeys('reviewMedicineTests', 'reviewMedicineTestsFactor', 'zeroFactor'),
  physicianDiscussionValue: ifThenElseWithKeys('physicianDiscussion', 'physicianDiscussionFactor', 'zeroFactor'),
  obtainOldRecordsValue: ifThenElseWithKeys('obtainOldRecords', 'obtainOldRecordsFactor', 'zeroFactor'),
  reviewOldRecordsValue: ifThenElseWithKeys('reviewOldRecords', 'reviewOldRecordsFactor', 'zeroFactor'),
  independentVisualizationValue: ifThenElseWithKeys('independentVisualization', 'independentVisualizationFactor', 'zeroFactor'),

  complexityTotal: sumProperties('reviewClinicalTestsValue', 'reviewRadiologyTestsValue', 'reviewMedicineTestsValue', 'physicianDiscussionValue', 'obtainOldRecordsValue', 'reviewOldRecordsValue', 'independentVisualizationValue'),

  setFormValues(clear) {
    if (clear) {
      this.setProperties({
        reviewClinicalTests: false,
        reviewRadiologyTests: false,
        reviewMedicineTests: false,
        physicianDiscussion: false,
        obtainOldRecords: false,
        reviewOldRecords: false,
        independentVisualization: false
      });
    } else {
      let dataReviewedOptionsJson = this.get('jsonPayload.medicalDecisionMaking.dataReviewed');

      this.setProperties({
        reviewClinicalTests: dataReviewedOptionsJson.reviewClinicalTests,
        reviewRadiologyTests: dataReviewedOptionsJson.reviewRadiologyTests,
        reviewMedicineTests: dataReviewedOptionsJson.reviewMedicineTests,
        physicianDiscussion: dataReviewedOptionsJson.physicianDiscussion,
        obtainOldRecords: dataReviewedOptionsJson.obtainOldRecords,
        reviewOldRecords: dataReviewedOptionsJson.reviewOldRecords,
        independentVisualization: dataReviewedOptionsJson.independentVisualization,
      });
    }
  }

});
