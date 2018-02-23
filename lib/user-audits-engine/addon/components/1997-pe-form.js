import { get } from '@ember/object';
import { alias, and, or, equal, notEmpty } from '@ember/object/computed';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/1997-pe-form';

export default FormView.extend({
  layout,
  classNames: ['1997-pe-form'],
  classNameBindings: ['colSpan'],

  pe97: alias('currentApp.auditFormObject.examination.pe97'),
  customFieldDefinitions: alias('pe97.customFieldDefinitions'),
  customFieldValues: alias('pe97.customFieldValues'),

  isAuditTypeSelected: notEmpty('pe97.selectedExamAuditType'),
  isSpecialtySelected: notEmpty('pe97.selectedAuditType.selectedSpecialty'),
  isMultiSystemAudit: equal('pe97.selectedExamAuditType', 'multi-system'),
  isSpecialtyAudit: equal('pe97.selectedExamAuditType', 'pecialty-specific'),
  isMultiSystemOrIsSpecialtySelected: or('isMultiSystemAudit', 'isSpecialtySelected'),
  shouldShowExamElements: and('isAuditTypeSelected', 'isMultiSystemOrIsSpecialtySelected'),

  isMultiSystemDetails: equal('pe97.selectedAuditType.selectedExamElement', 'details'),
  isSpecialtyDetails: equal('pe97.selectedAuditType.selectedSpecialty.selectedExamElement', 'details'),

  showDetailsSection: or('isMultiSystemDetails', 'isSpecialtyDetails'),

  initComponent() {
    this._super(...arguments);
  },

  actions: {
    triggerCalculateExam() {
      get(this, 'pe97').calculate();
    }
  }

});
