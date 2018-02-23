import { or, not } from '@ember/object/computed';
import BaseExamElementsComponent from './base-exam-elements-component';
import layout from '../templates/components/exam-elements-neurologic';

export default BaseExamElementsComponent.extend({
  layout,
  classNames: ['exam-elements-ent'],

  isMultiSystemOrNeurological: or('isMultiSystem', 'isNeurological'),
  notMultiSystemNorNeurological: not('isMultiSystemOrNeurological'),
  isMultiSystemOrMusculoskeletalOrEnt: or('isMultiSystem', 'isMusculoskeletal', 'isEnt')

});
