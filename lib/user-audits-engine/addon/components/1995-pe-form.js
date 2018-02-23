import { computed, get } from '@ember/object';
import { alias, notEmpty, and, or } from '@ember/object/computed';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/1995-pe-form';
import { hasOwnProperty } from 'hyspa-utilities';

export default FormView.extend({
  layout,
  classNames: ['1995-pe-form'],
  classNameBindings: ['colSpan'],

  pe95: alias('currentApp.auditFormObject.examination.pe95'),
  customFieldDefinitions: alias('pe95.customFieldDefinitions'),
  customFieldValues: alias('pe95.customFieldValues'),

  examElementOptions: alias('selectedAuditType.examElementOptions'),

  hasSelectedAuditType: notEmpty('pe95.selectedExamAuditType'),

  hasOneOrMoreOrganSystemsToggle: hasOwnProperty('selectedAuditType', 'isOneOrMoreOrganSystems'),
  hasCompleteExaminationToggle: hasOwnProperty('selectedAuditType', 'isCompleteExamination'),
  hasExpandedDocumentationToggle: hasOwnProperty('selectedAuditType', 'isExpandedDocumentation'),
  hasAtLeastOneToggle: or('hasExpandedDocumentationToggle', 'hasOneOrMoreOrganSystemsToggle', 'hasCompleteExaminationToggle'),
  showToggles: and('selectedAuditType.detailsSelected', 'hasAtLeastOneToggle'),

  selectedAuditTypeIndex: computed('pe95.selectedExamAuditType', function() {
    return get(this, 'pe95.examAuditTypeOptions').findIndex(option => option.optionValue === get(this, 'pe95.selectedExamAuditType'));
  }),

  selectedAuditType: computed('selectedAuditTypeIndex', function() {
    return get(this, 'pe95.examAuditTypeOptions')[get(this, 'selectedAuditTypeIndex')];
  }),

  initComponent() {
    this._super(...arguments);
  },

  calculateExam() {
    get(this, 'pe95').calculate();
  },

  actions: {

    triggerAuditTypeSelect() {
      this.calculateExam();
    },

    triggerExamElementSelect() {
      this.calculateExam();
    },

    triggerMultipleAreasSelect() {
      this.calculateExam();
    },

    triggerOrganOptionsSelect() {
      this.calculateExam();
    },

    triggerBodyAreasSelect() {
      this.calculateExam();
    },

    triggerSwitchToggle() {
      this.calculateExam();
    }

  }

});
