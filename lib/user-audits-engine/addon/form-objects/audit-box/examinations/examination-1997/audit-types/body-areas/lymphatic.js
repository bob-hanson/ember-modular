import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Lymphatic',
  componentName: 'exam-elements-lymphatic',

  beforeHandleSpecialty() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Palpation of lymph nodes in neck, axillae, groin, and/or other location', optionValue: 'palpation' })
    ]);
  },

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Neck', optionValue: 'neck' }),
      Object.create({ optionName: 'Axillae', optionValue: 'axillae' }),
      Object.create({ optionName: 'Groin', optionValue: 'groin' }),
      Object.create({ optionName: 'Other', optionValue: 'other' })
    ]);
  }

});
