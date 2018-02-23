import { ifThenElseWithValues } from 'ember-macaroni';
import { not } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/audit-box-reset-clear-buttons';

export default BaseComponent.extend({
  layout,
  classNames: ['reset-clear-buttons'],
  classNameBindings: ['colSpan'],
  clearAndReset: not('clearOnly'),

  isSection: false,

  clearButtonText: ifThenElseWithValues('isSection', 'Clear Section', 'Clear All'),
  resetButtonText: ifThenElseWithValues('isSection', 'Reset Section', 'Reset All')
});
