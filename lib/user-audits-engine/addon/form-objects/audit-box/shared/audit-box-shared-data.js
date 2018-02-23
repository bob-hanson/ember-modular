import Object from '@ember/object';

export default {
  getServiceTypeOptions() {
    return [
      Object.create({ optionName: 'Time Based E/M Service', optionValue: 'Time Based E/M Service', serviceTypeId: 1 }),
      Object.create({ optionName: 'Office/Outpatient visit', optionValue: 'Office/Outpatient visit', timeBased: true, serviceTypeId: 2  }),
      Object.create({ optionName: 'Nurse Visit', optionValue: 'Nurse Visit', timeBased: true, serviceTypeId: 3 }),
      Object.create({ optionName: 'Post-Operative Visit', optionValue: 'Post-Operative Visit', serviceTypeId: 4 }),
      Object.create({ optionName: 'Consultation', optionValue: 'Consultation', timeBased: true, serviceTypeId: 5 }),
      Object.create({ optionName: 'Inpatient Hospital Care', optionValue: 'Inpatient Hospital Care', timeBased: true, serviceTypeId: 6 }),
      Object.create({ optionName: 'Observation Care', optionValue: 'Observation Care', timeBased: true, serviceTypeId: 7   }),
      Object.create({ optionName: 'Observation of Inpatient Hospital Care - Same Day Admit/Discharge', optionValue: 'Observation of Inpatient Hospital Care - Same Day Admit/Discharge', timeBased: true, serviceTypeId: 8   }),
      Object.create({ optionName: 'Emergency Department Services (ED/ER)', optionValue: 'Emergency Department Services (ED/ER)', serviceTypeId: 9  }),
      Object.create({ optionName: 'Preventive Medicine Services', optionValue: 'Preventive Medicine Services', serviceTypeId: 10  }),
      Object.create({ optionName: 'Annual Wellness Visit', optionValue: 'Annual Wellness Visit', serviceTypeId: 11  }),
      Object.create({ optionName: 'Critical Care Services', optionValue: 'Critical Care Services', timeBased: true, serviceTypeId: 12  }),
      Object.create({ optionName: 'Advanced Care Planning', optionValue: 'Advanced Care Planning', timeBased: true, serviceTypeId: 13 }),
      Object.create({ optionName: 'Anticoagulant Mgmt', optionValue: 'Anticoagulant Mgmt', serviceTypeId: 14 }),
      Object.create({ optionName: 'Behavior Change Intervention, Individual', optionValue: 'Behavior Change Intervention, Individual', timeBased: true, serviceTypeId: 15 }),
      Object.create({ optionName: 'Care Plan Oversight Services', optionValue: 'Care Plan Oversight Services', timeBased: true, serviceTypeId: 16 }),
      Object.create({ optionName: 'Case Management Services', optionValue: 'Case Management Services', timeBased: true, serviceTypeId: 17 }),
      Object.create({ optionName: 'Chronic care Management', optionValue: 'Chronic care Management', timeBased: true, serviceTypeId: 18 }),
      Object.create({ optionName: 'Complex Chronic Care Co-ordination Services', optionValue: 'Complex Chronic Care Co-ordination Services', timeBased: true, serviceTypeId: 19 }),
      Object.create({ optionName: 'Complex Chronic Care Management Services', optionValue: 'Complex Chronic Care Management Services', timeBased: true, serviceTypeId: 20 }),
      Object.create({ optionName: 'Counseling Risk Factor Reduction', optionValue: 'Counseling Risk Factor Reduction', timeBased: true, serviceTypeId: 21 }),
      Object.create({ optionName: 'Domiciliary, Rest Home (e.g. Assisted Living Facility), or Home Care Plan Oversight Services', optionValue: 'Domiciliary, Rest Home (e.g. Assisted Living Facility), or Home Care Plan Oversight Services', timeBased: true, serviceTypeId: 22 }),
      Object.create({ optionName: 'Domiciliary, Rest Home (e.g. Boarding Home), or Custodial Care Services', optionValue: 'Domiciliary, Rest Home (e.g. Boarding Home), or Custodial Care Services', timeBased: true, serviceTypeId: 23 }),
      Object.create({ optionName: 'Home Services', optionValue: 'Home Services', timeBased: true, serviceTypeId: 24 }),
      Object.create({ optionName: 'Inpatient Intensive Care Services', optionValue: 'Inpatient Intensive Care Services', serviceTypeId: 25 }),
      Object.create({ optionName: 'Inpatient Neonatal & Pediatric Critical Care', optionValue: 'Inpatient Neonatal & Pediatric Critical Care', timeBased: true, serviceTypeId: 26 }),
      Object.create({ optionName: 'Inpatient Neonatal Intensive Care and Critical Care Services: Inter-Facility Transport', optionValue: 'Inpatient Neonatal Intensive Care and Critical Care Services: Inter-Facility Transport', timeBased: true, serviceTypeId: 27 }),
      Object.create({ optionName: 'Newborn Care Services', optionValue: 'Newborn Care Services', serviceTypeId: 28 }),
      Object.create({ optionName: 'Non Face-To-Face Physician Services', optionValue: 'Non Face-To-Face Physician Services', timeBased: true, serviceTypeId: 29 }),
      Object.create({ optionName: 'Nursing Facility Care Services', optionValue: 'Nursing Facility Care Services', timeBased: true, serviceTypeId: 30 }),
      Object.create({ optionName: 'Ophthalmological Services - General', optionValue: 'Ophthalmological Services - General', serviceTypeId: 31 }),
      Object.create({ optionName: 'Psychiatric Diagnostic Procedure', optionValue: 'Psychiatric Diagnostic Procedure', serviceTypeId: 32 }),
      Object.create({ optionName: 'Psychiatric Services - Other', optionValue: 'Psychiatric Services - Other', timeBased: true, serviceTypeId: 33 }),
      Object.create({ optionName: 'Psychotherapy', optionValue: 'Psychotherapy', timeBased: true, serviceTypeId: 34 }),
      Object.create({ optionName: 'Psychotherapy - Other', optionValue: 'Psychotherapy - Other', serviceTypeId: 35 }),
      Object.create({ optionName: 'Special Evaluation and Management Services', optionValue: 'Special Evaluation and Management Services', serviceTypeId: 36 }),
      Object.create({ optionName: 'Transitional Care Management Services', optionValue: 'Transitional Care Management Services', serviceTypeId: 37 }),
      Object.create({ optionName: 'Others', optionValue: 'Others', serviceTypeId: 38 }),
      Object.create({ optionName: 'Procedure', optionValue: 'Procedure', serviceTypeId: 39  })
    ]
  },

  getVisitTypeOptions() {
    return [
      Object.create({ optionName: 'New Patient', optionValue: 'New Patient', serviceTypes: [2,10,23,24] }),
      Object.create({ optionName: 'Established Patient', optionValue: 'Established Patient', serviceTypes: [2,3,4,10,23,24], noCriteriaRequired: [3] }),
      Object.create({ optionName: 'Outpatient/Office - New or established Patient', optionValue: 'Outpateient/Office - New or established Patient', serviceTypes: [5] }),
      Object.create({ optionName: 'Inpatient - New or established Patient', optionValue: 'Inpatient - New or established Patient', serviceTypes: [5] }),
      Object.create({ optionName: 'Initial Visit', optionValue: 'Initial Visit', serviceTypes: [6,7,11,30] }),
      Object.create({ optionName: 'Subsequent Visit', optionValue: 'Subsequent Visit', serviceTypes: [6,7,11,30] }),
      Object.create({ optionName: 'Inpatient Discharge', optionValue: 'Inpatient Discharge', serviceTypes: [6], noCriteriaRequired: [6] }),
      Object.create({ optionName: 'Observation Discharge', optionValue: 'Observation Discharge', serviceTypes: [7], noCriteriaRequired: [7] }),
      Object.create({ optionName: 'New or Established Patient', optionValue: 'New or Established Patient', serviceTypes: [8,9] }),
      Object.create({ optionName: 'Based on Time of Treatment', optionValue: 'Based on Time of Treatment', serviceTypes: [12], noCriteriaRequired: [12] }),
      Object.create({ optionName: 'Initial 90 Days Therapy', optionValue: 'Initial 90 Days Therapy', serviceTypes: [14] }),
      Object.create({ optionName: 'Each Subsequent 90 Days Therapy', optionValue: 'Each Subsequent 90 Days Therapy', serviceTypes: [14] }),
      Object.create({ optionName: 'Smoking and Tobacco use Cessation', optionValue: 'Smoking and Tobacco use Cessation', serviceTypes: [15], noCriteriaRequired: [12] }),
      Object.create({ optionName: 'Alcohol And/Or Substance Abuse', optionValue: 'Alcohol And/Or Substance Abuse', serviceTypes: [15], noCriteriaRequired: [12] }),
      Object.create({ optionName: 'Under Care of Home Health Agency', optionValue: 'Under Care of Home Health Agency', serviceTypes: [16], noCriteriaRequired: [16] }),
      Object.create({ optionName: 'Hospice Patient', optionValue: 'Hospice Patient', serviceTypes: [16], noCriteriaRequired: [16] }),
      Object.create({ optionName: 'Nursing Facility Patient', optionValue: 'Nursing Facility Patient', serviceTypes: [16], noCriteriaRequired: [16] }),
      Object.create({ optionName: 'Medical Team Conference Face to Face', optionValue: 'Medical Team Conference Face to Face', serviceTypes: [17], noCriteriaRequired: [17] }),
      Object.create({ optionName: 'Medical Team Conference W/O Face to Face - Physician', optionValue: 'Medical Team Conference W/O Face to Face - Physician', serviceTypes: [17], noCriteriaRequired: [17] }),
      Object.create({ optionName: 'Medical Team Conference W/O Face to Face - Non-Physician', optionValue: 'Medical Team Conference W/O Face to Face - Non-Physician', serviceTypes: [17], noCriteriaRequired: [17] }),
      Object.create({ optionName: 'No Face-to-Face Visit Per Calendar Month', optionValue: 'No Face-to-Face Visit Per Calendar Month', serviceTypes: [19], noCriteriaRequired: [19] }),
      Object.create({ optionName: 'One Face-to-Face Visit Per Calendar Month', optionValue: 'One Face-to-Face Visit Per Calendar Month', serviceTypes: [19], noCriteriaRequired: [19] }),
      Object.create({ optionName: 'Base On Treatment Time', optionValue: 'Based On Treatment Time', serviceTypes: [20], noCriteriaRequired: [20] }),
      Object.create({ optionName: 'Individual Counseling, Preventive Medicine (New or Established Patient)', optionValue: 'Individual Counseling, Preventive Medicine (New or Established Patient)', serviceTypes: [21], noCriteriaRequired: [21] }),
      Object.create({ optionName: 'Group Counseling, Preventive Medicine (New or Established Patient)', optionValue: 'Group Counseling, Preventive Medicine (New or Established Patient)', serviceTypes: [21], noCriteriaRequired: [21] }),
      Object.create({ optionName: 'Service Within A Calendar Month', optionValue: 'Service Within A Calendar Month', serviceTypes: [22], noCriteriaRequired: [22] }),
      Object.create({ optionName: 'Initial Treatment Day', optionValue: 'Initial Treatment Day', serviceTypes: [25,26] }),
      Object.create({ optionName: 'Subsequent Treatment Day, Per Day', optionValue: 'Subsequent Treatment Day, Per Day', serviceTypes: [25,26] }),
      Object.create({ optionName: 'Pediatric (24 Months of Age or Younger) Critical Care (Face-to-Face)', optionValue: 'Pediatric (24 Months of Age or Younger) Critical Care (Face-to-Face)', serviceTypes: [27], noCriteriaRequired: [27] }),
      Object.create({ optionName: 'Pediatric (24 Months of Age or Younger) Critical Care (Supervision by Control Physician)', optionValue: 'Pediatric (24 Months of Age or Younger) Critical Care (Supervision by Control Physician)', serviceTypes: [27], noCriteriaRequired: [27] }),
      Object.create({ optionName: 'Initial: Hosp./Birthing Center, Per Day', optionValue: 'Initial: Hosp./Birthing Center, Per Day', serviceTypes: [28] }),
      Object.create({ optionName: 'Initial: Other Than Hosp./Birthing Center, Per Day', optionValue: 'Initial: Other Than Hosp./Birthing Center, Per Day', serviceTypes: [28] }),
      Object.create({ optionName: 'Subsequent Hosp. Care, Per Day', optionValue: 'Subsequent Hosp. Care, Per Day', serviceTypes: [28] }),
      Object.create({ optionName: 'Initial: Hosp./Birthing Center, Per Day, Same Day Discharge', optionValue: 'Initial: Hosp./Birthing Center, Per Day, Same Day Discharge', serviceTypes: [28] }),
      Object.create({ optionName: 'Delivery/Birthing Room Attendance', optionValue: 'Delivery/Birthing Room Attendance', serviceTypes: [28] }),
      Object.create({ optionName: 'Delivery/Birthing Room Resuscitation', optionValue: 'Delivery/Birthing Room Resuscitation', serviceTypes: [28] }),
      Object.create({ optionName: 'Telephone Services', optionValue: 'Telephone Services', serviceTypes: [29], noCriteriaRequired: [29] }),
      Object.create({ optionName: 'Established Patient Only: Online Medical Evaluation', optionValue: 'Established Patient Only: Online Medical Evaluation', serviceTypes: [29], noCriteriaRequired: [29] }),
      Object.create({ optionName: 'Interprofessional Telephone', optionValue: 'Interprofessional Telephone', serviceTypes: [29], noCriteriaRequired: [29] }),
      Object.create({ optionName: 'Other Nursing Facility Services', optionValue: 'Other Nursinc Facility Services', serviceTypes: [30] }),
      Object.create({ optionName: 'Nursing Facility Discharge', optionValue: 'Nursing Facility Discharge', serviceTypes: [30], noCriteriaRequired: [30] }),
      Object.create({ optionName: 'New Patient: Intermediate Service', optionValue: 'New Patient: Intermediate Service', serviceTypes: [31] }),
      Object.create({ optionName: 'New Patient: Comprehensive Service', optionValue: 'New Patient: Comprehensive Service', serviceTypes: [31] }),
      Object.create({ optionName: 'Established Patient: Intermediate Service', optionValue: 'Established Patient: Intermediate Service', serviceTypes: [31] }),
      Object.create({ optionName: 'Established Patient: Comprehensive Service', optionValue: 'Established Patient: Comprehensive Service', serviceTypes: [31] }),
      Object.create({ optionName: 'Psychiatric Diagnostic Procedure', optionValue: 'Psychiatric Diagnostic Procedure', serviceTypes: [32] }),
      Object.create({ optionName: 'Psychiatric Diagnostic Evaluation with Medical Services', optionValue: 'Psychiatric Diagnostic Evaluation with Medical Services', serviceTypes: [32] }),
      Object.create({ optionName: 'Narcosynthesis', optionValue: 'Narcosynthesis', serviceTypes: [33] }),
      Object.create({ optionName: 'Electro-convulsive Therapy', optionValue: 'Electro-convulsive Therapy', serviceTypes: [33] }),
      Object.create({ optionName: 'Individual Psychophysiological Therapy', optionValue: 'Individual Psychophysiological Therapy', serviceTypes: [33], noCriteriaRequired: [33] }),
      Object.create({ optionName: 'Hypnotherapy', optionValue: 'Hypnotherapy', serviceTypes: [33] }),
      Object.create({ optionName: 'Environmental Intervention', optionValue: 'Environmental Intervention', serviceTypes: [33] }),
      Object.create({ optionName: 'Psychiatric Evaluation of Hospital Records', optionValue: 'Psychiatric Evaluation of Hospital Records', serviceTypes: [33] }),
      Object.create({ optionName: 'Interpretation of results of Psychiatric Procedures', optionValue: 'Interpretation of results of Ps', serviceTypes: [33] }),
      Object.create({ optionName: 'Preparation of Report of Patient Status', optionValue: 'Preparation of Report of Patient Status', serviceTypes: [33] }),
      Object.create({ optionName: 'Unlisted Psychiatric Service', optionValue: 'Unlisted Psychiatric Service', serviceTypes: [33] }),
      Object.create({ optionName: 'Pharmacological Management (Including Prescription and Review of Medication)', optionValue: 'Pharmacological Management (Including Prescription and Review of Medication)', serviceTypes: [33] }),
      Object.create({ optionName: 'TMS (Transcranial Magnetic Stimulation)', optionValue: 'TMS (Transcranial Magnetic Stimulation)', serviceTypes: [33] }),
      Object.create({ optionName: 'With Patient and/or Family Without E&M Service', optionValue: 'With Patient and/or Family Without E&M Service', serviceTypes: [34], noCriteriaRequired: [34] }),
      Object.create({ optionName: 'With Patient and/or With E&M Service', optionValue: 'With Patient and/or With E&M Service', serviceTypes: [34], noCriteriaRequired: [34] }),
      Object.create({ optionName: 'Psychotherapy for Crisis', optionValue: 'Psychotherapy for Crisis', serviceTypes: [34], noCriteriaRequired: [34] }),
      Object.create({ optionName: 'Psychoanalysis', optionValue: 'Psychoanalysis', serviceTypes: [35] }),
      Object.create({ optionName: 'Family Psychotherapy Without Patient', optionValue: 'Family Psychotherapy Without Patient', serviceTypes: [35] }),
      Object.create({ optionName: 'Family Psychotherapy With Patient', optionValue: 'Family Psychotherapy With Patient', serviceTypes: [35] }),
      Object.create({ optionName: 'Multiple Family Group Psychotherapy', optionValue: 'Multiple Family Group Psychotherapy', serviceTypes: [35] }),
      Object.create({ optionName: 'Group Psychotherapy Other Than Multiple Family', optionValue: 'Group Psychotherapy Other Than Multiple Family', serviceTypes: [35] }),
      Object.create({ optionName: 'Basic Life Evaluation', optionValue: 'Basic Life Evaluation', serviceTypes: [36] }),
      Object.create({ optionName: 'Work Related - Treating Physician', optionValue: 'Work Related - Treating Physician', serviceTypes: [36] }),
      Object.create({ optionName: 'Work Related - Other Than Treating Physician', optionValue: 'Work Related - Other Than Treating Physician', serviceTypes: [36] }),
      Object.create({ optionName: 'Face-to-Face Within 8*14 Days of Discharge', optionValue: 'Face-to-Face Within 8*14 Days of Discharge', serviceTypes: [37] }),
      Object.create({ optionName: 'Face-to-Face Within 7 Days of Discharge', optionValue: 'Face-to-Face Within 7 Days of Discharge', serviceTypes: [37] })
    ];
  }
};