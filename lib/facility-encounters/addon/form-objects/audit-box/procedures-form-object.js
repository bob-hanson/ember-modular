import BaseAuditBoxFormObject from './base-audit-box-form-object';
import { set, get } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default BaseAuditBoxFormObject.extend({
  procedures: null,

  setFormProperties() {
    set(this, 'procedures', []);
  },

  setFormValues() {
    get(this, 'sourceModel').forEach(this.buildProcedure.bind(this));
  },

  buildProcedure(procedure) {
    get(this, 'procedures').pushObject({
      id: get(procedure, 'id'),
      procedureType: get(procedure, 'procedureType'),
      criteria: this.buildCriteria(procedure)
    });
  },

  buildCriteria(procedure) {
    var criteria = [];
    get(procedure, 'facilityProcedureCriteria').forEach(this.buildCriterion.bind(this, criteria));
    return criteria;
  },

  buildCriterion(criteria, criterion) {
    criteria.pushObject({
      criteriaLabel: get(criterion, 'criteriaLabel'),
      criteriaStatus: get(criterion, 'criteriaStatud'),
      criterionOptions: this.buildCriterionOptions(),
      id: get(criterion, 'id')
    });
  },

  buildCriterionOptions() {
    return [
      { optionName: 'Yes', optionValue: 'Yes' },
      { optionName: 'No', optionValue: 'No' },
      { optionName: 'N/A', optionValue: 'N/A' }
    ];
  },

  markRemainingAsNA(procedure) {
    get(procedure, 'criteria').forEach(this.markStatusNAifNull.bind(this));
  },

  clearFormValues() {
    get(this, 'procedures').forEach(this.clearSection.bind(this));
  },

  resetFormValues() {
    get(this, 'procedures').forEach(this.resetSection.bind(this));
  },

  clearSection(procedure) {
    get(procedure, 'criteria').forEach(this.setCriterionStatus.bind(this, null));
  },

  resetSection(procedure) {
    var sourceProcedure = get(this, 'sourceModel').findBy('id', get(procedure, 'id'));
    get(procedure, 'criteria').forEach(this.resetCriterion.bind(this, sourceProcedure));
  },

  resetCriterion(sourceProcedure, criterion) {
    var sourceCriterion = get(sourceProcedure, 'facilityProcedureCriteria').findBy('id', get(criterion, 'id'));
    this.setCriterionStatus(get(sourceCriterion, 'criteriaStatus'), criterion);
  },

  markStatusNAifNull(criterion) {
    if (isEmpty(get(criterion, 'criteriaStatus'))) {
      this.setCriterionStatus('N/A', criterion);
    }
  },

  setCriterionStatus(status, criterion) {
    set(criterion, 'criteriaStatus', status);
  }

});
