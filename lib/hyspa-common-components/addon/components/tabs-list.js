import { alias } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/list-column';

export default BaseComponent.extend({
  layout,
  classNames: ['tabs-list'],
  classNameBindings: ['colSpan'],
  tagName: 'ul',

  tabsContainer: alias('parentView')

});
