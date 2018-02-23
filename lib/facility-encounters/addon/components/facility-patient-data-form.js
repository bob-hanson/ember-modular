import FormView from 'hyspa-form-components/components/form-view';
import PatientDataValidations from 'facility-encounters/mixins/patient-data-validations';
import { inject as service } from '@ember/service';
import { setProperties, get, set, observer, computed } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { alias, gt } from '@ember/object/computed';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/facility-patient-data-form';

import PatientDataFormObject from 'facility-encounters/form-objects/audit-box/patient-data-form-object';

export default FormView.extend(
  PatientDataValidations, {
  layout,
  classNames: ['facility-patient-data-form'],
  classNameBindings: ['colSpan'],
  facilityAudit: service(),
  currentPatientDataFormModel: alias('facilityAudit.auditFormObject.patientData'),
  posOptions: null,
  serviceTypeOptions: null,
  visitTypeOptions: null,
  checklistPath: alias('facilityAudit.checklistPath'),
  hasVisitTypeOptions: gt('filteredVisitTypeOptions.length', 0),

  filteredVisitTypeOptions: computed('currentPatientDataFormModel.typeOfServiceId', function() {
    return get(this, 'visitTypeOptions').filterBy('auditServiceTypeId', get(this, 'currentPatientDataFormModel.typeOfServiceId'));
  }),

  initComponent() {
    if (get(this, 'currentPatientData.isFullyLoaded')) {
      this.setupFormObject();
    }
    this.setupFormElements();
    this.updateTouchables();
  },

  observeModelChange: observer('currentPatientData.isFullyLoaded', 'currentPatientData', function() {
    if (get(this, 'currentPatientData.isFullyLoaded')) {
      this.setupFormObject();
    }
  }),

  setupFormObject() {
    if (isEmpty(get(this, 'facilityAudit.auditFormObject.patientData'))) {
      set(this, 'facilityAudit.auditFormObject.patientData', PatientDataFormObject.create({
        sourceModel: get(this, 'currentPatientData')
      }));
    }
  },

  setupFormElements() {
    setProperties(this, {
      genderOptions: [
        { optionName: 'Male', optionValue: 'm' },
        { optionName: 'Female', optionValue: 'f' }
      ],
      facilityTypeOptions: [
        { optionName: 'Inpatient', optionValue: 'inpatient' },
        { optionName: 'Outpatient', optionValue: 'outpatient' }
      ],
      rcCorrectOptions: [
        { optionName: 'Yes', optionValue: true },
        { optionName: 'No', optionValue: false }
      ],
      posCorrectOptions: [
        { optionName: 'Yes', optionValue: true },
        { optionName: 'No', optionValue: false }
      ],
      posOptions: get(this, 'store').peekAll('audit-place-of-service'),
      serviceTypeOptions: get(this, 'store').peekAll('audit-service-type'),
      visitTypeOptions: get(this, 'store').peekAll('audit-visit-type')
    });
  },

  updateTouchables(bool) {
    scheduleOnce('afterRender', this, this.setTouchableAttributes.bind(this, bool));
  },

  setTouchableAttributes(bool) {
    let attrs = get(this, 'touchables');
    if (isPresent(attrs)) {
      let touchableProperties = {};
      attrs.forEach(function(attr) {
        touchableProperties[attr] = bool;
      });
      setProperties(this, touchableProperties);
    }
  },

  resetForm() {
    get(this, 'currentPatientData').resetFormValues();
    this.updateTouchables();
  },

  resetVisitType() {
    set(this, 'currentPatientDataFormModel.typeOfVisitId', null);
  },

  actions: {
    triggerClearForm() {
      get(this, 'currentPatientData').clearFormValues();
    },
    triggerResetForm() {
      this.resetForm();
    },
    triggerServiceTypeChange() {
      this.resetVisitType();
    }
  }

});
