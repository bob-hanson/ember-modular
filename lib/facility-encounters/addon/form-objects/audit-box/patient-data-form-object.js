import BaseAuditBoxFormObject from './base-audit-box-form-object';
import { setProperties, get } from '@ember/object';

export default BaseAuditBoxFormObject.extend({
  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        patientName: null,
        patientId: null,
        patientDob: null,
        patientGender: null,
        posCorrect: null,
        facilityPosId: null,
        facilityType: null,
        admitDate: null,
        dischargeDate: null,
        raPaydate: null,
        facilityProviderId: get(this, 'sourceModel.facilityProviderId'),
        typeOfVisitId: get(this, 'sourceModel.typeOfVisitId'),
        typeOfServiceId: get(this, 'sourceModel.typeOfServiceId'),
        additionalData: get(this, 'sourceModel.additionalData'),
        rcCorrect: null
      });
    } else {
      setProperties(this, {
        patientName: get(this, 'sourceModel.patientName'),
        patientId: get(this, 'sourceModel.patientAltId'),
        patientDob: get(this, 'sourceModel.patientDob'),
        patientGender: get(this, 'sourceModel.patientGender'),
        posCorrect: get(this, 'sourceModel.posCorrect'),
        facilityPosId: get(this, 'sourceModel.facilityPosId'),
        facilityType: get(this, 'sourceModel.facilityType'),
        admitDate: get(this, 'sourceModel.admitDate'),
        dischargeDate: get(this, 'sourceModel.dischargeDate'),
        raPaydate: get(this, 'sourceModel.raPaydate'),
        facilityProviderId: get(this, 'sourceModel.facilityProviderId'),
        typeOfVisitId: get(this, 'sourceModel.typeOfVisitId'),
        typeOfServiceId: get(this, 'sourceModel.typeOfServiceId'),
        additionalData: get(this, 'sourceModel.additionalData'),
        rcCorrect: false
      });
    }
  }
});
