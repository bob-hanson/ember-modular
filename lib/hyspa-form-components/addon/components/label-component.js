import BaseComponent from 'hyspa-base-components/components/base-component';
import { notEmpty } from '@ember/object/computed';
import layout from '../templates/components/label-component';

export default BaseComponent.extend({
  layout,
  tagName: 'label',
  classNames: ['form-label'],
  classNameBindings: ['colSpan'],
  isRequired: false,

  hasHelpLauncher: notEmpty('launchHelp')
});
