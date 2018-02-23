import { observer, get, set } from '@ember/object';
import { not } from '@ember/object/computed';
import BaseExamElementsComponent from './base-exam-elements-component';
import layout from '../templates/components/exam-elements-constitutional';

export default BaseExamElementsComponent.extend({
  layout,
  classNames: ['exam-elements-constitutional'],
  classNameBindings: ['colSpan'],
  vitalsNotSelected: not('bodyArea.isVitals'),

  observeVitalSigns: observer('bodyArea.selectedVitals', function() {
    if (get(this, 'bodyArea.selectedVitals').length > 2) {
      set(this, 'bodyArea.isVitals', true);
    } else if (get(this, 'bodyArea.selectedVitals').length == 2) {
      set(this, 'bodyArea.isVitals', false);
    }
  }),

  observeVitals: observer('bodyArea.isVitals', function() {
    if (get(this, 'vitalsNotSelected') && get(this, 'bodyArea.selectedVitals').length > 2) {
      set(this, 'bodyArea.selectedVitals', []);
    }
  }),

  calculateElements() {
    set(this, 'elementsCount', get(this, 'selectedExamElements').length + get(this, 'isVitalsNumber'));
  }

});
