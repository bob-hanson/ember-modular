import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Chest (Breasts)',
  componentName: 'exam-elements-chest',

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of breasts', subLabel: 'e.g. symmetry, nipple discharge', optionValue: 'breastsInspection' }),
      Object.create({ optionName: 'Palpation of breasts and axillae', subLabel: 'e.g. masses or lumps, tenderness', optionValue: 'breastsPalpation' }),
    ]);
  }

});
