// import Ember from 'ember';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-audits';

export default BaseComponent.extend({
  layout,
  classNames: ['user-audits'],
  classNameBindings: ['colSpan'],
});
