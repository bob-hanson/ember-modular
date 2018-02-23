import { debounce } from '@ember/runloop';
import { computed, get } from '@ember/object';
import { equal, not, notEmpty, alias, and, or, gt } from '@ember/object/computed';
import { isEqualByKeys } from 'ember-macaroni';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  examElementsAggregate: 0,
  sectionsWith2: 0,
  sectionsWithAtLeast1: 0,
  shadedCount: 0,
  allInShadedCount: 0,
  unShadedCount: 0,
  oneInUnshadedCount: 0,
  allInShaded: isEqualByKeys('shadedCount', 'allInShadedCount'),
  oneInEachUnshaded: isEqualByKeys('unShadedCount', 'oneInUnshadedCount'),
  allInShadedAndOneInEachUnshaded: and('allInShaded', 'oneInEachUnshaded'),

  gt0: gt('examElementsAggregate', 0),
  gt5: gt('examElementsAggregate', 5),
  gt8: gt('examElementsAggregate', 8),
  gt11: gt('examElementsAggregate', 11),
  atLeast1Gt1: gt('sectionsWithAtLeast1', 1),
  atLeast2Gt5: gt('sectionsWith2', 5),
  atLeast2Gt8: gt('sectionsWith2', 8),
  atLeast12in2: and('gt11', 'atLeast1Gt1'),
  atLeast2In6or12in2: or('atLeast2Gt5', 'atLeast12in2'),

  isMultiSystem: equal('selectedExamAuditType', 'multi-system'),
  isSpecialtySpecific: not('isMultiSystem'),

  isDetails: equal('selectedQuickClick', 'details'),
  isNotDetails: not('isDetails'),

  hasSelectedBodyAreas: notEmpty('selectedBodyAreas'),

  examCalculation: computed('selectedQuickClick', 'examElementsAggregate', function() {
    if (get(this, 'isNotDetails')) {
      return get(this, 'selectedQuickClick');
    } else {
      if (get(this, 'isMultiSystem')) {
        return this.calculateMultiSystemDetails();
      } else {
        return this.calculateSpecialtyDetails();
      }
    }
  }),

  selectedAuditTypeObject: computed('selectedExamAuditType', function() {
    return get(this, 'examAuditTypeOptions').findBy('optionValue', get(this, 'selectedExamAuditType'));
  }),

  selectedExamSpecialtyObject: alias('selectedAuditTypeObject.selectedSpecialty'),

  specialtyIsEye: equal('selectedAuditTypeObject.selectedExamSpecialty', 'eye'),
  specialtyIsPsychiatric: equal('selectedAuditTypeObject.selectedExamSpecialty', 'psychiatric'),
  specialtyIsEyeOrPsychiatric: or('specialtyIsEye', 'specialtyIsPsychiatric'),
  specialtyIsEyeOrPsychiatricAndGt8: and('specialtyIsEyeOrPsychiatric', 'gt8'),

  selectedQuickClick: computed('selectedAuditTypeObject.selectedExamElement', 'selectedExamSpecialtyObject.selectedExamElement', function() {
    if (get(this, 'isMultiSystem')) {
      return get(this, 'selectedAuditTypeObject.selectedExamElement');
    } else {
      return get(this, 'selectedExamSpecialtyObject.selectedExamElement');
    }
  }),

  selectedBodyAreas: computed('isMultiSystem', 'selectedExamSpecialtyObject', function() {
    if (get(this, 'isMultiSystem')) {
      return get(this, 'selectedAuditTypeObject.bodyAreas');
    } else {
      return get(this, 'selectedExamSpecialtyObject.bodyAreas');
    }
  }),

  calculate() {
    debounce(this, this.runExamCalculation, 300);
  },

  runExamCalculation() {
    this.resetCounters();
    if (get(this, 'hasSelectedBodyAreas')) {
      this.calculateCounters();
    }
  },

  resetCounters() {
    this.setProperties({
      examElementsAggregate: 0,
      sectionsWith2: 0,
      sectionsWithAtLeast1: 0,
      shadedCount: 0,
      allInShadedCount: 0,
      unShadedCount: 0,
      oneInUnshadedCount: 0
    });
  },

  calculateCounters() {
    var examElementsAggregate = 0,
        sectionsWith2 = 0,
        sectionsWithAtLeast1 = 0,
        shadedCount = 0,
        allInShadedCount = 0,
        unShadedCount = 0,
        oneInUnshadedCount = 0;

    get(this, 'selectedBodyAreas').forEach(function(bodyArea) {
      var elementsCount = bodyArea.get('elementsCount');

      examElementsAggregate += elementsCount;

      if (elementsCount > 0) {
        sectionsWithAtLeast1++;
      }

      if (elementsCount > 1) {
        sectionsWith2++;
      }

      if (bodyArea.get('isShaded')) {
        shadedCount++;
        if (bodyArea.get('completeBodyArea')) {
          allInShadedCount++;
        }
      } else {
        unShadedCount++;
        if (bodyArea.get('atLeastOne')) {
          oneInUnshadedCount++;
        }
      }
    });

    this.setProperties({
      examElementsAggregate: examElementsAggregate,
      sectionsWith2: sectionsWith2,
      sectionsWithAtLeast1: sectionsWithAtLeast1,
      shadedCount: shadedCount,
      allInShadedCount: allInShadedCount,
      unShadedCount: unShadedCount,
      oneInUnshadedCount: oneInUnshadedCount
    });
  },

  calculateMultiSystemDetails() {
    var calculation = null;

    if (get(this, 'gt0')) {
      calculation = 'PF';
    }

    if (get(this, 'gt5')) {
      calculation = 'EPF';
    }

    if (get(this, 'atLeast2In6or12in2')) {
      calculation = 'Det';
    }

    if (get(this, 'atLeast2Gt8')) {
      calculation = 'Comp';
    }

    return calculation;
  },

  calculateSpecialtyDetails() {
    var calculation = null;

    if (get(this, 'gt0')) {
      calculation = 'PF';
    }

    if (get(this, 'gt5')) {
      calculation = 'EPF';
    }

    if (get(this, 'gt11')) {
      calculation = 'Det';
    }

    if (get(this, 'specialtyIsEyeOrPsychiatricAndGt8')) {
      calculation = 'Det';
    }

    if (get(this, 'allInShadedAndOneInEachUnshaded')) {
      calculation = 'Comp';
    }

    return calculation;
  }

});
