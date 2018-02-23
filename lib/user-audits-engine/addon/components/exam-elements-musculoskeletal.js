import { or } from '@ember/object/computed';
import BaseExamElementsComponent from './base-exam-elements-component';
import layout from '../templates/components/exam-elements-musculoskeletal';

export default BaseExamElementsComponent.extend({
  layout,
  classNames: ['exam-elements-ent'],

  isMultiSystemOrMusculoskeletal: or('isMultiSystem','isMusculoskeletal')

});
