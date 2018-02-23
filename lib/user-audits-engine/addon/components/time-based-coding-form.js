import { computed, get } from '@ember/object';
import { alias, gt, equal, not, notEmpty, and, or } from '@ember/object/computed';
import { next } from '@ember/runloop';
import { inject as service } from '@ember/service';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/time-based-coding-form';

export default FormView.extend(
  AuditNavigation, {
  layout,
  classNames: ['time-based-coding-form'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentTimeBasedCoding: alias('currentApp.auditFormObject.timeBasedCoding'),
  customFieldDefinitions: alias('currentTimeBasedCoding.customFieldDefinitions'),
  customFieldValues: alias('currentTimeBasedCoding.customFieldValues'),
  hasCustomFields: alias('currentTimeBasedCoding.hasCustomFields'),

  currentPatientData: alias('currentApp.auditFormObject.patientData'),

  hasSelectedServiceType: notEmpty('currentTimeBasedCoding.serviceType'),
  hasSelectedVisitType: notEmpty('currentTimeBasedCoding.visitType'),

  hasVisitTypeOptions: gt('currentTimeBasedCoding.visitTypeOptionsFiltered.length', 0),
  noVisitTypeOptions: not('hasVisitTypeOptions'),
  hasOneVisitTypeOptions: equal('currentTimeBasedCoding.visitTypeOptionsFiltered.length', 1),

  hasVisitTypeOrNotAvailable: or('hasSelectedVisitType', 'noVisitTypeOptions'),

  selectsFilledIn: and('hasSelectedServiceType', 'hasVisitTypeOrNotAvailable'),

  hasNoRequiredCriteria: notEmpty('currentTimeBasedCoding.selectedVisitTypeOption.noCriteriaRequired'),

  criteriaNotRequired: computed('currentTimeBasedCoding.{serviceType,visitType}', function() {
    if (get(this, 'hasNoRequiredCriteria')) {
      return get(this, 'currentTimeBasedCoding.selectedVisitTypeOption.noCriteriaRequired').includes(get(this, 'currentTimeBasedCoding.selectedServiceTypeOption.serviceTypeId'));
    } else {
      return false;
    }
  }),

  criteriaRequired: not('criteriaNotRequired'),

  allCriteriaTrueOrNotRequired: or('criteriaNotRequired', 'currentTimeBasedCoding.allCriteriaTrue'),

  initComponent() {
    this.checkPatientDataValues();
  },

  checkPatientDataValues() {
    if (get(this, 'currentTimeBasedCoding.changedByPatientData')) {
      get(this, 'currentTimeBasedCoding').set('serviceType', get(this, 'currentPatientData.serviceType'));
      next(this, 'setVisitType', get(this, 'currentPatientData.visitType'));
    }
  },

  setVisitType(visitType) {
    get(this, 'currentTimeBasedCoding').set('visitType', visitType);
  },

  setTimeBasedChangedState() {
    get(this, 'currentTimeBasedCoding').set('changedByPatientData', false);
  },

  setVisitTypeIfOnlyOne() {
    if (get(this, 'hasOneVisitTypeOptions')) {
      next(this, 'setVisitType', get(this, 'currentTimeBasedCoding.visitTypeOptionsFiltered')[0].optionValue);
    }
  },

  resetForm() {
    get(this, 'currentTimeBasedCoding').resetObject();
    next(this, 'reInitCustomFields');
  },

  clearForm() {
    get(this, 'currentTimeBasedCoding').clearObject();
    next(this, 'reInitCustomFields');
  },

  reInitCustomFields() {
    get(this, 'dynamicFormRegistry.registry.timeBasedCodingCustomFields').reInit();
  },

  actions: {
    triggerServiceOrVisitTypeChange() {
      this.setTimeBasedChangedState();
      this.setVisitTypeIfOnlyOne();
    },

    triggerClearForm() {
      this.clearForm();
    },

    triggerResetForm() {
      this.resetForm();
    }

  }

});
