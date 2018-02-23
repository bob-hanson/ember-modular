import { get } from '@ember/object';
import { equal } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/base-exam-elements-component';

export default BaseComponent.extend({
  layout,
  classNameBindings: ['colSpan'],

  isMultiSystem: equal('bodyArea.specialty', 'multiSystem'),
  isCardiovascular: equal('bodyArea.specialty', 'cardiovascular'),
  isEnt: equal('bodyArea.specialty', 'ent'),
  isEye: equal('bodyArea.specialty', 'eye'),
  isNeurological: equal('bodyArea.specialty', 'neurological'),
  isSkin: equal('bodyArea.specialty', 'skin'),
  isRespiratory: equal('bodyArea.specialty', 'respiratory'),
  isGenitourinaryM: equal('bodyArea.specialty', 'genitourinary-m'),
  isGenitourinaryF: equal('bodyArea.specialty', 'genitourinary-f'),
  isHematologic: equal('bodyArea.specialty', 'hematologic'),
  isMusculoskeletal: equal('bodyArea.specialty', 'musculoskeletal'),
  isPsychiatric: equal('bodyArea.specialty', 'psychiatric'),

  actions: {

    triggerExamElementSelect() {
      get(this, 'bodyArea').calculate();
    }

  }

});
