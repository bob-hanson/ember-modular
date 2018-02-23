import { equal } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/column-header';

export default BaseComponent.extend({
  layout,
  classNames: ['column-header'],
  classNameBindings: ['colSpan'],

  isNavigationColumn: equal('columnType', 'navigation')
});
