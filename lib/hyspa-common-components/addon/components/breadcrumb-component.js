// import Ember from 'ember';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/breadcrumb-component';

export default BaseComponent.extend({
  layout,
  classNames: ['breadcrumbs'],
  classNameBindings: ['colSpan']
});
