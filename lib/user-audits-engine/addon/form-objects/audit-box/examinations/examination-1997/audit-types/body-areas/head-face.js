import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Head and Face',
  componentName: 'exam-elements-headface',

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of head and face', subLabel: 'e.g. overall appearance, scars, lesions, and masses', optionValue: 'headFaceInspection' }),
      Object.create({ optionName: 'Palpaction and/or percussion of face with notation of presence of sinus tenderness', optionValue: 'facePalpation' }),
      Object.create({ optionName: 'Examination of salivary glands', optionValue: 'salivaryGlands' }),
      Object.create({ optionName: 'Assessment of facial strength', optionValue: 'facialStrength' })
    ]);
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Palpaction and/or percussion of face with notation of presence of sinus tenderness', optionValue: 'facePalpation' })
    ]);
  }

});
