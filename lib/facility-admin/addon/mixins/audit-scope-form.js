import Mixin from '@ember/object/mixin';
import { alias, notEmpty, not, and } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Mixin.create({

  // guidelineName: 'Srifhari',
  //
  // turnaroundOptions: [{ optionName: 'Foo': optionValue: 'Bar' }],
  facilityType:null,
  isDefaultGuideline: true,
  auditTypeNotes: '',
  frequencyType: null,
  turnAroundType: null,
  prespectiveOrRetrospectiveType:'P',
  passRateThreshold: '',
  passRateThresholdPercentage: 55,
  numOfProviders: 55,
  dosOrProviders: 55,
  receivedRecordsDate: '12/12/2017',
  recordTransferType:null,
  qaReviewType: '100',
  dosIdentificationType: 'PIF',
  dosIdentificationNote: '',
  processInstructions: '',
  additionalInstructions: '',

  facilityAudit: service(),

  frequencyOptions: [
    {optionName:'Weekly', optionValue:'Weekly'},
    {optionName:'Quartelry', optionValue:'Quarterly'},
    {optionName:'HalfYearly', optionValue:'HalfYearly'},
    {optionName:'Yearly', optionValue:'Yearly'}
  ],
  turnAroundTimeOptions: [
    {optionName:'1 Week', optionValue:'1'},
    {optionName:'2 Weeks', optionValue:'2'},
    {optionName:'3 Weeks', optionValue:'3'},
    {optionName:'4 Weeks', optionValue:'4'}
  ],
  facilityOptions: [{optionName:'Inpatient', optionValue:'IP'}, {optionName:'Outpatient', optionValue:'OP'}],
  prespectiveOrRetrospectiveOptions: [{optionName:'Prespective', optionValue:'P'}, {optionName:'Retrospective', optionValue:'R'}],
  recordTransferOptions: [
    {optionName:'Web Upload', optionValue:'W'},
    {optionName:'Manual', optionValue:'M'},
    {optionName:'FTP', optionValue:'F'}
  ],
  qaReviewOptions: [
    {optionName:'0%', optionValue:'0'},
    {optionName:'10%', optionValue:'10'},
    {optionName:'20%', optionValue:'20'},
    {optionName:'30%', optionValue:'30'},
    {optionName:'50%', optionValue:'50'},
    {optionName:'100%', optionValue:'100'}
  ],
  dosIdentificationOptions: [
    {optionName:'PatientIDField', optionValue:'PIF'},
    {optionName:'ProviderIDField', optionValue:'PRIF'}
  ],

  touchables: [
    'guidelineNameIsTouched',
    'frequencyTypeIsTouched',
    'recordTransferTypeIsTouched'

  ],
  guidelineNameIsInvalid: and('blankGuidelineName', 'guidelineNameIsTouched'),
  guidelineNameIsValid: not('guidelineNameIsInvalid'),
  hasGuidelineName: notEmpty('guidelineName'),
  blankGuidelineName: not('hasGuidelineName'),

  frequencyTypeIsInvalid: and('blankFrequencyType','frequencyTypeIsTouched'),
  frequencyTypeIsValid: not('frequencyTypeIsInvalid'),
  hasFrequencyType: notEmpty('frequencyType'),
  blankFrequencyType: not('hasFrequencyType'),

  recordTransferTypeIsInvalid: and('blankRecordTransferType', 'recordTransferTypeIsTouched'),
  recordTransferTypeIsValid: not('recordTransferTypeIsInvalid'),
  hasRecordTransferType: notEmpty('recordTransferType'),
  blankRecordTransferType: not('hasRecordTransferType'),

  hasFacilityType: notEmpty('facilityType'),
  allRequiredFieldsAreMet: and(
    'guidelineNameIsValid',
    'frequencyTypeIsValid',
    'recordTransferTypeIsValid',
    'hasFacilityType'
  ),

  newReportParametersPath: alias('facilityAudit.newReportParametersPath'),
  newScoringMethodPath: alias('facilityAudit.newScoringMethodPath')

});
