import Object from '@ember/object';
import { once } from '@ember/runloop';
import { computed, get, set, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';
import AuditBoxSharedData from '../shared/audit-box-shared-data';

export default BaseAuditboxFormObject.extend({
  section: 'patientData',

  setFormProperties() {
    setProperties(this, {
      genderOptions: [
        Object.create({ optionName: 'Male', optionValue: 'male' }),
        Object.create({ optionName: 'Female', optionValue: 'female' })
      ],
      posOptions: [
        Object.create({ optionName: 'Foo', optionValue: 'foo' }),
        Object.create({ optionName: 'Bar', optionValue: 'bar' }),
        Object.create({ optionName: 'Garfield', optionValue: 'garfield' }),
        Object.create({ optionName: 'Jon', optionValue: 'jon' })
      ],
      rvuPosOptions: [
        Object.create({ optionName: 'Non-Facility', optionValue: 'nonFacility' }),
        Object.create({ optionName: 'Facility', optionValue: 'facility' })
      ],
      posCorrectOptions: [
        Object.create({ optionName: 'Yes', optionValue: true }),
        Object.create({ optionName: 'No', optionValue: false })
      ],
      payerOptions: [
        Object.create({ optionName: 'Foo', optionValue: 'foo' }),
        Object.create({ optionName: 'Bar', optionValue: 'bar' })
      ],
      serviceTypeOptions: AuditBoxSharedData.getServiceTypeOptions(),
      visitTypeOptions: AuditBoxSharedData.getVisitTypeOptions(),
      typeOfVisitOptions: [
        Object.create({ optionName: 'Foo', optionValue: 'foo' }),
        Object.create({ optionName: 'Bar', optionValue: 'bar' })
      ]
    });
  },

  setFormValues(clear) {

    if (clear) {
      setProperties(this, {
        name: null,
        id: null,
        dob: null,
        gender: null,
        pos: null,
        rvuPos: null,
        posCorrect: null,
        payer: null,
        dos: null,
        serviceType: null,
        visitType: null,
        additionalData: null
      });
    } else {

      let patientDataJson = get(this, 'jsonPayload.patientData');

      setProperties(this, {
        name: patientDataJson.name,
        id: patientDataJson.patientId,
        dob: patientDataJson.dateOfBirth,
        gender: patientDataJson.gender,
        pos: patientDataJson.placeOfService,
        rvuPos: patientDataJson.rvuPos,
        posCorrect: patientDataJson.posCorrect,
        payer: patientDataJson.payer,
        dos: patientDataJson.dateOfService,
        serviceType: patientDataJson.serviceType,
        visitType: patientDataJson.visitType,
        additionalData: patientDataJson.additionalData
      });

    }

  },

  visitTypeOptionsFiltered: computed('selectedServiceTypeOption', function() {
    var self = this;
    once(this, 'resetVisitType');
    return get(this, 'visitTypeOptions').filter(function(visitTypeOption) {
      return visitTypeOption.serviceTypes.includes(self.get('selectedServiceTypeOption.serviceTypeId'));
    });
  }),

  resetVisitType() {
    set(this, 'visitType', null);
  }

});
