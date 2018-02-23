import Mixin from '@ember/object/mixin';
import { debounce } from '@ember/runloop';
import { set } from '@ember/object';

export default Mixin.create({
  examCalculation: null,

  calculate() {
    debounce(this, this.runExamCalculation, 300);
  },

  runExamCalculation() {
    var selectedAuditType = this.get('examAuditTypeOptions').findBy('optionValue', this.get('selectedExamAuditType')),
        selectedExamElement = selectedAuditType.get('untrackedSelectedExamElement');

    if (selectedExamElement === 'details') {
      this.calculationFromDetails(selectedAuditType);
    } else {
      this.setExamCalculation(selectedExamElement);
    }

  },

  calculationFromDetails(selectedAuditType) {
    var calculatedResult = null,
        selectedOrganOptions = selectedAuditType.get('selectedOrganOptions') || [],
        selectedBodyOptions = selectedAuditType.get('selectedBodyOptions') || [],
        organSystemsCount = selectedOrganOptions.length,
        bodyAreasCount = selectedBodyOptions.length,
        aggregateCount = organSystemsCount + bodyAreasCount,

        oneOrMoreDocumented = selectedAuditType.get('isOneOrMoreOrganSystems'),
        completeExaminationOrganSystem = selectedAuditType.get('isCompleteExamination'),
        expandedDocumentation = selectedAuditType.get('isExpandedDocumentation'),

        selectedMultipleAreas = selectedAuditType.get('selectedMultipleAreas');

    this.handlePFandEPF(aggregateCount);

    switch (selectedAuditType.get('optionValue')) {
      case 'cms':
        this.handleCms(aggregateCount, oneOrMoreDocumented, completeExaminationOrganSystem, organSystemsCount);
        break;

      case 'noridian':
        this.handleNoridian(aggregateCount, completeExaminationOrganSystem, organSystemsCount);
        break;

      case 'novitas':
        this.handleNovitas(aggregateCount, completeExaminationOrganSystem, organSystemsCount, selectedMultipleAreas);
        break;

      case 'marshfield':
        this.handleMarshfield(aggregateCount, organSystemsCount);
        break;

      case 'ngs':
        this.handleNgs(aggregateCount, expandedDocumentation, organSystemsCount);
        break;
    }

    return calculatedResult;
  },

  handlePFandEPF(aggregateCount) {
    if (aggregateCount === 0) {
      this.setExamCalculation(null);
    }

    if (aggregateCount === 1) {
      this.setExamCalculation('PF');
    }

    if (aggregateCount > 1) {
      this.setExamCalculation('EPF');
    }
  },

  handleCms(aggregateCount, oneOrMoreDocumented, completeExaminationOrganSystem, organSystemsCount) {
    if (aggregateCount > 1 && oneOrMoreDocumented) {
      this.setExamCalculation('Det');
    }

    if (completeExaminationOrganSystem && organSystemsCount > 0 || organSystemsCount > 7) {
      this.setExamCalculation('Comp');
    }
  },

  handleNoridian(aggregateCount, completeExaminationOrganSystem, organSystemsCount) {
    if (aggregateCount > 4) {
      this.setExamCalculation('Det');
    }

    if (completeExaminationOrganSystem && organSystemsCount > 0 || organSystemsCount > 7) {
      this.setExamCalculation('Comp');
    }
  },

  handleNovitas(aggregateCount, completeExaminationOrganSystem, organSystemsCount, selectedMultipleAreas) {
    if (selectedMultipleAreas === '1+ organs' && aggregateCount > 1) {
      this.setExamCalculation('Det');
    }

    if (selectedMultipleAreas === '4+ elements' && aggregateCount > 3) {
      this.setExamCalculation('Det');
    }

    if (completeExaminationOrganSystem && organSystemsCount > 0 || organSystemsCount > 7) {
      this.setExamCalculation('Comp');
    }
  },

  handleMarshfield(aggregateCount, organSystemsCount) {
    if (aggregateCount > 4) {
      this.setExamCalculation('Det');
    }

    if (organSystemsCount > 7) {
      this.setExamCalculation('Comp');
    }
  },

  handleNgs(aggregateCount, expandedDocumentation, organSystemsCount) {
    if (expandedDocumentation && aggregateCount > 5) {
      this.setExamCalculation('Det');
    }

    if (organSystemsCount > 7) {
      this.setExamCalculation('Comp');
    }
  },

  setExamCalculation(calulatedResult) {
    set(this, 'examCalculation', calulatedResult);
  }

});
