import Object from '@ember/object';
import { computed, get, setProperties } from '@ember/object';
import { or, equal } from '@ember/object/computed';
import BaseAuditboxFormObject from '../../base-objects/base-auditbox-form-object';
import PresentingProblems from './risk-categories/presenting-problems';
import DiagnosticProceduresOrdered from './risk-categories/diagnostic-procedures-ordered';
import ManagementOptionsSelected from './risk-categories/management-options-selected';

export default BaseAuditboxFormObject.extend({
  riskQuickClicks: null,
  selectedRiskQuickClick: null,
  isDetails: equal('selectedRiskQuickClick', 'details'),
  hasHighRiskElements: or('riskPresentingProblems.hasHigh', 'riskDiagnosticProceduresOrdered.hasHigh', 'riskManagementOptionsSelected.hasHigh'),
  hasModerateRiskElements: or('riskPresentingProblems.hasModerate', 'riskDiagnosticProceduresOrdered.hasModerate', 'riskManagementOptionsSelected.hasModerate'),
  hasLowRiskElements: or('riskPresentingProblems.hasLow', 'riskDiagnosticProceduresOrdered.hasLow', 'riskManagementOptionsSelected.hasLow'),
  hasMinimalRiskElements: or('riskPresentingProblems.hasMinimal', 'riskDiagnosticProceduresOrdered.hasMinimal', 'riskManagementOptionsSelected.hasMinimal'),

  selectedRisk: computed('selectedRiskQuickClick', 'hasHighRiskElements', 'hasModerateRiskElements', 'hasLowRiskElements', 'hasMinimalRiskElements', function() {
    return this.determineRisk();
  }),

  selectedRiskNumber: computed('selectedRisk', function() {
    switch(get(this, 'selectedRisk')) {
      case 'High':
        return 4;
      case 'Mod':
        return 3;
      case 'Low':
        return 2;
      case 'Min':
        return 1;
      default:
        return null;
    }
  }),

  setFormProperties() {
    setProperties(this, {
      riskQuickClicks: [
        Object.create({ optionName: 'Details', optionValue: 'details' }),
        Object.create({ optionName: 'Minimal', optionValue: 'Min' }),
        Object.create({ optionName: 'Low', optionValue: 'Low' }),
        Object.create({ optionName: 'Moderate', optionValue: 'Mod' }),
        Object.create({ optionName: 'High', optionValue: 'High' })
      ],
      riskPresentingProblems: PresentingProblems.create(),
      riskDiagnosticProceduresOrdered: DiagnosticProceduresOrdered.create(),
      riskManagementOptionsSelected: ManagementOptionsSelected.create()
    });
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        selectedRiskQuickClick: null
      });
    } else {
      let riskJson = get(this, 'jsonPayload.medicalDecisionMaking.risk');

      setProperties(this, {
        selectedRiskQuickClick: riskJson.selectedRiskQuickClick
      });
    }
  },

  resetChildrenObjects() {
    get(this, 'riskPresentingProblems').resetObject();
    get(this, 'riskDiagnosticProceduresOrdered').resetObject();
    get(this, 'riskManagementOptionsSelected').resetObject();
  },

  clearChildrenObject() {
    get(this, 'riskPresentingProblems').clearObject();
    get(this, 'riskDiagnosticProceduresOrdered').clearObject();
    get(this, 'riskManagementOptionsSelected').clearObject();
  },

  determineRisk() {
    if (get(this, 'isDetails')) {
      return this.determineRiskFromDetails()
    } else {
      return get(this, 'selectedRiskQuickClick');
    }
  },

  determineRiskFromDetails() {
    if (get(this, 'hasHighRiskElements')) {
      return 'High';
    } else if (get(this, 'hasModerateRiskElements')) {
      return 'Mod';
    } else if (get(this, 'hasLowRiskElements')) {
      return 'Low';
    } else if (get(this, 'hasMinimalRiskElements')) {
      return 'Min';
    } else {
      return null;
    }
  }

});
