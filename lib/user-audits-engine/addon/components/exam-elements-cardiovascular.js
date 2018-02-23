import { or } from '@ember/object/computed';
import BaseExamElementsComponent from './base-exam-elements-component';
import layout from '../templates/components/exam-elements-cardiovascular';

export default BaseExamElementsComponent.extend({
  layout,
  classNames: ['exam-elements-ent'],

  multiSystemOrCardiovascular: or('isMultiSystem', 'isCardiovascular')

});
