// import Ember from 'ember';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/hyspa-grid';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-grid'],
  classNameBindings: ['colSpan'],

  emptyMessage: 'No Data Found.',
  gridCollection: null
});
