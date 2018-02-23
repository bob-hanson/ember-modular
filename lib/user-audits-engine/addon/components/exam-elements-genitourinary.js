import { observer, get, set } from '@ember/object';
import BaseExamElementsComponent from './base-exam-elements-component';
import layout from '../templates/components/exam-elements-genitourinary';

export default BaseExamElementsComponent.extend({
  layout,
  classNames: ['exam-elements-ent'],
  maleElementsDisabled: false,
  femaleElementsDisabled: false,

  handleMaleState: observer('bodyArea.selectedFemaleExamElements', function() {
    if (get(this, 'bodyArea.selectedFemaleExamElements').length > 0) {
      set(this, 'bodyArea.selectedMaleExamElements', []);
      set(this, 'maleElementsDisabled', true);
    } else {
      set(this, 'maleElementsDisabled', false);
    }
  }),

  handleFemaleState: observer('bodyArea.selectedMaleExamElements', function() {
    if (get(this, 'bodyArea.selectedMaleExamElements').length > 0) {
      set(this, 'bodyArea.selectedFemaleExamElements', []);
      set(this, 'femaleElementsDisabled', true);
    } else {
      set(this, 'femaleElementsDisabled', false);
    }
  })

});
