import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Extremities',
  componentName: 'exam-elements-extremities',

  beforeHandleSpecialty() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection and palpation of digits and nails', subLabel: 'e.g. clubbing, cyanosis, inflammation, petechiae, ischemia, infections, nodes', optionValue: 'inpectionDigits' })
    ]);
  }

});
